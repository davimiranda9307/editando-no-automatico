"""Servidor local só para testar o site no computador (não vai para a Vercel/Netlify).

- Aceita pedidos de trecho do arquivo (Range), como a Vercel e a Netlify:
  é isso que deixa o vídeo pular direto para qualquer segundo.
- Não guarda cache: toda alteração aparece ao recarregar a página.

Uso (na pasta do projeto):  python .claude/servidor-local.py 5500
"""
import os
import re
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 5500


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "text/javascript; charset=utf-8",
        ".json": "application/json",
        ".svg": "image/svg+xml",
        ".webp": "image/webp",
        ".png": "image/png",
        ".woff2": "font/woff2",
        ".mp4": "video/mp4",
    }

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        self._remaining = None
        rng = self.headers.get("Range")
        path = self.translate_path(self.path)
        if not rng or not os.path.isfile(path):
            return super().send_head()
        m = re.match(r"bytes=(\d*)-(\d*)$", rng.strip())
        if not m or m.groups() == ("", ""):
            return super().send_head()
        size = os.path.getsize(path)
        first, last = m.groups()
        if first == "":
            start, end = max(0, size - int(last)), size - 1
        else:
            start = int(first)
            end = min(int(last), size - 1) if last else size - 1
        if start >= size or start > end:
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.send_header("Content-Length", "0")
            self.end_headers()
            return None
        f = open(path, "rb")
        f.seek(start)
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.end_headers()
        self._remaining = end - start + 1
        return f

    def copyfile(self, source, outputfile):
        remaining = self._remaining
        try:
            if remaining is None:
                super().copyfile(source, outputfile)
                return
            while remaining > 0:
                chunk = source.read(min(64 * 1024, remaining))
                if not chunk:
                    break
                outputfile.write(chunk)
                remaining -= len(chunk)
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            pass  # o navegador cancelou o download (normal com vídeo)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


if __name__ == "__main__":
    handler = partial(Handler, directory=ROOT)
    with ThreadingHTTPServer(("127.0.0.1", PORT), handler) as httpd:
        print(f"Site em http://localhost:{PORT}  (Ctrl+C para parar)", flush=True)
        httpd.serve_forever()

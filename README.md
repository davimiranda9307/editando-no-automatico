# Editando no Automático — landing page de vendas

Página de vendas estática (HTML, CSS e JavaScript puros, sem framework e sem etapa de build), feita para carregar rápido no celular e ser publicada na Vercel ou na Netlify.

> **Lembrete importante:** em **01/01/2027** troque o preço para **R$ 147 também na Kiwify**. A página troca sozinha para R$ 147 quando o prazo acaba, mas o valor cobrado no checkout é o que estiver configurado na Kiwify.

---

## 1. Estrutura

```
/index.html                      página de vendas (7 seções + rodapé)
/politica-de-privacidade.html    política de privacidade (LGPD)
/termos-de-uso.html              termos de uso e condições de compra
/css/styles.css                  todo o visual (cores no topo, em :root)
/js/config.js                    ← TODAS as variáveis editáveis
/js/main.js                      comportamento da página (não precisa editar)
/assets/img/                     imagens (logo, capas, foto, prints, OG)
/assets/video/                   vídeos (demo, bruto, pronto)
/assets/fonts/                   fontes Inter e Space Grotesk (licença OFL)
/vercel.json  /netlify.toml      cabeçalhos de cache e segurança
/robots.txt
```

## 2. Como editar o `js/config.js`

Abra `js/config.js` em qualquer editor de texto (até o Bloco de Notas). Troque só o que está entre aspas e mantenha a vírgula no fim de cada linha.

Tudo que estiver com `[PREENCHER]` ou `[CONFIRMAR]` aparece na página com **contorno laranja tracejado**, pra você enxergar o que ainda falta. O console do navegador também avisa quantos ainda existem.

| Variável | O que é | Exemplo |
|---|---|---|
| `CHECKOUT_URL` | Link do checkout da Kiwify. Enquanto estiver com `[PREENCHER]`, os botões só rolam até a oferta. | `"https://pay.kiwify.com.br/AbC123x"` |
| `PRECO_OFERTA` / `PRECO_CHEIO` | Preços sem "R$". Centavos com vírgula. | `"97"` / `"147"` |
| `DATA_FIM_OFERTA` | Fim do preço de lançamento, horário de Brasília. | `"2026-12-31T23:59:59-03:00"` |
| `PARCELAMENTO_TEXTO` | Opcional. Parcelamento durante a oferta. Vazio = não aparece. | `"ou 12x de R$ X,XX no cartão"` |
| `PARCELAMENTO_TEXTO_CHEIO` | Opcional. Parcelamento do preço cheio (depois do prazo). | |
| `TEMPO_ANTES` / `TEMPO_DEPOIS` | Seu tempo de edição antes e hoje. Aparece no topo, nos números e no comparativo. | `"3 horas"` / `"10 minutos"` |
| `VIDEO_DEMO_URL` | Vídeo do topo (editado 100% pela IA). Vazio = placeholder. | `"assets/video/demo.mp4"` |
| `VIDEO_BRUTO_URL` / `VIDEO_PRONTO_URL` | Vídeos do comparador. Vazio = placeholder. | `"assets/video/bruto.mp4"` |
| `META_PIXEL_ID` | ID do Pixel (só números). Vazio = Pixel não carrega. | `"123456789012345"` |
| `WHATSAPP_NUMERO` | DDI + DDD + número, só números. Vazio = botão some. | `"5511999999999"` |
| `WHATSAPP_MENSAGEM` | Mensagem que já vem escrita no WhatsApp. | |
| `INSTAGRAM_USER` | Seu @, sem o "@". Vazio = link some do rodapé. | `"seuperfil"` |
| `EMAIL_CONTATO` | E-mail de contato e de pedidos sobre dados pessoais (LGPD). | |
| `TEMPO_DE_ACESSO` | Como deve aparecer depois de "Acesso". | `"por 1 ano"` ou `"vitalício"` |
| `CUSTO_EDITOR_MES` | Quanto um editor cobra por mês (comparativo da seção 3). | `"a partir de R$ X por mês"` |
| `RAZAO_SOCIAL_OU_NOME` / `CNPJ_OU_CPF` | Dados do rodapé e das páginas legais. | |
| `NUMEROS` | Cards de números da seção 2. `{TEMPO_ANTES}` e `{TEMPO_DEPOIS}` são trocados automaticamente. Lista vazia `[]` = bloco some. | |
| `TIMELINE_EDICAO` | Marcações "o que a IA fez" do vídeo pronto (`m:ss`). Com o vídeo configurado, clicar na marcação leva o vídeo àquele trecho. | `{ tempo: "0:02", texto: "Cortou 4 segundos de silêncio" }` |
| `TIMELINE_EH_EXEMPLO` | `true` mostra o aviso [CONFIRMAR] na linha do tempo. Mude para `false` quando colocar as marcações reais. | |
| `DEPOIMENTOS` | Seção "Depoimentos" (prints ou texto). Só depoimentos **reais**, nunca invente. Lista vazia `[]` = a seção some. | `{ imagem: "assets/img/depoimento-1.webp" }` |

### Domínio (fora do config.js)

As tags de compartilhamento (Open Graph) precisam ficar escritas direto no HTML, porque o WhatsApp e o Facebook não executam JavaScript. Em `index.html`, troque as duas ocorrências de `https://SEU-DOMINIO.com.br/` pelo seu domínio real (procure por `SEU-DOMINIO`).

## 3. Imagens e vídeos para subir

Todos os arquivos vão com **exatamente estes nomes**. Enquanto um arquivo não existir, a página mostra um placeholder com o nome esperado.

| Arquivo | Onde aparece | Tamanho recomendado | Peso máximo |
|---|---|---|---|
| `assets/img/logo-editando-no-automatico.png` | Topo e rodapé | PNG transparente, 72 px de altura (ex.: 360×72) | 20 KB |
| `assets/video/demo.mp4` | Celular do topo | 720×1280 (9:16), H.264, 15 a 40 s | 4 MB |
| `assets/img/poster-demo.webp` | Capa do vídeo do topo | 720×1280 | 80 KB |
| `assets/video/bruto.mp4` | Comparador: bruto | 720×1280 (9:16), H.264 | 6 MB |
| `assets/img/poster-bruto.webp` | Capa do bruto | 720×1280 | 80 KB |
| `assets/video/pronto.mp4` | Comparador: pronto | 720×1280 (9:16), H.264 | 6 MB |
| `assets/img/poster-pronto.webp` | Capa do pronto | 720×1280 | 80 KB |
| `assets/img/modulo-1.webp` … `modulo-5.webp` | Capas dos módulos | 600×900 (2:3), vertical | 60 KB cada |
| `assets/img/bonus.webp` | Capa da aula bônus | 600×900 (2:3) | 60 KB |
| `assets/img/depoimento-1.webp` … `depoimento-3.webp` | Seção "Depoimentos" | print até 800 px de largura (ou foto 88×88 no formato texto) | 100 KB cada |
| `assets/img/og.webp` | Prévia ao compartilhar o link | 1200×630 | 100 KB (já existe uma versão pronta) |

**Depoimentos:** se algum print mostrar o nome ou o logotipo da ferramenta de IA, **borre** antes de subir. O nome da ferramenta não pode aparecer em nenhum lugar da página.

**Capas dos módulos:** o número e o nome do módulo já aparecem em texto abaixo da capa, então a imagem pode ser só a arte.

**Vídeo do topo + "Pronto" sincronizados:** hoje o topo e o "Pronto" usam o mesmo arquivo (`assets/video/pronto.mp4`). Quem assiste no topo e desce a página continua no "Pronto" do mesmo segundo (tocando, se estava tocando); subindo de volta, o topo continua de onde o "Pronto" parou. Clicar em **Bruto** mostra e toca o vídeo sem edição; clicar em **Pronto** volta para o editado. Se um dia o topo e o "Pronto" usarem arquivos diferentes, a sincronização desliga sozinha.

### Comprimindo os vídeos (opcional, com ffmpeg)

Vídeo vertical 720×1280, leve e com início rápido no celular:

```bash
ffmpeg -i original.mov -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280" -c:v libx264 -preset slow -crf 26 -profile:v high -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart assets/video/demo.mp4
```

Capa a partir de um quadro do vídeo (no segundo 1):

```bash
ffmpeg -ss 1 -i assets/video/demo.mp4 -frames:v 1 -q:v 80 assets/img/poster-demo.webp
```

Sem ffmpeg, dá pra converter imagens para WebP no site squoosh.app (qualidade 75 a 80).

## 4. Preço, prazo e contador

- Até `DATA_FIM_OFERTA`: selo "Preço de lançamento", "de R$ 147 por R$ 97", contador regressivo real (dias, horas, minutos) e o texto de prazo.
- Depois do prazo (verificado ao abrir a página e no instante em que o contador zera): o contador, o selo, o "de/por" e o texto de prazo somem, e aparece só **R$ 147** em laranja, no tamanho grande. A barra fixa do celular e o valor dos eventos do Pixel também passam a usar 147.
- O contador usa uma data fixa: não reinicia e não depende de quando a pessoa entrou.
- O texto de prazo ("válido até 31/12/2026 … a partir de 01/01/2027") é calculado a partir de `DATA_FIM_OFERTA`.

**Como testar o "depois do prazo" sem esperar:** mude temporariamente `DATA_FIM_OFERTA` para uma data passada (ex.: `"2025-01-01T00:00:00-03:00"`), abra a página, confira e **volte o valor original**.

## 5. Rastreamento (Meta Pixel e UTMs)

Com `META_PIXEL_ID` preenchido:

- `PageView` ao abrir a página (o script da Meta só é baixado depois que a página termina de carregar, pra não atrasar o celular).
- `ViewContent` uma vez, quando a seção de oferta aparece na tela.
- `InitiateCheckout` no clique de qualquer botão que leva ao checkout.
- Todos com `value` = preço vigente (97 ou 147) e `currency: "BRL"`.

Se você também configurar o Pixel dentro do produto na Kiwify, ela dispara os eventos dela no checkout (incluindo a compra). Confira no Gerenciador de Eventos se o `InitiateCheckout` não está sendo contado duas vezes e, se estiver, desative um dos dois.

**UTMs:** os parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid` e `src` que chegarem na URL são repassados ao `CHECKOUT_URL` (o primeiro com `?`, os demais com `&`). Eles ficam guardados durante a visita, então não se perdem se a pessoa abrir a política de privacidade e voltar.

## 6. Publicação

Não existe etapa de build: a pasta inteira é o site.

**Testar no computador antes de publicar:** na pasta do projeto, rode `python .claude/servidor-local.py` e abra http://localhost:5500. Esse servidor deixa o vídeo pular para qualquer segundo (como a Vercel e a Netlify) e não guarda cache.

**Netlify (mais simples):** acesse app.netlify.com/drop e arraste a pasta do projeto. Para usar seu domínio: *Domain management → Add a domain*.

**Vercel:** crie um repositório no GitHub com estes arquivos e importe em vercel.com/new (framework: *Other*, sem build command, output directory em branco). Ou, com Node instalado, rode na pasta do projeto:

```bash
npx vercel --prod
```

Depois de publicar:

1. Troque `SEU-DOMINIO.com.br` no `index.html` e publique de novo.
2. Teste o link no Depurador de Compartilhamento da Meta (developers.facebook.com/tools/debug) para atualizar a prévia.
3. Faça uma compra de teste (ou use o modo de teste da Kiwify) e confira se as UTMs chegaram no pedido.

Toda alteração no `config.js` precisa ser publicada de novo. O `config.js` está configurado para nunca ficar preso em cache, então o preço novo aparece na hora.

## 7. Desempenho e acessibilidade

- Fontes hospedadas no próprio site (sem Google Fonts), com pré-carregamento das duas principais.
- Vídeos com `preload="none"`, capa em WebP e `playsinline`. O vídeo do topo começa mudo e só depois do carregamento da página; tem botões de som e de pausa. Não toca sozinho para quem ativou "reduzir movimento" ou "economia de dados".
- Imagens abaixo da dobra com carregamento preguiçoso e largura/altura definidas.
- Animações só com `transform`/`opacity`, pausadas fora da tela e desligadas com "reduzir movimento".
- Um único `h1`, foco visível em botões e no FAQ, contraste AA nos textos (o "R$ 97" tem no mínimo 5,6:1 sobre o card, já contando o brilho laranja; o "R$ 147" riscado passa 3,5:1, o mínimo para texto grande).

## 8. LGPD e cookies

As páginas legais foram escritas com base na LGPD e no Código de Defesa do Consumidor, mas **não substituem revisão jurídica**. Pontos para decidir com sua assessoria:

- Se o Pixel da Meta vai exigir aviso/consentimento de cookies (a página hoje não tem banner, porque o briefing pede nenhuma faixa extra).
- Prazos de guarda dos dados de compra.
- Quem é o encarregado de dados (hoje o canal é o `EMAIL_CONTATO`).

## 9. Fontes

Inter e Space Grotesk estão sob a SIL Open Font License 1.1 (arquivos de licença em `assets/fonts/`). Uso comercial liberado.

## 10. Checklist antes de publicar

Abra a página e procure os trechos com contorno laranja tracejado. Lista completa:

**No `js/config.js`**
- [x] `CHECKOUT_URL` (link da Kiwify)
- [ ] `TEMPO_ANTES` e `TEMPO_DEPOIS` (seus tempos reais de edição)
- [ ] `NUMEROS`: "vídeos editados com esse método" e "horas economizadas por semana"
- [ ] `TIMELINE_EDICAO` com as marcações reais do vídeo pronto, depois `TIMELINE_EH_EXEMPLO: false`
- [x] `TEMPO_DE_ACESSO` (vitalício)
- [ ] `CUSTO_EDITOR_MES`
- [ ] `EMAIL_CONTATO`
- [ ] `INSTAGRAM_USER`
- [ ] `DEPOIMENTOS`: subir os prints reais (ou deixar `[]` para esconder a seção)
- [ ] Opcionais: `META_PIXEL_ID`, `WHATSAPP_NUMERO`, `PARCELAMENTO_TEXTO`

**No `index.html`**
- [ ] `SEU-DOMINIO.com.br` (2 vezes, nas tags Open Graph)
- [x] Oferta: confirmar "atualizações das aulas quando a ferramenta mudar"

**Nas páginas legais**
- [ ] Política: provedor de hospedagem (Vercel ou Netlify), aviso de cookies, prazos de guarda
- [ ] Termos: requisitos mínimos e compromisso de atualizações

**Arquivos**: logo, 6 capas (5 módulos + bônus) e os prints dos depoimentos. Os 3 vídeos e as capas deles já estão prontos. Ver a seção 3.

**Kiwify**: em 01/01/2027, trocar o preço para R$ 147 também na Kiwify.

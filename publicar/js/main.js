/*
 * EDITANDO NO AUTOMÁTICO — scripts da página (sem dependências)
 * Lê tudo de window.CONFIG (js/config.js). Não é preciso editar este arquivo.
 */
(function () {
  'use strict';

  var C = window.CONFIG || {};
  var doc = document;
  var root = doc.documentElement;

  /* ---------- Utilidades ---------- */
  var $ = function (s, el) { return (el || doc).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(s)); };
  var str = function (v) { return v == null ? '' : String(v).trim(); };
  var isUrlLike = function (v) { return /^(https?:)?\/\//i.test(str(v)) || /^[\w./-]+\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(str(v)); };
  var isHttp = function (v) { return /^https?:\/\//i.test(str(v)); };
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var warn = function (msg) { if (window.console) console.warn('[Editando no Automático] ' + msg); };

  // Troca {CHAVE} pelo valor correspondente do CONFIG
  var tokens = function (s) {
    return str(s).replace(/\{([A-Z_]+)\}/g, function (m, k) { return k in C ? str(C[k]) : m; });
  };
  var money = function (v) { return 'R$ ' + str(v); };
  var toNumber = function (v) {
    var n = parseFloat(str(v).replace(/[^\d,.-]/g, '').replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.'));
    return isFinite(n) ? n : 0;
  };
  var el = function (tag, cls, text) {
    var node = doc.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };
  var onVisible = function (target, cb, opts) {
    if (!target) return;
    if (!hasIO) { cb(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); cb(); } });
    }, opts || { rootMargin: '300px 0px' });
    io.observe(target);
  };

  /* ==========================================================
     1. TEXTOS DO CONFIG
     ========================================================== */
  function fillConfigText() {
    $$('[data-cfg]').forEach(function (node) {
      var key = node.getAttribute('data-cfg');
      var val = str(C[key]);
      if (val) node.textContent = tokens(val);
    });
    // Blocos que dependem de valores: escondidos se algum estiver vazio
    $$('[data-requires]').forEach(function (node) {
      var keys = node.getAttribute('data-requires').split(/\s+/);
      node.hidden = keys.some(function (k) { return !str(C[k]); });
    });
    $$('[data-year]').forEach(function (n) { n.textContent = String(new Date().getFullYear()); });
  }

  /* ==========================================================
     2. PREÇO, PRAZO E CONTADOR
     ========================================================== */
  var END = Date.parse(str(C.DATA_FIM_OFERTA));
  var offerConfigured = !isNaN(END);
  if (!offerConfigured) warn('DATA_FIM_OFERTA inválida no config.js. Mostrando o preço cheio.');
  var offerOver = function () { return !offerConfigured || Date.now() >= END; };
  var expired = offerOver();
  var currentPrice = function () { return expired ? C.PRECO_CHEIO : C.PRECO_OFERTA; };

  function fmtDate(ms) {
    try {
      return new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric' }).format(ms);
    } catch (e) {
      var d = new Date(ms);
      return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();
    }
  }

  function fillPrices() {
    $$('[data-price="oferta"]').forEach(function (n) { n.textContent = money(C.PRECO_OFERTA); });
    $$('[data-price="cheio"]').forEach(function (n) { n.textContent = money(C.PRECO_CHEIO); });
    if (offerConfigured) {
      $$('[data-date="fim"]').forEach(function (n) { n.textContent = fmtDate(END); });
      $$('[data-date="cheio"]').forEach(function (n) { n.textContent = fmtDate(END + 1000); });
    }
  }

  // Antes do prazo: "de R$ 147 por R$ 97" + selo + contador + texto de prazo.
  // Depois: só "R$ 147" em laranja.
  function applyPriceState() {
    $$('[data-offer-only]').forEach(function (n) { n.hidden = expired; });
    $$('[data-full-only]').forEach(function (n) { n.hidden = !expired; });
    root.classList.toggle('is-full-price', expired);
    var parc = str(expired ? C.PARCELAMENTO_TEXTO_CHEIO : C.PARCELAMENTO_TEXTO);
    $$('[data-parcelamento]').forEach(function (n) { n.textContent = parc; n.hidden = !parc; });
  }

  function initCountdown() {
    var box = $('[data-countdown]');
    if (!box || expired) return;
    var dEl = $$('[data-cd="d"]'), hEl = $$('[data-cd="h"]'), mEl = $$('[data-cd="m"]');
    var last = '';
    var timer = null;
    var set = function (list, v) { list.forEach(function (n) { n.textContent = v; }); };
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };

    function tick() {
      if (!expired && offerOver()) {
        expired = true;
        applyPriceState();
      }
      if (expired) { if (timer) clearInterval(timer); return; }
      var diff = Math.max(0, END - Date.now());
      var d = Math.floor(diff / 864e5);
      var h = Math.floor((diff % 864e5) / 36e5);
      var m = Math.floor((diff % 36e5) / 6e4);
      var key = d + ':' + h + ':' + m;
      if (key === last) return;
      last = key;
      set(dEl, String(d)); set(hEl, pad(h)); set(mEl, pad(m));
      box.setAttribute('aria-label', 'O preço de lançamento termina em ' + d + (d === 1 ? ' dia, ' : ' dias, ') + h + (h === 1 ? ' hora e ' : ' horas e ') + m + (m === 1 ? ' minuto' : ' minutos'));
    }
    tick();
    timer = setInterval(tick, 1000);
    doc.addEventListener('visibilitychange', function () { if (!doc.hidden) tick(); });
  }

  /* ==========================================================
     3. META PIXEL
     ========================================================== */
  var pixelOn = false;
  function initPixel() {
    var id = str(C.META_PIXEL_ID);
    if (!id) return;
    if (!/^\d{6,20}$/.test(id)) { warn('META_PIXEL_ID inválido (use só números). Pixel não carregado.'); return; }
    // Fila do fbq criada agora; o script da Meta só é baixado depois do carregamento da página.
    var n = window.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!window._fbq) window._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    window.fbq('init', id);
    window.fbq('track', 'PageView');
    pixelOn = true;
    var inject = function () {
      var s = doc.createElement('script');
      s.async = true;
      s.src = 'https://connect.facebook.net/en_US/fbevents.js';
      doc.head.appendChild(s);
    };
    if (doc.readyState === 'complete') inject(); else window.addEventListener('load', inject, { once: true });
  }
  function track(eventName) {
    if (!pixelOn || !window.fbq) return;
    window.fbq('track', eventName, {
      value: toNumber(currentPrice()),
      currency: 'BRL',
      content_name: 'Editando no Automático',
      content_type: 'product'
    });
  }
  function initViewContent() {
    var offer = $('#oferta');
    if (!offer || !pixelOn) return;
    onVisible(offer, function () { track('ViewContent'); }, { threshold: 0.2 });
  }

  /* ==========================================================
     4. CHECKOUT + UTMs
     ========================================================== */
  var TRACK_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'src'];
  var STORE_KEY = 'ena_params';

  function trackingParams() {
    var current = {};
    var found = false;
    try {
      var qs = new URLSearchParams(window.location.search);
      TRACK_PARAMS.forEach(function (k) { var v = qs.get(k); if (v) { current[k] = v; found = true; } });
    } catch (e) { /* navegador sem URLSearchParams */ }
    // Guarda na sessão pra não perder as UTMs se a pessoa abrir as páginas legais e voltar.
    try {
      if (found) sessionStorage.setItem(STORE_KEY, JSON.stringify(current));
      else current = JSON.parse(sessionStorage.getItem(STORE_KEY) || '{}') || {};
    } catch (e) { /* armazenamento bloqueado */ }
    return current;
  }

  function buildCheckoutUrl() {
    var base = str(C.CHECKOUT_URL);
    if (!isHttp(base)) return '';
    var hash = '';
    var i = base.indexOf('#');
    if (i > -1) { hash = base.slice(i); base = base.slice(0, i); }
    var params = trackingParams();
    var pairs = [];
    TRACK_PARAMS.forEach(function (k) {
      if (!params[k]) return;
      if (new RegExp('[?&]' + k + '=').test(base)) return; // não duplica o que já está no link
      pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
    });
    if (!pairs.length) return base + hash;
    return base + (base.indexOf('?') > -1 ? '&' : '?') + pairs.join('&') + hash;
  }

  function initCheckout() {
    var url = buildCheckoutUrl();
    if (!url) warn('CHECKOUT_URL não configurado no config.js. Os botões de compra estão levando para #oferta.');
    $$('[data-checkout]').forEach(function (a) {
      if (url) a.setAttribute('href', url);
      a.addEventListener('click', function (e) {
        if (!url) return; // sem checkout: segue a âncora #oferta
        track('InitiateCheckout');
        var plainClick = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && a.target !== '_blank';
        if (pixelOn && plainClick && !e.defaultPrevented) {
          // pequena espera para o evento do Pixel sair antes da troca de página
          e.preventDefault();
          setTimeout(function () { window.location.href = url; }, 250);
        }
      });
    });
  }

  /* ==========================================================
     5. VÍDEOS
     ========================================================== */

  /* O vídeo editado aparece em dois lugares: no topo e no "Pronto" da prova.
     Quando a pessoa desce, o "Pronto" continua do segundo em que o topo parou
     (tocando, se o topo estava tocando). Subindo de volta, o topo continua de
     onde o "Pronto" parou. Só vale quando os dois usam o mesmo arquivo. */
  var SYNC_EDITED = !!str(C.VIDEO_DEMO_URL) && str(C.VIDEO_DEMO_URL) === str(C.VIDEO_PRONTO_URL);
  var edited = { owner: 'hero', hero: null, pronto: null };

  function playSafe(v, muted) {
    if (muted != null) v.muted = muted;
    var p = v.play();
    // Se o navegador bloquear o play com som, tenta de novo sem som
    if (p && p.catch) p.catch(function () {
      if (v.muted) return;
      v.muted = true;
      var p2 = v.play();
      if (p2 && p2.catch) p2.catch(function () {});
    });
  }

  function seekTo(v, t, cb) {
    var go = function () {
      if (isFinite(t) && Math.abs((v.currentTime || 0) - t) > 0.25) { try { v.currentTime = t; } catch (e) {} }
      if (cb) cb();
    };
    if (v.readyState >= 1) { go(); return; }
    v.addEventListener('loadedmetadata', go, { once: true });
    v.preload = 'auto';
    v.load();
  }

  // Passa o vídeo editado de um lugar pro outro, mantendo segundo, play/pausa e som.
  function handoff(toName, forcePlay, muted) {
    var from = edited[toName === 'pronto' ? 'hero' : 'pronto'];
    var to = edited[toName];
    if (!SYNC_EDITED || !from || !to) return;
    var fv = from.video;
    var t = fv.ended ? 0 : (fv.currentTime || 0);
    var resume = forcePlay || from.wasPlaying();
    if (muted == null) muted = fv.muted;
    from.release();
    edited.owner = toName;
    seekTo(to.video, t, function () {
      if (resume) playSafe(to.video, muted);
      else to.video.muted = muted;
    });
  }

  function setIcon(btn, id) {
    var use = btn && btn.querySelector('use');
    if (use) use.setAttribute('href', '#' + id);
  }

  function prepareVideoBox(box) {
    var key = box.getAttribute('data-video-box');
    var url = str(C[key]);
    var video = $('video', box);
    var ph = $('.video-ph', box);
    if (!video) return null;
    if (!url || !isUrlLike(url)) {
      if (url) warn(key + ' não parece um caminho de vídeo válido: ' + url);
      video.removeAttribute('poster');
      video.hidden = true;
      if (ph) ph.hidden = false;
      box.classList.add('has-placeholder');
      return null;
    }
    return { video: video, url: url };
  }

  function initHeroVideo() {
    var box = $('.phone__screen[data-video-box]');
    if (!box) return;
    var prep = prepareVideoBox(box);
    if (!prep) return;
    var v = prep.video;
    var bigPlay = $('[data-hero-bigplay]', box);
    var controls = $('[data-hero-controls]', box);
    var toggleBtn = $('[data-hero-toggle]', box);
    var soundBtn = $('[data-hero-sound]', box);
    var userPaused = false;
    var autoPaused = false;
    var started = false;
    var heroVisible = true;

    v.src = prep.url; // preload="none": nada é baixado até dar play

    if (SYNC_EDITED) {
      edited.hero = {
        video: v,
        wasPlaying: function () { return !v.paused || (autoPaused && !userPaused); },
        release: function () { autoPaused = false; if (!v.paused) v.pause(); }
      };
      v.addEventListener('play', function () {
        userPaused = false;
        edited.owner = 'hero';
        if (edited.pronto && !edited.pronto.video.paused) edited.pronto.release();
      });
    }

    function sync() {
      var playing = !v.paused && !v.ended;
      if (playing) started = true;
      if (bigPlay) bigPlay.hidden = playing;
      if (controls) controls.hidden = !started;
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-label', playing ? 'Pausar vídeo' : 'Reproduzir vídeo');
        setIcon(toggleBtn, playing ? 'i-pause' : 'i-play');
      }
      if (soundBtn) {
        soundBtn.setAttribute('aria-pressed', String(!v.muted));
        setIcon(soundBtn, v.muted ? 'i-sound-off' : 'i-sound-on');
        var label = soundBtn.querySelector('span');
        if (label) label.textContent = v.muted ? 'Ativar som' : 'Desativar som';
      }
    }
    function play() {
      var p = v.play();
      if (p && p.catch) p.catch(function () { sync(); });
    }
    ['play', 'pause', 'volumechange', 'ended', 'playing', 'seeked'].forEach(function (ev) { v.addEventListener(ev, sync); });

    if (bigPlay) bigPlay.addEventListener('click', function () { userPaused = false; play(); });
    if (toggleBtn) toggleBtn.addEventListener('click', function () {
      if (v.paused) { userPaused = false; play(); } else { userPaused = true; v.pause(); }
      sync();
    });
    if (soundBtn) soundBtn.addEventListener('click', function () {
      v.muted = !v.muted;
      if (v.paused) { userPaused = false; play(); }
      sync();
    });

    // Autoplay mudo só depois que a página terminou de carregar (não atrapalha o carregamento)
    var saveData = navigator.connection && navigator.connection.saveData;
    function start() {
      if (prefersReducedMotion || saveData) { sync(); if (bigPlay) bigPlay.hidden = false; return; }
      if (!heroVisible) { autoPaused = true; return; } // fora da tela: começa quando aparecer
      play();
    }
    if (doc.readyState === 'complete') start(); else window.addEventListener('load', start, { once: true });

    // Pausa quando sai da tela, retoma quando volta (se não foi o usuário que pausou).
    // Se nesse meio-tempo a pessoa assistiu no "Pronto", continua do segundo em que parou lá.
    if (hasIO) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          heroVisible = e.isIntersecting;
          if (!e.isIntersecting) {
            if (!v.paused) { autoPaused = true; v.pause(); }
          } else if (SYNC_EDITED && edited.owner === 'pronto') {
            handoff('hero');
          } else if (autoPaused && !userPaused) {
            autoPaused = false; play();
          }
        });
      // Observa o lugar fixo do celular no topo (não o celular que "cai" com a rolagem)
      }, { threshold: 0.2 }).observe(box.closest('.phone-wrap') || box);
    }
    sync();
    // Enquanto o autoplay não começa, mostra só a capa (sem botão piscando)
    if (bigPlay && !prefersReducedMotion && !saveData) bigPlay.hidden = true;
  }

  /* Efeito de rolagem: o celular do topo "cai" quando a pessoa começa a descer.
     Ele se solta, acelera pra baixo, gira e some pela parte de baixo da tela.
     Rolando de volta, ele volta pro lugar. Desligado com "reduzir movimento". */
  function initHeroFall() {
    var wrap = $('.phone-wrap');
    var phone = wrap && $('.phone', wrap);
    if (!phone || prefersReducedMotion) return;
    var chips = $$('.float-chip', wrap);
    var start = 0, dist = 1, vh = 0, last = -1, ticking = false;

    function measure() {
      vh = window.innerHeight;
      var saved = phone.style.transform;
      phone.style.transform = 'none';
      var r = phone.getBoundingClientRect();
      phone.style.transform = saved;
      // Começa quando o centro do celular passa do meio da tela (no desktop, logo no início)
      start = Math.max(0, r.top + window.scrollY + r.height / 2 - vh * 0.5);
      dist = vh * (window.innerWidth < 1024 ? 0.5 : 0.65);
      last = -1;
    }
    function update() {
      ticking = false;
      var y = window.scrollY;
      var p = Math.min(1, Math.max(0, (y - start) / dist));
      if (p === last) return;
      last = p;
      if (p === 0) {
        phone.style.transform = ''; phone.style.opacity = ''; phone.style.visibility = ''; phone.style.pointerEvents = '';
        phone.classList.remove('is-falling');
        chips.forEach(function (c) { c.style.opacity = ''; });
        return;
      }
      var g = p * p; // gravidade: começa devagar e acelera
      var ty = (y - start) + g * vh * 0.95;
      phone.classList.add('is-falling');
      phone.style.transform = 'translate3d(' + (g * 48).toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0) rotate(' + (g * 18).toFixed(2) + 'deg)';
      phone.style.opacity = p < 0.6 ? '1' : Math.max(0, 1 - (p - 0.6) / 0.4).toFixed(3);
      // Depois que começa a sumir, o celular não pode ficar invisível por cima do resto da página
      // (ele ficava em cima dos botões Pronto/Bruto e "roubava" o clique).
      phone.style.pointerEvents = p >= 0.6 ? 'none' : '';
      phone.style.visibility = p >= 1 ? 'hidden' : '';
      chips.forEach(function (c) { c.style.opacity = Math.max(0, 1 - p * 3).toFixed(3); });
    }
    function onScroll() { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }

    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { measure(); update(); });
    window.addEventListener('load', function () { measure(); update(); }, { once: true });
  }

  /* "O que a IA faz por você": no toque, destaca em laranja o card que está sob o dedo
     (no mouse isso é feito só com CSS :hover). */
  function initFeatureTouch() {
    var list = $('.features');
    if (!list) return;
    var cards = $$('.feature', list);
    var timer = null;
    function hot(card) {
      cards.forEach(function (c) { c.classList.toggle('is-hot', c === card); });
    }
    function fromTouch(e) {
      var t = e.touches && e.touches[0];
      if (!t) return;
      clearTimeout(timer);
      var node = doc.elementFromPoint(t.clientX, t.clientY);
      hot(node && node.closest ? node.closest('.feature') : null);
    }
    list.addEventListener('touchstart', fromTouch, { passive: true });
    list.addEventListener('touchmove', fromTouch, { passive: true });
    ['touchend', 'touchcancel'].forEach(function (ev) {
      list.addEventListener(ev, function () { clearTimeout(timer); timer = setTimeout(function () { hot(null); }, 700); }, { passive: true });
    });
  }

  /* "Como funciona": conforme o próximo passo sobe por cima, o de baixo encolhe e escurece.
     O empilhamento em si é CSS (position: sticky); aqui só o acabamento. */
  function initStepsStack() {
    var steps = $$('.steps .step');
    if (steps.length < 2 || prefersReducedMotion) return;
    var list = steps[0].parentNode;
    var ticking = false;
    function update() {
      ticking = false;
      var box = list.getBoundingClientRect();
      if (box.bottom < -200 || box.top > window.innerHeight + 200) return;
      for (var i = 0; i < steps.length - 1; i++) {
        var a = steps[i].getBoundingClientRect();
        var b = steps[i + 1].getBoundingClientRect();
        var h = steps[i].offsetHeight || 1;
        var p = Math.min(1, Math.max(0, 1 - (b.top - a.top) / h));
        steps[i].style.transform = p ? 'scale(' + (1 - 0.06 * p).toFixed(4) + ')' : '';
        steps[i].style.setProperty('--dim', (p * 0.5).toFixed(3));
      }
    }
    function onScroll() { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  var compareApi = null;
  function initCompare() {
    var root = $('[data-compare]');
    if (!root) return;
    var items = $$('.compare__item', root);
    var buttons = $$('[data-show]', root);
    var videos = {};
    var urls = {};

    // Capa e vídeo só são definidos quando o bloco se aproxima da tela (ou quando a pessoa escolhe esse vídeo)
    function ensureSrc(name) {
      var v = videos[name];
      if (!v || v.getAttribute('src')) return;
      var poster = v.getAttribute('data-poster');
      if (poster) v.setAttribute('poster', poster);
      v.src = urls[name];
    }

    items.forEach(function (item) {
      var box = $('[data-video-box]', item);
      if (!box) return;
      var prep = prepareVideoBox(box);
      if (!prep) return;
      var name = item.getAttribute('data-item');
      videos[name] = prep.video;
      urls[name] = prep.url;
      onVisible(box, function () { ensureSrc(name); });
    });

    function show(name) {
      items.forEach(function (it) { it.classList.toggle('is-active', it.getAttribute('data-item') === name); });
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-show') === name)); });
      Object.keys(videos).forEach(function (k) { if (k !== name && !videos[k].paused) videos[k].pause(); });
    }

    // Clicar em Pronto ou Bruto mostra esse vídeo e já dá play, com som (foi a pessoa que escolheu).
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        var name = b.getAttribute('data-show');
        show(name);
        if (!videos[name]) return;
        ensureSrc(name);
        if (name === 'pronto' && SYNC_EDITED && edited.hero && edited.owner === 'hero') handoff('pronto', true, false);
        else playSafe(videos[name], false);
      });
    });

    // "Pronto" sincronizado com o vídeo do topo
    var pv = videos.pronto;
    if (SYNC_EDITED && pv) {
      var prontoAutoPaused = false;
      edited.pronto = {
        video: pv,
        wasPlaying: function () { return !pv.paused || prontoAutoPaused; },
        release: function () { prontoAutoPaused = false; if (!pv.paused) pv.pause(); }
      };
      pv.addEventListener('play', function () {
        prontoAutoPaused = false;
        edited.owner = 'pronto';
        if (edited.hero && !edited.hero.video.paused) edited.hero.release();
      });
      if (hasIO) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              // Chegou no "Pronto" vindo do topo: continua do mesmo segundo
              if (edited.owner === 'hero' && edited.hero) { ensureSrc('pronto'); handoff('pronto'); }
              else if (prontoAutoPaused) { prontoAutoPaused = false; playSafe(pv); }
            } else if (!pv.paused) {
              prontoAutoPaused = true; pv.pause();
            }
          });
        }, { threshold: 0.5 }).observe(pv.closest('[data-video-box]') || pv);
      }
    }

    compareApi = {
      show: show,
      pronto: function () { return videos.pronto || null; },
      el: root
    };
  }

  /* ==========================================================
     6. IMAGENS: placeholder com o nome do arquivo se não existir
     ========================================================== */
  function watchImage(img) {
    var box = img.closest('.media, .logo') || img.parentElement;
    var ok = function () { box.classList.add('is-loaded'); box.classList.remove('is-missing'); };
    var fail = function () { box.classList.add('is-missing'); };
    if (img.complete && img.getAttribute('src')) {
      if (img.naturalWidth > 0) ok(); else fail();
    } else {
      img.addEventListener('load', ok, { once: true });
      img.addEventListener('error', fail, { once: true });
    }
  }
  function initImages() { $$('img[data-ph]').forEach(watchImage); }

  function makeMedia(src, alt, cls, w, h) {
    var wrap = el('div', 'media' + (cls ? ' ' + cls : ''));
    wrap.setAttribute('data-file', src);
    var img = doc.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.width = w; img.height = h;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.setAttribute('data-ph', '');
    wrap.appendChild(img);
    watchImage(img);
    return wrap;
  }

  /* ==========================================================
     7. BLOCOS OPCIONAIS (some se a lista estiver vazia)
     ========================================================== */
  var list = function (v) { return Array.isArray(v) ? v.filter(Boolean) : []; };
  var showBlock = function (name, visible) { var b = $('[data-block="' + name + '"]'); if (b) b.hidden = !visible; return b; };

  function parseTime(t) {
    var m = /^(?:(\d+):)?(\d{1,2}):(\d{2})$/.exec(str(t));
    if (!m) return NaN;
    return (+m[1] || 0) * 3600 + (+m[2]) * 60 + (+m[3]);
  }

  function renderTimeline() {
    var items = list(C.TIMELINE_EDICAO).filter(function (i) { return str(i.tempo) || str(i.texto); });
    var block = showBlock('timeline', items.length > 0);
    if (!block || !items.length) return;
    var ol = $('[data-timeline-list]', block);
    var marks = $('[data-track-marks]', block);
    var hint = $('[data-timeline-hint]', block);
    var example = $('[data-timeline-example]', block);
    if (example) example.hidden = C.TIMELINE_EH_EXEMPLO === false;

    var secs = items.map(function (i) { return parseTime(i.tempo); });
    var max = Math.max.apply(null, secs.filter(isFinite).concat([1]));
    var total = max + 4;
    var canSeek = !!(compareApi && compareApi.pronto());
    if (hint) hint.hidden = !canSeek;

    items.forEach(function (item, idx) {
      var li = el('li', 'edit-log__item');
      var t = secs[idx];
      var tc;
      if (canSeek && isFinite(t)) {
        tc = el('button', 'tc', str(item.tempo));
        tc.type = 'button';
        tc.setAttribute('aria-label', 'Ver o trecho ' + str(item.tempo) + ' no vídeo pronto');
        tc.addEventListener('click', function () {
          var v = compareApi.pronto();
          compareApi.show('pronto');
          var go = function () { try { v.currentTime = t; } catch (e) {} var p = v.play(); if (p && p.catch) p.catch(function () {}); };
          if (!v.getAttribute('src')) {
            var poster = v.getAttribute('data-poster');
            if (poster) v.setAttribute('poster', poster);
            v.src = str(C.VIDEO_PRONTO_URL);
          }
          if (v.readyState >= 1) go(); else { v.addEventListener('loadedmetadata', go, { once: true }); v.load(); }
          var frame = v.closest('.compare__item') || v;
          frame.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
        });
      } else {
        tc = el('span', 'tc', str(item.tempo));
      }
      li.appendChild(tc);
      li.appendChild(el('span', 'edit-log__text', tokens(item.texto)));
      ol.appendChild(li);

      if (marks && isFinite(t)) {
        var mk = el('span', 'track__mark');
        mk.style.left = Math.min(97, Math.max(2, (t / total) * 100)) + '%';
        mk.setAttribute('data-t', str(item.tempo));
        marks.appendChild(mk);
      }
    });
  }

  function renderNumbers() {
    var items = list(C.NUMEROS).filter(function (i) { return str(i.valor) || str(i.legenda); });
    var block = showBlock('numeros', items.length > 0);
    if (!block || !items.length) return;
    var ul = $('[data-numeros-list]', block);
    items.forEach(function (i) {
      var li = el('li', 'stat card');
      li.appendChild(el('span', 'stat__value', tokens(i.valor)));
      li.appendChild(el('span', 'stat__label', tokens(i.legenda)));
      ul.appendChild(li);
    });
  }

  function renderTestimonials() {
    var items = list(C.DEPOIMENTOS).filter(function (i) { return str(i.texto) || str(i.imagem); });
    var block = showBlock('depoimentos', items.length > 0);
    if (!block || !items.length) return;
    var grid = $('[data-depoimentos-list]', block);
    items.forEach(function (i) {
      var fig = el('figure', 'testimonial card');
      var nome = str(i.nome);
      if (str(i.imagem)) {
        fig.appendChild(makeMedia(str(i.imagem), nome ? 'Depoimento de ' + nome : 'Depoimento', 'testimonial__print', 800, 1000));
      }
      if (str(i.texto)) {
        var bq = el('blockquote');
        bq.appendChild(el('p', null, str(i.texto)));
        fig.appendChild(bq);
      }
      if (nome || str(i.descricao)) {
        var cap = el('figcaption');
        if (str(i.foto)) {
          var img = doc.createElement('img');
          img.className = 'testimonial__photo';
          img.src = str(i.foto); img.alt = ''; img.width = 44; img.height = 44;
          img.loading = 'lazy'; img.decoding = 'async';
          cap.appendChild(img);
        }
        var who = el('span');
        if (nome) who.appendChild(el('span', 'testimonial__name', nome));
        if (str(i.descricao)) who.appendChild(el('span', 'testimonial__desc', str(i.descricao)));
        cap.appendChild(who);
        fig.appendChild(cap);
      }
      grid.appendChild(fig);
    });
  }

  /* ==========================================================
     8. RODAPÉ, WHATSAPP, INSTAGRAM
     ========================================================== */
  function initContacts() {
    var ig = str(C.INSTAGRAM_USER).replace(/^@/, '');
    $$('[data-instagram]').forEach(function (a) {
      if (!ig || /^\[/.test(ig)) { a.hidden = true; return; }
      a.href = 'https://www.instagram.com/' + encodeURIComponent(ig) + '/';
      a.textContent = 'Instagram @' + ig;
      a.target = '_blank';
      a.rel = 'noopener';
      a.hidden = false;
    });

    var num = str(C.WHATSAPP_NUMERO).replace(/\D/g, '');
    var w = $('[data-whats]');
    if (w) {
      if (num.length >= 10) {
        w.href = 'https://wa.me/' + num + (str(C.WHATSAPP_MENSAGEM) ? '?text=' + encodeURIComponent(str(C.WHATSAPP_MENSAGEM)) : '');
        w.hidden = false;
      } else {
        w.hidden = true;
      }
    }
    var email = str(C.EMAIL_CONTATO);
    $$('[data-email]').forEach(function (a) {
      if (email && email.indexOf('@') > 0 && !/^\[/.test(email)) a.href = 'mailto:' + email;
      a.textContent = email || '[PREENCHER]';
    });
  }

  /* ==========================================================
     9. BARRA FIXA (aparece depois do hero, some na oferta)
     ========================================================== */
  function initSticky() {
    var bar = $('[data-sticky]');
    var hero = $('.hero');
    if (!bar || !hero || !hasIO) return;
    var state = { heroGone: false, blocked: {} };
    var update = function () {
      var blocked = Object.keys(state.blocked).some(function (k) { return state.blocked[k]; });
      var show = state.heroGone && !blocked;
      bar.classList.toggle('is-visible', show);
      doc.body.classList.toggle('sticky-on', show);
      if (show) root.style.setProperty('--sticky-h', bar.offsetHeight + 'px');
    };
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { state.heroGone = !e.isIntersecting && e.boundingClientRect.top < 0; });
      update();
    }).observe(hero);
    // Some quando a oferta (seção 7) ou o preço do fechamento estão na tela
    ['#oferta', '#fechamento'].forEach(function (sel) {
      var t = $(sel);
      if (!t) return;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { state.blocked[sel] = e.isIntersecting; });
        update();
      }).observe(t);
    });
    // Some também quando um botão de compra da página está na tela,
    // senão a barra fica por cima dele no celular e o clique não pega
    $$('[data-checkout]').forEach(function (btn, i) {
      if (bar.contains(btn)) return;
      var key = 'cta' + i;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { state.blocked[key] = e.isIntersecting; });
        update();
      }).observe(btn);
    });
  }

  /* ==========================================================
     10. ANIMAÇÕES SÓ QUANDO VISÍVEIS
     ========================================================== */
  function initAnimations() {
    var targets = $$('[data-anim]');
    if (!hasIO) { targets.forEach(function (t) { t.classList.add('is-inview'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('is-inview', e.isIntersecting); });
    }, { rootMargin: '100px 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ==========================================================
     11. DESTAQUE DE [PREENCHER] / [CONFIRMAR]
     ========================================================== */
  function highlightPlaceholders() {
    var re = /\[(?:PREENCHER|CONFIRMAR)[^\]]*\]/g;
    var walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT|MARK|TEXTAREA)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        re.lastIndex = 0;
        return re.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var frag = doc.createDocumentFragment();
      var last = 0;
      re.lastIndex = 0;
      var m;
      while ((m = re.exec(text))) {
        if (m.index > last) frag.appendChild(doc.createTextNode(text.slice(last, m.index)));
        frag.appendChild(el('mark', 'ph', m[0]));
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(doc.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
    if (nodes.length) warn(nodes.length + ' trecho(s) com [PREENCHER]/[CONFIRMAR] na página. Veja o README.');
  }

  /* ==========================================================
     INÍCIO
     ========================================================== */
  function run(fn) { try { fn(); } catch (e) { if (window.console) console.error(e); } }

  run(fillConfigText);
  run(fillPrices);
  run(applyPriceState);
  run(initCountdown);
  run(initPixel);
  run(initCheckout);
  run(initViewContent);
  run(initImages);
  run(initHeroVideo);
  run(initHeroFall);
  run(initFeatureTouch);
  run(initStepsStack);
  run(initCompare);
  run(renderTimeline);
  run(renderNumbers);
  run(renderTestimonials);
  run(initContacts);
  run(initSticky);
  run(initAnimations);
  run(highlightPlaceholders);
})();

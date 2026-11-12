/*
 * EDITANDO NO AUTOMÁTICO — CONFIGURAÇÃO DA PÁGINA
 * ===============================================
 * Tudo o que muda no dia a dia fica neste arquivo.
 *
 * Como editar:
 * - Troque só o que está entre aspas e mantenha a vírgula no fim de cada linha.
 * - Campo vazio ("") esconde o item correspondente quando isso estiver indicado.
 * - Qualquer texto com [PREENCHER] ou [CONFIRMAR] aparece com contorno laranja
 *   tracejado na página, pra você enxergar o que ainda falta trocar.
 * - Depois de salvar, publique de novo (passo a passo no README.md).
 */
window.CONFIG = {

  /* ============ CHECKOUT E PREÇO ============ */

  // Link do checkout da Kiwify. Ex.: "https://pay.kiwify.com.br/AbC123x"
  // Enquanto estiver com [PREENCHER], os botões de compra só levam até a seção de oferta.
  CHECKOUT_URL: "https://pay.kiwify.com.br/RlpsoaT",

  // Preços sem "R$". Se tiver centavos, use vírgula (ex.: "97,90").
  PRECO_OFERTA: "97",
  PRECO_CHEIO: "147",

  // Fim do preço de lançamento, no horário de Brasília (-03:00).
  // Até essa data: "de R$ 147 por R$ 97" + contador regressivo.
  // Depois dela: a página mostra só "R$ 147", sozinha, sem precisar republicar.
  // IMPORTANTE: em 01/01/2027 troque o preço também na Kiwify.
  DATA_FIM_OFERTA: "2026-12-31T23:59:59-03:00",

  // Opcional. Parcelamento durante a oferta, igual ao que a Kiwify mostra.
  // Ex.: "ou 12x de R$ X,XX no cartão". Vazio = não aparece.
  PARCELAMENTO_TEXTO: "",

  // Opcional. Parcelamento do preço cheio, usado depois do prazo. Vazio = não aparece.
  PARCELAMENTO_TEXTO_CHEIO: "",


  /* ============ PROVA: TEMPO DE EDIÇÃO ============ */

  // Quanto tempo você levava pra editar um vídeo e quanto leva hoje.
  // Ex.: "3 horas" e "10 minutos". Aparecem no topo, nos números e no comparativo.
  TEMPO_ANTES: "1 a 2 horas",
  TEMPO_DEPOIS: "35 minutos",


  /* ============ VÍDEOS ============ */

  // Caminho do arquivo (ex.: "assets/video/demo.mp4") ou URL completa (https://...).
  // Vazio = aparece um placeholder com o nome do arquivo esperado.
  // As capas ficam em: assets/img/poster-demo.webp, poster-bruto.webp e poster-pronto.webp
  // O topo e o "Pronto" usam o mesmo arquivo: o navegador baixa uma vez só.
  VIDEO_DEMO_URL: "assets/video/pronto.mp4",    // vídeo do topo (editado 100% pela IA)
  VIDEO_BRUTO_URL: "assets/video/bruto.mp4",    // como você gravou
  VIDEO_PRONTO_URL: "assets/video/pronto.mp4",  // o que a IA devolveu


  /* ============ RASTREAMENTO ============ */

  // ID do Pixel da Meta (só os números). Vazio = o Pixel não é carregado.
  META_PIXEL_ID: "",


  /* ============ CONTATO E REDES ============ */

  // WhatsApp com DDI + DDD, só números. Ex.: "5511999999999". Vazio = botão escondido.
  WHATSAPP_NUMERO: "",
  WHATSAPP_MENSAGEM: "Oi, Davi! Tenho uma dúvida sobre o curso Editando no Automático.",

  // Seu usuário do Instagram, sem o "@". Vazio = link escondido no rodapé.
  INSTAGRAM_USER: "[PREENCHER]",

  // E-mail de contato. Também é o canal para pedidos sobre dados pessoais (LGPD).
  EMAIL_CONTATO: "[PREENCHER]",


  /* ============ CURSO ============ */

  // Escreva como deve aparecer depois da palavra "Acesso". Ex.: "por 1 ano" ou "vitalício".
  TEMPO_DE_ACESSO: "vitalício",

  // Quanto um editor cobra por mês (coluna "Contratar editor" do comparativo).
  // Ex.: "a partir de R$ X por mês"
  CUSTO_EDITOR_MES: "R$ 500 por mês",


  /* ============ DADOS LEGAIS (rodapé e páginas legais) ============ */

  RAZAO_SOCIAL_OU_NOME: "Davi Miranda",
  CNPJ_OU_CPF: "446.545.128-88",


  /* ============ BLOCOS OPCIONAIS (lista vazia [] = bloco escondido) ============ */

  // Cards de números da seção "Bruto x Pronto".
  // {TEMPO_ANTES} e {TEMPO_DEPOIS} são trocados automaticamente pelos valores lá de cima.
  // Desativado (lista vazia). Para reativar, use o formato:
  // { valor: "{TEMPO_ANTES}", legenda: "pra editar um vídeo, antes do método" },
  NUMEROS: [],

  // Linha do tempo "O que a IA fez nesse vídeo", com as marcações do VIDEO_PRONTO.
  // Desativada (lista vazia). Para reativar, use o formato (tempo em m:ss):
  // { tempo: "0:02", texto: "Cortou 4 segundos de silêncio" },
  TIMELINE_EDICAO: [],
  // Deixe true enquanto as marcações acima forem de exemplo (mostra um aviso [CONFIRMAR]).
  // Troque para false quando colocar as marcações reais do seu vídeo.
  TIMELINE_EH_EXEMPLO: true,

  // Seção "Depoimentos". Use só depoimentos REAIS. Nunca invente.
  // Lista vazia [] = a seção inteira some da página.
  // Print:  { nome: "Nome", imagem: "assets/img/depoimento-1.webp" }
  // Texto:  { nome: "Nome", descricao: "@perfil ou profissão", texto: "O que a pessoa disse.", foto: "assets/img/depoimento-1.webp" }
  // (nome, foto e descricao são opcionais)
  // Os 3 abaixo são espaços reservados: suba os prints com esses nomes em assets/img/
  // ou troque/remova as linhas.
  DEPOIMENTOS: [
    { imagem: "assets/img/depoimento-1.webp" },
    { imagem: "assets/img/depoimento-2.webp" },
    { imagem: "assets/img/depoimento-3.webp" },
  ],
};

# ESTILO.md — Manual de edição

> Base: 3 vídeos de referência do mesmo criador (Giu Becker / "Comunicadores Magnéticos"), analisados quadro a quadro.
> Este arquivo é **instrução de edição**. Siga na ordem.
> - Onde aparece **"não foi possível medir"**, o valor não foi medido com segurança. Não invente um.
> - Onde aparece **[CONFIRMAR]**, a decisão é sua.

---

## Como ler as evidências

| Sigla | Arquivo | Tempo |
|---|---|---|
| `ref1` | `referencias/ref1_1794252374950.mp4` (horizontal) | — |
| `ref2` | `referencias/ref2_1794252488241.mp4` (vertical) | — |
| `ref3` | `referencias/ref3_1794252527202.mp4` (vertical) | — |
| `ref1 ·0.5s #23` | `analise/ref1/quadros_0.5s/f_0023.jpg` | (23 − 1) × 0,5 = **11,0 s** |
| `ref1 ·0.1s #15` | `analise/ref1/quadros_0.1s_inicio/f_0015.jpg` | (15 − 1) × 0,1 = **1,4 s** |

- **"% da base"** é a distância a partir da borda de baixo do quadro, em % da altura total.
- **"Altura"** de texto é a altura da letra maiúscula (ou da minúscula com haste), em % da altura do quadro.
- A lista completa de cortes de cada vídeo está em `analise/refN/CORTES_FINAL.txt`.

---

## 0. Antes de editar: escolha o formato

| Formato | Use quando | Referência | Specs da referência |
|---|---|---|---|
| **A — Talking-head horizontal** | Vídeo falado para a câmera, em 16:9 | ref1 | 142,5 s · 1276×720 · 24 fps · 773 kbps |
| **B — Montagem de bastidores vertical** | Mostrar um processo com narração e vários ângulos | ref2 | 58,8 s · 720×1280 · 24 fps · 1.699 kbps |
| **C — Tutorial vertical com tela dividida** | Mostrar tela de app/computador junto com o rosto | ref3 | 95,9 s · 720×1280 · 24 fps · 1.108 kbps |

- **Taxa de quadros:** exporte em **24 fps** (as 3 referências usam).
- **Proporção:**
  - Vertical **9:16** é o padrão (2 de 3 referências).
  - Horizontal 16:9 só no formato A.
- **Resolução:** as referências estão em 720p porque foram baixadas do Instagram. Exporte em **1080×1920**. Todas as medidas deste manual estão em %, então valem para qualquer resolução.
- **Duração:** entre 58,8 s e 142,5 s. Nenhuma referência passa de 2:23.
- **[CONFIRMAR]** Qual formato é o padrão dos seus vídeos. Até você decidir, o padrão provisório é o **C (vertical) com legenda branca de 1 palavra**.

---

## 1. Legenda

### 1.1 Cores (hex medidos nos próprios quadros)

| Uso | Hex | Evidência |
|---|---|---|
| **Amarelo de destaque (vertical)** | `#F5FF63` | ref3 ·0.5s #103 ("narrativa"), #172 ("você"), #63 ("falar") |
| **Amarelo de destaque (horizontal)** | `#FCFF68` | ref1 ·0.1s #15 (gancho), ·0.5s #13 ("FICOU,"), #25 ("INTERESSA") |
| Elipse desenhada à mão | `#F3FF69` | ref3 ·0.1s #16–#21 |
| Pílula do cronômetro | fundo `#F6FF6B`, texto `#070500` | ref3 ·0.5s #40 ("00:43") |
| "GRATIS" do cartão final | `#F6FF65` | ref3 ·0.5s #181–#186 |
| Lima do título-pôster | `#D4EC58` ("SOZINHO" `#D4ED54`, "COMENTE EU QUERO" `#D5EA61`) | ref2 ·0.1s #1–#20; ·0.5s #112–#117 |
| Rótulo "*Resultado no final" | `#F5FF5B` | ref2 ·0.5s #5–#89 |
| Branco da legenda de fala | `#FFFBF4` / `#FFFDF5` | ref3 ·0.5s #40 ("não") |
| Branco do selo | `#FFFEE6` | ref2 ·0.5s #1–#117 |
| Texto "Como se gravar" | `#D9E2C5` | ref2 ·0.1s #1–#20 |
| Fundo do cartão final | `#08060B` (ref1) / `#000000` (ref2, ref3) | ref1 ·0.5s #280–#283; ref3 ·0.5s #190–#192 |

**Regras de cor:**
- O **amarelo-limão é a única cor de destaque** do estilo.
  - Use `#F5FF63`. O ref1 mediu `#FCFF68`, uma diferença imperceptível. Escolha um dos dois e use sempre o mesmo.
- Não use outra cor de texto além de amarelo, branco e preto.
- **[CONFIRMAR]** O lima `#D4EC58` só aparece no título-pôster do ref2. Diga se quer usá-lo.

### 1.2 Os tipos de texto

#### a) Gancho gigante (de 0 s até o primeiro corte)

**Fonte**
- Grotesca condensada, peso extra-pesado.
  - ref1: caixa ALTA, parecida com **Anton**.
  - ref3: caixa baixa, cantos arredondados.
  - A fonte exata não foi possível identificar.
- Sem contorno e sem sombra. A cor é o amarelo de destaque.

**Posição e tamanho por formato**
- **Formato A (ref1):**
  - 5 linhas empilhadas, altura de 13,2% cada, entrelinha de 14,1%.
  - Alinhado à esquerda em x = 10%, ocupando de 14,6% a 83,8% da base.
- **Formato C (ref3):**
  - 1 palavra por vez, altura de 13,4% a 15%.
  - Base da palavra entre 60% e 63% da base, centralizada, em cima da emenda da tela dividida.
- **Formato B (ref2):** título de cartaz de filme.
  - "Como se gravar": altura de 3,4%, de 67,7% a 71,1% da base.
  - Em cima dele, "SOZINHO": altura de 12,4%, de 54,7% a 67,1% da base. Centralizado.
  - Bloco de créditos de cartaz com 3 linhas de 1,2% cada, entre 17% e 21% da base.

**Regras**
- **O texto fica SEMPRE atrás do sujeito.** A cabeça, o cabelo, as mãos e o tripé passam na frente das letras. Isso exige máscara/recorte do sujeito.
  - Evidência: ref1 ·0.1s #15–#30; ref2 ·0.1s #1–#20; ref3 ·0.1s #1–#30.
- **Sincronia com a fala:** cada palavra aparece no mesmo quadro em que começa a ser falada, com tolerância de 0,1 s.
  - No ref1: VAMOS 0,0 · TIRAR 0,2 · A 0,3 · CARA 0,4 · DE 0,6 · CHAT 0,7 · GPT 0,9 · DO 1,2 · SEU 1,3 · PERFIL? 1,4.
  - Quadros correspondentes (·0.1s): #1, #3, #4, #5, #7, #8, #10, #13, #14, #15.
- **Quantas palavras na tela:**
  - ref1: acumula até **10 palavras**, a pergunta inteira.
  - ref3: **1 por vez**.
  - ref2: título fixo de 4 palavras.
- **Saída:** fica até o primeiro corte (ref1 3,79 s · ref2 1,96 s · ref3 3,67 s) e sai junto com o corte, seco.

#### b) Legenda de fala (corpo do vídeo)

**Regras gerais**
- **1 palavra por tela.** Média 1,0, máximo 1.
- **1 linha só.**
- **Entrada e saída:** troca no início de cada palavra falada, em corte seco. Nenhum quadro a 0,1 s mostra estado intermediário (sem pop, sem deslizar, sem fade).
- **Emoji:** nunca. Foram 0 emojis em 594 quadros analisados.
- **Quando a legenda some:**
  - durante os blocos de palavra gigante de ênfase (ela é substituída);
  - no encerramento.

**Formato C (vertical, ref3)** — evidência: ref3 ·0.5s #40
- Fonte grotesca bold, parecida com **Inter Bold/ExtraBold**.
- Caixa baixa, como falado.
- Branco `#FFFBF4`.
- Altura de 1,7% a 2,0%.
- Centralizada na horizontal, entre 28% e 30% da base (no meio do painel do rosto).
- Sem contorno visível. Sombra: não foi possível medir.

**Formato A (horizontal, ref1)** — evidência: ref1 ·0.1s #19–#30
- Fonte **monoespaçada**, parecida com DejaVu Sans Mono / Menlo.
- Amarela `#FCFF68`, caixa mista, mantendo a pontuação.
- Altura de 2,4% a 3,1%. Centralizada, com a base do texto a cerca de 9,5% da base (topo a 12%).
- Sombra preta dura, deslocada para baixo e para a direita. O deslocamento em px não foi possível medir.
- Começa em 1,8 s, com o gancho gigante ainda na tela.

**Formato B (ref2)**
- **Não tem legenda de fala.** Só tem rótulos fixos (ver seção 4).

#### c) Palavra gigante de ênfase

**Regras gerais**
- **1 palavra por vez**, sincronizada com a fala.
  - Evidência: ref1 ·0.5s #25 ("INTERESSA"); ref3 #63 ("falar"), #103 ("narrativa"), #172 ("você").
- **Duração de cada bloco:** de 0,5 s a 3,0 s.
  - Média de 2,0 s no ref1.
  - No ref3: 3,0 s, 2,0 s e 2,5 s.
- **Frequência:**
  - ref1: 7 blocos em 128,6 s (3,3 por minuto, cerca de 11% do conteúdo).
  - ref3: 3 blocos em 90 s (2 por minuto).

**Formato A (ref1)**
- Caixa ALTA, altura de 23,3%, centralizada na vertical (de 38,3% a 61,7% da base).
- Amarelo `#FCFF68` com **brilho externo (glow) amarelo**.
- A imagem por trás é **escurecida em 43%** (luminância de 112 para 64).
  - No bloco de 26,5 a 28,5 s, o escurecimento é de 78%.

**Formato C (ref3)**
- Caixa baixa, centralizada, logo acima da cabeça (a palavra quase encosta no topo da cabeça), entre 70% e 84% da base.
- Sem glow.
- **A tela dividida some e o rosto ocupa a tela cheia.**

**Quando usar (critério observado nas falas)**
1. Nome do método ou de cada item da lista.
   - ref1 26,5 s "em **três territórios**"
   - ref1 31,0 s "território de **mercado**"
   - ref1 65,0 s "Território de **interesse**"
2. Frase-conceito principal.
   - ref1 11,0 s "entrega os seus conteúdos pra quem se **interessa**…"
   - ref3 50,5 s "uma **narrativa** pra cada cliente"
3. Recapitulação final.
   - ref1 105,83–115,71 s: as 3 perguntas, em 3 blocos seguidos.
4. A oferta.
   - ref3 85,0 s "sete dias pra **você** testar de graça"
5. A objeção do público, em preto e branco (ver 5.3).
   - ref3 30,0 s "Mas, Julia, como que ele sabe **falar**…"
   - ref1 5,5 s "Que bom que você **ficou**, bora!"

**Evidências completas**
- ref1 ·0.5s: #12–#14 (P&B), #23–#28, #54–#58, #63–#64, #131–#133, #213–#232.
- ref3 ·0.5s: #61–#67 (P&B), #102–#106, #171–#176.

### 1.3 Destaque de palavra
- **Não pinte palavras de outra cor dentro da legenda de fala.**
- O destaque é feito **trocando de modo**: a palavra-chave sai da legenda pequena e vira palavra gigante amarela (tipo c), usando o critério da seção 1.2 c.

---

## 2. Enquadramento e zoom

### Formato A (ref1)

**Enquadramento**
- Plano aberto de rosto e tronco, com lente grande-angular.
- A mudança de tamanho de plano vem **dela se inclinando para a câmera** (lean-in) entre um corte e outro. A escala do fundo fica em 1,000, ou seja, sem zoom digital.
- **Tamanhos de plano:**
  - 2: aberto e aproximado pela inclinação. O ref1 ·0.5s #25 é um close extremo.
  - Mais o PiP (ver seção 4).
- Plano da sala inteira com câmera parada para apartes. Evidência: ref1 ·0.5s #12–#14.

**Zoom digital**
- Use só **2 vezes no vídeo inteiro** (0,9 por minuto):
  1. **Empurrão lento (push-in) de +14% em 4,9 s** (cerca de 3% por segundo), de 31,88 a 36,79 s, durante a explicação de um item. Evidência: ·0.5s #65–#74.
  2. **Zoom de soco (punch-in) duro de +32%**, de 80,96 a 86,29 s, com **tremor simulado** (±2,5% de escala, cerca de 20 px). Fica junto do PiP da história pessoal. Evidência: ·0.5s #163–#173.
- **Tremor de câmera simulado** também de 65,25 a 66,0 s, no bloco de ênfase "Território de interesse". Evidência: ·0.5s #132–#133.

### Formato C (ref3)

**Zoom duro no corte**
- Aplique punch-in e punch-out a cada corte do painel do rosto.
- **Medido em 18 cortes:**
  - Valores: +30, −36, +53, +20, −18, −18, −20, +17, +20, −28, +67, −32, +51, −27, +72, −29, +36, +65 %.
  - Em módulo: mediana de **29,5%**, média de **35,5%**.
- **Use 3 tamanhos:**
  - base: 100%;
  - fechado: cerca de 125–130%;
  - muito fechado: cerca de 165–170%, cerca de 1 a cada 5 cortes.
- **Frequência:** o tamanho muda em quase todo corte, pelo menos **12 mudanças por minuto** (18 em 90 s).
- **Zoom suave dentro do plano:** não observado no ref3.

### Formato B (ref2)
- **Multicâmera real**: câmera alta (plongée), grande-angular 0,5x e detalhes de mãos e equipamento.
- Empurrões de câmera dentro do plano. O % não foi possível medir, porque a câmera real se move.
- Número exato de tamanhos de plano: não foi possível medir (são vários ângulos).

### Quando aplicar zoom
- **No corte entre frases** (formato C).
- **Para dar peso a uma história ou exemplo** (punch-in + tremor, ref1 81 s).
- **Durante a explicação de um item** (push-in lento, ref1 32 s).

---

## 3. Cortes e ritmo

### 3.1 Números medidos

| | ref1 (A) | ref2 (B) | ref3 (C) |
|---|---|---|---|
| Conteúdo (antes do encerramento) | 0–128,62 s | 0–58,17 s | 0–89,88 s |
| Cortes no conteúdo | 40 (41 se 23,29 contar) | 50 | 32 |
| **Cortes por minuto** | **18,7–19,1** | **51,6** | **21,4** |
| **Plano médio** | **3,06–3,14 s** | **1,14 s** | **2,72 s** |
| Mediana | 2,90 s | 0,79 s | 2,17 s |
| Plano mais curto | 0,66 s (108,17–108,83); 0,17 s se 23,29 for corte | 0,12 s (7,75–7,88) | 0,21 s (1,50–1,71) |
| Plano mais longo | 8,83 s (115,71–124,54) | 4,12 s (3,62–7,75) | 8,50 s (21,67–30,17) |
| Cortes/min por quarto do vídeo (Q1 · Q2 · Q3 · Q4) | 26 · 17 · 19 · 15 | 29 · 58 · 41 · 78 | 32 · 13 · 16 · 24 |

### 3.2 Regras de corte
1. **Corte seco sempre.**
   - Não use fusão (cross-fade) nem transição de software. Foram encontradas 0 transições de software nas 3 referências.
   - Exceção 1: a transição feita na câmera, com a mão passando na frente da lente (ref1 99,75 s, fala "Mas peraí", ·0.5s #200–#201).
   - Exceção 2: as entradas com desfoque dos textos do encerramento (seção 8).
2. **Corte no início da frase nova.** O primeiro quadro do plano novo coincide com a primeira palavra da frase.
   - ref1: 3,79 → "São" · 41,04 → "Os" · 80,96 → "Aqui" · 105,83 → "O" · 108,17 e 111,71 → "Agora".
3. **Primeiro corte entre 1,96 s e 3,79 s** (ver seção 7).
4. **Duração dos planos:**
   - Talking-head (A e C): plano médio de **2,7 a 3,1 s**.
   - Montagem (B): **cerca de 1,1 s**.
   - Nunca passe de **8,8 s** sem cortar.
5. **Curva de ritmo:**
   - Abra rápido: no primeiro quarto, 26 a 32 cortes por minuto.
   - Desacelere no meio: 13 a 19 cortes por minuto.
   - No formato C, acelere de novo no fim (24 por minuto).
   - No formato B, acelere forte depois da virada ("3, 2, 1, ação!" em 43,1 s): planos de 0,4 a 0,9 s e 78 cortes por minuto no último quarto.
   - O formato A **não** acelera no fim.
6. **Jump cuts no mesmo enquadramento:**
   - Como o áudio não tem pausas (seção 6), existem cortes dentro da mesma tomada.
   - O número exato desses jump cuts invisíveis não foi possível medir. Os números da tabela são o **mínimo**.
7. **O som acompanha alguns cortes:** coloque whoosh nos cortes que entram ou saem de um bloco especial (seção 6.3).

### 3.3 Lista de cortes (referência)
- **ref1:** 3,79 · 5,71 · 6,83 · 10,83 · 13,75 · 17,71 · 20,17 · 23,12 · (23,29) · 25,67 · 26,67 · 29,04 · 30,12 · 31,88 · 36,79 · 41,04 · 42,88 · 47,54 · 49,62 · 53,21 · 55,71 · 59,79 · 62,88 · 64,79 · 66,46 · 71,25 · 74,58 · 76,08 · 78,46 · 80,96 · 86,29 · 91,21 · 96,46 · 99,75 · 105,83 · 108,17 · 108,83 · 111,71 · 112,79 · 115,71 · 124,54
  - Encerramento: 128,62 · 128,75 · 139,42 · 141,50.
- **ref2:** 1,96 · 3,62 · 7,75 · 7,88 · 10,21 · 12,75 · 13,25 · 15,00 · 15,58 · 16,29 · 16,96 · 19,42 · 20,17 · 20,92 · 21,58 · 24,54 · 25,17 · 26,71 · 27,33 · 27,88 · 28,46 · 29,33 · 30,29 · 32,42 · 32,96 · 34,92 · 36,25 · 37,25 · 38,25 · 40,17 · 42,00 · 44,62 · 45,42 · 46,75 · 47,50 · 48,42 · 48,92 · 50,00 · 50,88 · 51,29 · 51,88 · 52,42 · 53,12 · 53,50 · 54,33 · 55,04 · 55,58 · (56,21) · 56,62 · 57,25 · 57,62
  - Encerramento: 58,17.
- **ref3:**
  - Cortes do painel de cima no gancho: 1,50 · 1,71 · 2,12 · 2,88.
  - Corpo: 3,67 · 7,79 · 9,00 · 13,12 · 16,67 · 17,38 · 19,58 · 21,67 · 30,17 · 33,38 · 35,46 · 37,25 · 43,46 · 45,04 · 47,67 · 50,25 · 52,96 · 59,62 · 62,33 · 69,96 · 71,00 · 75,25 · 76,33 · 78,50 · 80,50 · 83,58 · 84,71 · 87,75 · 89,88.
  - Encerramento: 92,04 · 92,71 · 93,67 · 94,50.
  - O painel de cima (gravação de tela) também tem cortes próprios no corpo (o cronômetro pula).

---

## 4. Elementos visuais

| Elemento | Formato | Estilo | Quando / duração | Evidência |
|---|---|---|---|---|
| **Gancho gigante atrás do sujeito** | A, B, C | Seção 1.2 a | De 0 s ao 1º corte (1,96–3,79 s) | ref1 ·0.1s #1–#30; ref2 #1–#20; ref3 #1–#30 |
| **Palavra gigante de ênfase** | A, C | Seção 1.2 c | 0,5–3,0 s por bloco; 2–3,3 blocos/min | ref1 ·0.5s #23–#28; ref3 #102–#106 |
| **PiP de print** | A | Print de reel no canto superior esquerdo | 41,04–42,88 s (1,84 s), na fala "Os famosos conteúdos de análise" | ref1 ·0.5s #84–#86 |
| **PiP de clipe** | A | Clipe vertical à direita, com punch-in e tremor no fundo | 80,96–86,29 s (5,33 s), na história pessoal | ref1 ·0.5s #163–#173 |
| **Selo fixo** | B | Pílula com contorno branco `#FFFEE6`, "VIDEO GRAVADO COM O CELULAR", centralizada a 4–5% do topo | Vídeo inteiro | ref2 ·0.5s #1–#117 |
| **Rótulo de promessa** | B | "*Resultado no final", grotesca bold, `#F5FF5B`, altura 2%, de 77,6% a 79,5% da base | De 2,0 s a 44,0 s. Some quando o resultado começa (44,62 s) | ref2 ·0.5s #5–#89 |
| **Tela dividida** | C | Painel de cima com 42% da altura (gravação de tela do app, com cursor); painel de baixo com 58% (rosto) | Corpo inteiro, menos os blocos de ênfase (tela cheia) | ref3 ·0.5s #40 |
| **Cronômetro do gancho** | C | Branco, altura 8,4%, de 24% a 33% da base. Conta de 1:47 a 3:00 | De 0,1 a 1,3 s. Termina quando ela fala "3 minutos" (1,3–1,5 s) | ref3 ·0.1s #2–#14 |
| **Elipse desenhada à mão** | C | Traço amarelo `#F3FF69`, 9,9% de altura × 43,6% de largura, em volta do cronômetro | Desenhada de 1,5 a 2,0 s | ref3 ·0.1s #16–#21 |
| **Pílula de cronômetro** | C | Pílula amarela `#F6FF6B`, texto preto `#070500`, altura 2,4%, centralizada na emenda (59–61% da base). Conta a partir de 00:00, com saltos nos cortes | Corpo inteiro | ref3 ·0.5s #40 |
| **Objeção em P&B** | A, B, C | Seção 5.3 | 1,0 a 3,0 s | ref1 ·0.5s #12–#14; ref2 #21–#26, #71–#73; ref3 #61–#67 |
| **Elemento físico com texto** | B | Quadro branco com "NENHUMA PALAVRA" escrito, logo após o título | 1,96–3,62 s | ref2 ·0.1s #21–#30 |

**Elementos fixos:**
- Formato A: nenhum, além da legenda.
- Formato B: o selo e o rótulo de promessa.
- Formato C: a tela dividida e a pílula do cronômetro.

**Sincronia:**
- Todo texto entra no quadro em que a palavra começa a ser falada, com tolerância de 0,1 s.
- Todo PiP entra no corte que abre a frase correspondente.

**Tamanho e cantos do PiP:**
- Tamanho exato do PiP: não foi possível medir com segurança.
- Os cantos arredondados só foram vistos no encarte de erros de gravação do final do ref1.

---

## 5. Cor e imagem

### 5.1 Valores medidos

Medido em todos os quadros coloridos e não escuros.

| | ref1 | ref2 | ref3 (painel do rosto) |
|---|---|---|---|
| Luminância média (0–255) | 113 | 109 | 71 |
| Contraste (desvio da luminância) | 43 | 54 | não foi possível medir separado (78 no quadro inteiro, inflado pela tela branca) |
| Saturação mediana (0–1) | 0,48 | 0,40 | 0,42 (0,39 no gancho) |
| Temperatura (R − B médio) | +58 (quente) | +46 (quente) | +34 (quente) |
| % de pixels estourados | 0,01% | 0,01% | 8,8% (só a interface branca do painel de cima) |

### 5.2 Instruções
- **Correção de cor:**
  - Natural e **quente** (vermelho acima do azul em 34 a 58 pontos).
  - Saturação moderada: 0,40 a 0,48.
  - Sem estourar a pele: 0,01% de pixels estourados.
- **Contraste:** médio, com desvio de 43 a 54.
- **Iluminação:**
  - ref2: luz do dia pela janela.
  - ref3: ambiente baixo e quente, com abajur (luminância 71).
  - ref1: sala clara.
  - Cenário sempre real (casa ou escritório), com quadros na parede, plantas e móveis. Nunca fundo liso.
- **Gancho do formato C:** dessature e escureça o painel de cima (ref3 ·0.1s #1–#30). O painel do rosto no gancho também mediu saturação menor: 0,39.
- **Bloco de ênfase do formato A:** escureça a imagem em 43%, ou em 78% no bloco mais forte (26,5–28,5 s).
- **Vinheta:** não usar (não observada).
- **Grão:** não observado. A compressão do Instagram impede medir grão fino.
- **Glow:** só no texto de ênfase do formato A. Nunca na imagem.

### 5.3 Preto e branco = objeção ou aparte
- Use P&B quando o vídeo dá voz ao público ("Ai, Julia, mas…") ou num aparte.
- **O texto amarelo continua colorido** em cima do P&B.
- Momentos observados:
  - ref1 5,5–6,5 s, "Que bom que você ficou, bora!": P&B levemente quente, plano aberto da sala, texto gigante atrás dela (·0.5s #12–#14).
  - ref2 10,0–12,5 s, "Ai, Julia, mas o trabalho sentado…": cinza neutro (·0.5s #21–#26).
  - ref2 35,0–36,0 s, "Julia, mas eu não tenho microfone!": cinza neutro (·0.5s #71–#73).
  - ref3 30,0–33,0 s, "Mas, Julia, como que ele sabe falar…": leve tom verde com escurecimento (luminância 65, RGB 62,66,62), outro ângulo (perfil), tela cheia (·0.5s #61–#67).

---

## 6. Áudio

### 6.1 Voz
| Medida | ref1 | ref2 | ref3 | Instrução |
|---|---|---|---|---|
| Loudness integrado | −14,1 LUFS | −14,1 LUFS | −14,1 LUFS | **Normalize em −14 LUFS** |
| Faixa de loudness (LRA) | 2,2–2,5 LU | 2,2–2,5 LU | 2,2–2,5 LU | **Compressão pesada** (LRA ≤ 2,5 LU) |
| Pico | −0,3 dBFS | −1,1 dBFS | 0,0 dBFS | Limitador no fim da cadeia (picos medidos de −1,1 a 0,0 dBFS) |
| Palavras por minuto (trecho falado) | 244 | 265 | 286 | Entrega final entre **240 e 290 ppm** |

- **Equalização exata da voz:** não foi possível medir.
- **Ruído de fundo:** nas pausas, o nível na faixa da voz cai **pelo menos 18 dB** em relação à fala.

### 6.2 Limpeza de silêncio (agressiva = total)
- **Medição por energia do áudio:**
  - Pausas de 60 ms ou mais: ref1 70 (mediana 0,07 s, máximo 0,23 s, 4,3% do tempo falado); ref3 24 (mediana 0,08 s, máximo 0,16 s); ref2 3 (máximo 0,15 s).
  - **Nenhuma pausa de 0,30 s ou mais** nas 3 referências.
- **Respiro entre frases** (depois de ponto ou vírgula):
  - Mediana de 0,06 a 0,09 s.
  - 90% das pausas ficam abaixo de 0,16 a 0,26 s.
- **Instrução:**
  - Corte todas as respirações e silêncios.
  - Deixe **0,05 a 0,10 s** entre frases.
  - **Nunca deixe mais de 0,25 s** de silêncio.
- **Vícios de fala ("é…", "hã"):** remova todos. Mantenha só as interjeições que fazem parte do texto ("Ah!", "Mas…", "Ai, Julia").
- **Exceção:** no ref2, aos 23,1 s, há um vão de 0,70 s na fala que é preenchido por música (é intencional, não é silêncio).

### 6.3 Efeitos sonoros (whoosh)
- **Tipo:** whoosh/ar estéreo com **0,3 a 0,6 s de duração**. O **pico fica no quadro do corte** (tolerância de 0,02 a 0,07 s).
- **Onde colocar:** só nos cortes que entram ou saem de:
  - um bloco de ênfase;
  - um PiP;
  - um trecho em P&B;
  - a passagem do gancho para o corpo;
  - o cartão final.
- **Não coloque em todo corte.** No ref1, só 17 dos 45 cortes têm whoosh.
- **Frequência:**
  - ref1: 17 em 142,5 s, cerca de **7 por minuto**. Tempos: 3,77 · 6,77 · 10,86 · 13,73 · 26,65 · 29,06 · 40,98 · 42,86 · 64,77 · 66,44 · 80,94 · 86,27 · 105,81 · 108,90 · 112,77 · 128,56 · 139,35.
  - ref3: 9 whooshes + 2 subidas longas (de 0,19 a 1,64 s e de 3,0 a 5,3 s), cerca de **6 a 7 por minuto**. Tempos dos whooshes: 3,64 · 16,64 · 33,30 · 52,88 · 75,24 · 84,61 · 89,90 · 92,69 · 94,39.
  - ref2: whoosh em 1,94 e efeitos mais longos de 42 a 58 s. A contagem exata não foi possível medir.
- **No gancho do formato C:** coloque uma subida (riser) longa debaixo do cronômetro (de 0,19 a 1,64 s).

### 6.4 Música
- **A música é estéreo e entra só em blocos.** Fora deles, a voz fica sozinha (canal lateral em cerca de −55 dBFS).
  - Blocos com música: gancho, blocos de ênfase, P&B, PiP, virada e CTA.
  - ref1: 0–8 · 10–15 · 26–30 · 40–44 · 64–68 · 80–83 · 86–88 · 105–115 · 128–131 · 139 s.
  - ref2: 1–14 · 21–35 (notas sustentadas) · 34–38 · 41–57 s.
  - ref3: 0–5 · 16–18 · 29–35 · 50–54 · 70–94 s.
- **Se houver música mono contínua por baixo da voz:** não foi possível detectar. Ela se confundiria com a voz. Mas, se existir, fica **pelo menos 18 dB abaixo** da voz nas pausas.
- **Nível da música em relação à voz dentro dos blocos:** não foi possível medir.
- **Gênero ou estilo da música:** não foi possível identificar.
- **Andamento (BPM):** não foi possível medir com segurança. As estimativas variam de 105 a 178 BPM, com baixa confiança.
- **Batidas da música alinhadas com os cortes:** não foi possível medir. Só os whooshes estão comprovadamente alinhados aos cortes.

---

## 7. Abertura (de 0 a cerca de 3,7 s) — quadro a quadro

### Formato A (ref1)
| Tempo | Quadro | O que fazer |
|---|---|---|
| 0,0 s | ·0.1s #1 | Plano aberto grande-angular, ela de frente. "VAMOS" amarelo gigante à esquerda, **atrás dela**. Música e whoosh estéreo já tocando. |
| 0,2–1,4 s | ·0.1s #3–#15 | Uma palavra por fala: TIRAR · A · CARA · DE · CHAT · GPT · DO · SEU · PERFIL?. Ao final são 5 linhas empilhadas (pergunta completa em 1,4 s). |
| 1,8 s | ·0.1s #19 | Entra a legenda pequena monoespaçada embaixo, 1 palavra por vez ("criar um que atrai seguidores e vende"). O gancho gigante continua na tela. |
| 3,77 s | — | Whoosh. |
| 3,79 s | ·0.5s #9 | Corte seco para ela inclinada perto da câmera. O gancho sai. |

### Formato B (ref2)
| Tempo | Quadro | O que fazer |
|---|---|---|
| 0,0 s | ·0.1s #1 | Plano de cima (plongée), ela balançando o tripé. Título de cartaz: "Como se gravar" + "SOZINHO" em lima, **atrás do tripé e das mãos**. Créditos de cartaz embaixo. Selo no topo. |
| 0,0–1,9 s | ·0.1s #1–#20 | Plano único de 1,96 s, sem corte. Ela fala a pergunta-título ("Como se gravar sozinho em 15 minutos?", de 0,0 a 1,4 s). |
| 1,94 s | — | Whoosh. |
| 1,96 s | ·0.1s #21 | Corte seco para o quadro branco "NENHUMA PALAVRA". Entra o rótulo "*Resultado no final". |

### Formato C (ref3)
| Tempo | Quadro | O que fazer |
|---|---|---|
| 0,0 s | ·0.1s #1 | Tela dividida: painel de cima com a tela do app, **dessaturado e escurecido**; painel de baixo com o rosto. Legenda amarela gigante, 1 palavra, na emenda e **atrás da cabeça**. A subida (riser) começa em 0,19 s. |
| 0,1–1,3 s | ·0.1s #2–#14 | O cronômetro branco conta de 1:47 a 3:00 e para exatamente quando ela diz "3 minutos". |
| 1,5–2,0 s | ·0.1s #16–#21 | A elipse amarela é desenhada à mão em volta do cronômetro. Cortes rápidos no painel de cima: 1,50 · 1,71 · 2,12 · 2,88. |
| 3,64 s | — | Whoosh. |
| 3,67 s | ·0.5s #9 | Corte para o corpo do vídeo, com legenda branca pequena. |

**Regras da abertura:**
- A **primeira palavra aparece no quadro 0**. Não há tela preta nem respiro antes.
- **A primeira frase é a promessa ou pergunta inteira**, dita em 1,4 a 1,5 s:
  - "Vamos tirar a cara de ChatGPT do seu perfil"
  - "Como se gravar sozinho em 15 minutos?"
  - "E é assim que eu criei o roteiro em 3 minutos"
- **Texto gigante atrás do sujeito + música/efeito estéreo desde 0,0 s.**
- **Primeiro corte entre 1,96 e 3,79 s, sempre com whoosh.**
- **Prova visual no gancho:** o cronômetro (C), o tripé/bastidor (B) e o print do perfil (A).

---

## 8. Encerramento

### Formato A (ref1)
| Tempo | Quadro | O que fazer |
|---|---|---|
| 124,54–128,62 s | ·0.5s #250–#258 | Último plano: a frase-tese ("…faz as pessoas escolherem você antes daquilo que você vende"). |
| 128,56 s | — | Whoosh. |
| 128,62 s | — | Corte seco para quase-preto `#08060B`. |
| 128,75–139,4 s | ·0.5s #259–#279 | Encarte de erros de gravação com cantos arredondados, à esquerda, sobre fundo quase-preto. Ao lado, texto amarelo rolando como créditos de filme ("Putz, Stevan…", "Comentem Black…", "Simbora meu povo!"). |
| 139,35 s | — | Whoosh. |
| 139,42–141,0 s | ·0.5s #280–#283 | Cartão final: "Comentem" (fonte Medium, altura 5,1%) sobre "BLACK" (fonte Bold, altura 26,5%), entre 34% e 68% da base. |
| 141,5–142,5 s | ·0.5s #284–#285 | Preto. |

### Formato B (ref2)
| Tempo | Quadro | O que fazer |
|---|---|---|
| 54,8–55,5 s | — | Fala do CTA: "comenta eu quero". |
| 55,5 s em diante | ·0.5s #112–#117 | "COMENTE EU QUERO" em lima, condensada itálica maiúscula, 2 linhas de 9,1%, entre 42,7% e 61,9% da base. Entra com **borrão de movimento**, com "By Comunicadores Magneticos" acima, sobre b-roll que continua cortando a cada 0,4–0,6 s. |
| 58,17 s | — | Cartão preto `#000000` até o fim (58,8 s). |

### Formato C (ref3)
| Tempo | Quadro | O que fazer |
|---|---|---|
| 89,88 s | — | Whoosh (89,90 s) e corte. |
| 90,0–92,5 s | ·0.5s #181–#186 | Cartão-pôster sincronizado com "comenta grátis" (90,1–90,4 s). "COMENTE" em fonte fina sem serifa, sobre **"GRATIS"** em serifada de alto contraste (parecida com Cormorant/Bodoni), amarela `#F6FF65`, altura 15,2%, entre 44% e 59% da base. "GRATIS" entra com **desfoque (blur-in)**. No topo, uma fileira de logos estilo festival (louros, "Parental Advisory", Dolby, tiff, 16+). Embaixo, os créditos "DIRECTED BY GIU BECKER / PRODUCED BY STEVAN CASSIANO / WRITTEN BY GIU BECKER". |
| 92,5–94,0 s | ·0.5s #186–#189 | Volta ao rosto para o fecho: "Ah! E é só até amanhã, tá? Simbora!". Cortes a 92,04 · 92,71 · 93,67 s. Whoosh a 92,69 s. |
| 94,50–95,9 s | ·0.5s #190–#192 | Preto `#000000`. |

**Regras do encerramento:**
- **CTA de comentário com uma palavra-chave:** "Comente(m) [PALAVRA]". A palavra vai em amarelo/lima e fica enorme (altura de 15% a 26,5%), e o verbo fica pequeno.
- **Créditos de filme:** cartaz com DIRECTED/PRODUCED/WRITTEN BY (B, C) ou créditos rolando (A).
- **Despedida "Simbora!"** (A, C) **depois** do CTA.
- **Termine em preto** por 0,6 a 1,4 s. Corte seco para o preto, sem fade.
- O cartão do CTA fica na tela de 1,6 a 2,7 s (ref1 1,58 s · ref2 2,67 s · ref3 2,5 s).

---

## REGRAS INEGOCIÁVEIS

1. **Gancho gigante amarelo atrás do sujeito, palavra por palavra, desde o quadro 0.**
   - Texto condensado extra-pesado em amarelo-limão (`#F5FF63` / `#FCFF68`).
   - Cada palavra aparece quando é falada.
   - O sujeito passa na frente das letras.
   - Sai no primeiro corte, entre 1,96 e 3,79 s, com whoosh.
2. **Legenda de 1 palavra por vez, sem animação, sem emoji.**
   - Nas ideias-chave, a palavra vira texto gigante amarelo: 1 palavra, 0,5 a 3,0 s, 2 a 3,3 blocos por minuto.
   - Durante esse bloco, a imagem é escurecida (A) ou vai para tela cheia (C).
3. **Silêncio zero e voz espremida.**
   - Nenhuma pausa acima de 0,25 s.
   - Respiro de 0,05 a 0,10 s entre frases.
   - Fala final entre 240 e 290 ppm.
   - −14 LUFS com LRA de 2,5 LU ou menos.
4. **Som e cor marcam os momentos especiais.**
   - Whoosh de 0,3 a 0,6 s com pico no quadro do corte, só nos cortes que entram ou saem de gancho, ênfase, PiP, P&B e CTA (cerca de 6 a 7 por minuto).
   - Música estéreo só nesses blocos.
   - **P&B para a objeção do público** ("Ai, Julia, mas…"), com o texto amarelo continuando colorido.
5. **Final de filme.**
   - Cartão "Comente [PALAVRA]" com a palavra gigante em amarelo e créditos de filme (DIRECTED/PRODUCED/WRITTEN BY ou créditos rolando).
   - Depois, "Simbora!".
   - Depois, corte seco para o preto (0,6 a 1,4 s).

---
name: Gol de Placa
description: Futebol 3x3 de cima. Palco e painel pretos com contorno verde neon, no estilo Eclipse.
colors:
  eclipse-green: "#a1fea0"
  ink-black: "#000000"
  paper-white: "#ffffff"
typography:
  display:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "5.25rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.2px"
  ui:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.1em"
  label:
    fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.2em"
rounded:
  card: "25px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.eclipse-green}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.card}"
    padding: "11px 24px"
  button-secondary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.card}"
    padding: "11px 24px"
  panel:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.card}"
    padding: "18px 22px"
  tabs:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "11px 8px"
  badge:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.card}"
    padding: "2px 10px"
---

# Design System: Gol de Placa

## Overview

**Creative North Star: "Eclipse Cel"**

O sistema vem da referência Eclipse: um quadrinho de anime em neon, com tinta preta, papel branco e um único verde que age como marca-texto. O menu é um palco preto com o estádio ao fundo e um painel preto por cima, com contorno fino em verde. A interface usa uma só família, Outfit, com títulos em peso fino e controles em Title Case (só a inicial maiúscula).

O menu agora tem três etapas sobre o estádio: abertura (logo, painel de vidro e "Jogar"), escolha dos times e, por fim, modos e salas, o painel de três colunas de sempre. Os painéis são de vidro: pretos e translúcidos, com o campo desfocado aparecendo por trás.

**Key Characteristics:**
- Três cores de interface: #a1fea0, #000000 e #ffffff. Nada além disso.
- Painéis de vidro: preto a 46% de opacidade, desfoque de 20px, contorno verde de 1px e uma linha de luz branca a 10% no topo. Peças dentro do vidro usam preto a 34%.
- Contorno verde de 1px em tudo; no hover ele engrossa para 2px.
- Movimento: etapas entram em sequência (subida de 26px com fade), botões levantam no hover e soltam uma onda verde no clique.
- Raios de 25px (cartões, botões, selos) e 100px (pílulas, abas, ícones).
- Uma só família, Outfit: títulos encorpados (700 e 900), rótulos em 600, controles em Title Case (só a inicial maiúscula).

## Colors

### Primary
- **Verde Eclipse** (#a1fea0): ação principal, aba e opção selecionadas, cartão do seu time, strip do placar, destaque do time escolhido. Sempre com texto preto por cima. Como texto, só em destaques sobre preto (código da sala, "aço" do título).

### Neutral
- **Preto** (#000000): palco do menu, painel, cartões, botões secundários e bloco do relógio.
- **Branco** (#ffffff): só texto sobre preto. Nenhuma superfície da interface é branca.
- Texto de apoio usa branco a 70% de opacidade.

### Named Rules
**The One Marker Rule.** O verde é o único cromático da interface e funciona como marca-texto: aparece onde algo está ativo ou é a ação principal.
**The Content Colors Rule.** As cores dos uniformes, o gramado e a arquibancada são conteúdo do jogo e não fazem parte da paleta da interface.

## Typography

**Família única:** Outfit Variable (a mesma do ViewShare), embutida no arquivo, com fallback de sistema. A hierarquia vem só de peso, tamanho e caixa.

### Hierarchy
- **Display** (Outfit 900, 38 a 108px, 1.0, -0.04em): "Gol de Placa".
- **Heading** (Outfit 700, 24 a 30px, -0.02em): nome do estádio, nomes de clubes, título da lista.
- **UI** (Outfit 500, 14 a 16px, 0.1em, Title Case): botões, abas, opções, teclas.
- **Placar** (Outfit 700, 24 a 56px): abreviações, gols, relógio e banner de gol.
- **Label** (Outfit 400, 12px, 0.2em, Title Case): legendas de controles e papéis dos cartões.
- **Logo da abertura** (Outfit 900, 64 a 144px, -0.045em), **chamada** "Jogar" (Outfit 500, 20 a 26px, 0.14em, Title Case), **texto de apoio** (Outfit 400, 17 a 19px), **título da etapa** (Outfit 300, 34 a 48px).

### Named Rules
**The Embratur Weight Rule.** Mesma Outfit do site da Embratur: títulos em 700 ou 900 com entrelinha curta e espaçamento negativo (-0.02 a -0.04em), texto corrido em 400 e rótulos em 600.
**The Single Family Rule.** Uma só família em toda a interface; a hierarquia vem do peso e do tamanho.

## Layout

Duas etapas sobre o estádio (a câmera se aproxima e desfoca ao avançar):
- **Abertura**: logo grande, painel de vidro de até 620px com a descrição, o botão "Jogar" e três selos de fatos (clubes, salas, código).
- **Painel**: o painel de três colunas de sempre, agora de vidro, até 1140px, separadas por linhas de 1px: estádio e teclas; modo (bots, criar sala, entrar) com os dois times (escudo, estádio e setas para trocar de clube); opções e ações. Abaixo de 1080px some a coluna do estádio; abaixo de 760px vira coluna única.
Esc volta à abertura (fora de uma sala).

## Elevation & Depth

Profundidade vem do vidro: o campo desfocado por trás (`backdrop-filter: blur(20px) saturate(1.2)`), o contorno verde de 1px e uma sombra neutra de elevação (`0 28px 60px -26px rgba(0,0,0,.75)`). Nada de halo colorido: a seleção se marca com preenchimento verde ou contorno, nunca com brilho.

### Named Rules
**The Glass Is Functional Rule.** O vidro existe para deixar ver o campo por trás dos menus; fora de painéis e janelas, não se usa desfoque.
**The No Halo Rule.** Sombras são neutras e têm deslocamento; o verde só aparece como preenchimento, contorno ou o anel pulsante do botão principal.

## Shapes

25px para cartões, botões, campos, peças da lista e selos. 100px para abas, opções, setas, botões de ícone e a dica de teclas. Nunca 4, 8 ou 12px.

## Components

### Botão primário
Fundo verde, texto preto, Outfit 500 16px Title Case 0.02em, contorno de 1px, raio 25px. No hover a borda engrossa para 2px.

### Botão secundário
Fundo preto, texto branco, contorno verde, mesma tipografia. Vai ao lado do primário em todo grupo de ações.

### Abas de modo
Três segmentos em pílula dentro do painel (Contra Bots, Criar Sala, Entrar), separados por linhas de 1px. A aba ativa fica em verde.

### Seleção de times
Dois cartões de 25px: o seu time em verde, o visitante em preto com contorno verde. Cada um tem escudo, nome em peso 700, faixa com as cores do uniforme e três controles (seta, Escolher, seta). A lista de clubes abre no mesmo painel; o clube escolhido fica em verde com brilho e o do outro lado fica apagado.

### Escudo
Só no menu, sobre disco claro com anel na cor do uniforme.

### Placar de transmissão
Canto superior esquerdo: período em verde, relógio em preto (verde na prorrogação) e dois blocos nas cores dos uniformes. Time de uniforme branco usa bloco escuro. Sem faixa de estádio. Outfit 700.

### Botões de ícone e dica de teclas
Na partida: círculos pretos com ícone branco e contorno verde, que ficam verdes no hover; a dica de teclas é uma pílula preta com contorno verde e teclas em verde. Sem superfícies brancas no HUD da partida.

### Gol e rede
Visto de cima: boca com linha verde entre duas traves (corpo branco, núcleo verde, sombra deslocada), armação branca com sombra e rede em losango que escurece até o fundo. Quando a bola entra, a rede estufa no ponto do chute, uma onda se espalha e se apaga em cerca de 2 s e a armação pisca na cor de quem marcou. Sem brilho colorido: só preenchimento, linha e sombra neutra.

### Saída de bola
Durante a saída, o círculo central pulsa na cor de quem cobra, com a legenda "SAÍDA · sigla". Quem não tem a posse fica fora do círculo.

### Banner de gol
No alto da tela, para não cobrir o lance: palavra "Gooool!" (ou "Golaço!" em chute de longe) em Outfit 900 branca, letra por letra, com o ponto de exclamação e uma barra em verde #a1fea0; abaixo, uma pílula de vidro com o escudo, o nome de quem marcou e, em verde, o clube, o golaço e a assistência. Faixas diagonais branca e verde varrem a tela, uma moldura verde de 6px pisca e o confete é só branco e verde. Some sozinho em cerca de 2,6 s.

### Ícone do site
Bola de futebol branca com contorno de tinta dentro de um anel verde de eclipse, com fundo transparente. Aparece na aba do navegador e no canto superior esquerdo do menu (56px).

## Do's and Don'ts

### Do:
- **Do** usar só #a1fea0, #000000 e #ffffff na interface.
- **Do** manter bordas de tinta de 1px e engrossar no hover.
- **Do** usar o verde só para ação, seleção e destaque.
- **Do** escrever botões, abas e rótulos em Title Case (Clubes e Estádios), nunca tudo em maiúsculas.
- **Do** manter os painéis translúcidos (vidro preto) com contorno verde de 1px.

### Don't:
- **Don't** usar halo ou brilho colorido em painéis, botões e cartões.
- **Don't** usar títulos em peso 300 ou mais leve.
- **Don't** usar superfícies brancas na interface.
- **Don't** usar raios de 4, 8 ou 12px.
- **Don't** usar escudos fora do menu, sem crédito em CREDITS.md, nem fotos de estádio.


## Salas, Chat e Aviso de Celular

- **Criar e entrar**: formulários dentro do próprio painel (apelido, nome da sala, senha, máximo de 2 a 10; ou apelido, código e senha), sem janela por cima. Mesmos botões pílula (100px).
- **Sala**: três colunas (time, espectadores, time) com vagas iguais; dono e administradores têm etiqueta ("Dono" cheia, "Admin" só contorno) e um menu ⋯ com as ações que podem usar.
- **Pausa e fim de jogo**: cartão de vidro sobre a partida desfocada, com entrada animada.
- **Chat**: lista flutuante no canto inferior esquerdo durante a partida (mensagens somem em 9 s) e embutida na sala de espera. Mensagens de sistema em verde.
- **Celular**: durante a partida aparecem um direcional analógico (vidro com bolinha verde) à esquerda e o botão verde "Chutar" à direita, cada um seguindo o seu dedo; online entra também um botão de chat. Com a tela em pé, um aviso "Gire o Celular" cobre a partida.
- **Clubes**: 13, todos com estádio próprio.

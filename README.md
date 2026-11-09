# Gol de Placa

Jogo de futebol de navegador, visto de cima e inspirado na mecânica do HaxBall, com clubes brasileiros da Série A 2026. Escolha seu clube, crie ou entre numa sala online com amigos e jogue partidas rápidas de 1x1 a 3x3.

> Projeto independente, sem vínculo com o HaxBall. A física e todo o código foram escritos do zero.

## Recursos

- 13 clubes da Série A 2026, cada um com seu estádio desenhado proceduralmente em canvas
- Salas online estilo HaxBall: apelido, nome da sala, senha opcional, até 10 pessoas (3x3 no máximo, o resto assiste) e código de 5 caracteres para entrar
- Multiplayer via WebRTC (PeerJS): o dono da sala roda a simulação e os convidados controlam um jogador cada
- Permissões de dono e admins (trocar lados, escolher clubes, expulsar, mudar o código da sala)
- Regras de saída de bola, gol de ouro no empate, pausa, revanche, assistências, gols contra e Golaço
- Chat na sala e na partida
- Controles de toque para celular (analógico + botão de chute)
- Interface em português do Brasil

## Controles

| Ação | Teclado |
|---|---|
| Mover | WASD ou setas |
| Chutar | X ou Espaço |
| Pausar | P (online: só dono e admins) |
| Menu da partida | M ou Esc |
| Chat | Enter |

No celular, vire o aparelho na horizontal: analógico à esquerda, botão de chute à direita.

## Stack

HTML, CSS e JavaScript puros em um único arquivo (`index.html`), sem framework e sem etapa de build para desenvolver. Áudio e imagens dos escudos já vão embutidos no arquivo.

## Rodando localmente

Basta abrir o `index.html` no navegador, ou servir a pasta:

```bash
npx serve .
```

## Deploy

O site é publicado na Netlify. O comando de build monta a pasta `deploy/` só com o necessário e ajusta o endereço do site nas imagens de compartilhamento:

```bash
node tools/prepare-deploy.js
```

A configuração está em `netlify.toml`.

## Estrutura

```
index.html      jogo completo (código, áudio e escudos embutidos)
assets/         ícones, manifest, imagem de compartilhamento
audio/          sons de gol e música do menu (fontes)
tools/          scripts de build (embed de áudio, deploy, og-image)
PRODUCT.md      visão de produto
DESIGN.md       sistema de design
CREDITS.md      créditos e licenças dos escudos e áudios
```

## Créditos

Veja [CREDITS.md](CREDITS.md). As marcas dos clubes pertencem aos respectivos clubes.

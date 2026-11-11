# Gol de Placa

Jogo de futebol de navegador, visto de cima e inspirado na mecânica do HaxBall, com 13 clubes brasileiros. Escolha seu clube, jogue contra bots ou crie uma sala online e chame os amigos pelo código, em partidas de 1x1 a 3x3.

> Projeto independente, sem vínculo com o HaxBall. A física e todo o código foram escritos do zero.

## Recursos

- 13 clubes, cada um com seu estádio desenhado em canvas
- Partida rápida contra bots, com formato (1x1, 2x2 ou 3x3), duração e dificuldade configuráveis
- Salas online: apelido, nome da sala, senha opcional, até 10 pessoas e código de 5 caracteres para entrar (quem passa do formato da partida assiste)
- Multiplayer ponto a ponto via WebRTC (PeerJS): o anfitrião roda a simulação e cada convidado controla um jogador
- Anfitrião e administradores configuram a sala: clube, estádio, formato, bots, duração, dificuldade e troca de lados
- Regras de saída de bola, gol de ouro no empate, pausa, revanche, assistências, gols contra e Golaço
- Placar de transmissão com relógio simulado de 90 minutos
- Chat na sala e durante a partida
- Controles de toque para celular (analógico + botão de chute)
- Interface em português do Brasil

## Controles

| Ação | Teclado |
|---|---|
| Mover | WASD ou setas |
| Chutar | X, Espaço ou Shift |
| Pausar | P (só contra bots; online a partida segue) |
| Menu da partida | M ou Esc |
| Dicas na tela | C |
| Chat (online) | Enter |

No celular, vire o aparelho na horizontal: analógico à esquerda, botão de chute à direita.

## Tecnologias

HTML, CSS e JavaScript puros em um único arquivo (`index.html`), sem framework. A biblioteca PeerJS, o áudio e os escudos já vão embutidos no arquivo.

## Deploy

O site é publicado na Netlify, que roda o build sozinha a cada push (`netlify.toml`). O script monta a pasta `deploy/` só com o necessário e troca `{{SITE}}` pelo endereço do site nas tags de compartilhamento do `index.html` (canonical, `og:url`, `og:image`), já que WhatsApp, Discord e Telegram exigem endereço completo. Para gerar localmente, passe o endereço:

```bash
node tools/prepare-deploy.js https://goldeplaca.fun
```

Um workflow do GitHub Actions registra cada deploy na aba Deployments do repositório.

## Estrutura

```
index.html      jogo completo (código, PeerJS, áudio e escudos embutidos)
assets/         ícones, manifest, robots, headers e imagem de compartilhamento
audio/          sons de gol e música do menu (fontes)
tools/          scripts de build (embed-audio, prepare-deploy, og-source)
netlify.toml    configuração de deploy
.github/        workflow que registra deployments
CREDITS.md      créditos e licenças dos escudos e áudios
```

## Créditos

Veja [CREDITS.md](CREDITS.md). As marcas dos clubes pertencem aos respectivos clubes.

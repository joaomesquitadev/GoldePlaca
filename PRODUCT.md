# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static single-file HTML/CSS/JS (existing). No framework, no build step, no external assets besides system or locally bundled fonts.

## Users

Brazilian football fans playing a quick match (1v1 to 3v3) on desktop with a keyboard or on a phone with touch controls (left stick, right kick button, screen turned sideways), in online rooms with friends. A match lasts 2 to 5 minutes. Game controls: WASD or arrows to move, X or Space to kick, P pause (online: only the owner and admins), M or Esc opens the match menu (continue or leave).

## Product Purpose

Gol de Placa is a browser top-down football game inspired by the mechanics of HaxBall, with Brazilian clubs. Success is a player picking their club, starting a match in seconds and wanting a rematch.

## Positioning

HaxBall-style physics with 13 Série A 2026 clubs, each with its own stadium (clubs whose stadium had to be borrowed from another club were removed). The physics is an original implementation; no code or assets from HaxBall are used.

## Operating Context

Played in a desktop browser, fullscreen. Each match: choose home club, away club, duration. Home team always plays on the left, each person controls the player of their seat.

## Capabilities and Constraints

- 13 clubs (Série A 2026) that have their own full stadium shown with their crests (menu only) (Wikimedia Commons thumbnails embedded in index.html, attributed in CREDITS.md) and, on the pitch and scoreboard, by kit colours, stripes and shirt numbers.
- Backdrop is the home club's real stadium, drawn procedurally in canvas as a stylised silhouette (no stadium photographs).
- Flow: opening screen ("Jogar"), then the panel with team selection and modes. Modes: online rooms only, in the HaxBall style: nickname, room name, optional password, up to 10 people per room (3v3 maximum, the rest spectate), 5-character code to join (only the code is asked; a password dialog opens afterwards if the room has one); any player changes their own team or spectates, only the owner (the host) swaps sides, picks clubs, starts, promotes or demotes admins and changes the room code (the old code stops working, players inside stay). Admins can kick anyone except the owner and move other players between teams. Every permission is checked on the host. Online is host-authoritative over WebRTC via PeerJS: the host runs the simulation, guests control one player each. There is no public room list (no server), so rooms are shared by code.
- Room format: the owner picks 1x1, 2x2 or 3x3, visible in the room for everyone. There are no bots: only people play, and both teams need a full side. Goal authorship counts only real touches (kick or hit), with own goals, assists (teammate touch within 6 s) and Golaço (shot from midfield or farther) shown on the goal banner and synced to all.
- Kickoff rules: the first kickoff is drawn at random; after a goal, the conceding team kicks off. While the kickoff is prepared, the other team stays in its own half and outside the center circle, so the ball is protected until the kicking team touches it. Enforced in the host simulation and synced to guests; after 15 s without a kickoff the ball is released.
- Chat: HaxBall-style, Enter opens, Esc closes; lobby and match, with system messages for joins, leaves and goals.
- Phones: the game is playable with on-screen touch controls (analog stick on the left, kick button on the right, chat button online). In portrait during a match a notice asks to turn the phone sideways. The menu is responsive.
- Match flow: ready, play, goal, end; golden goal on a draw; pause; rematch; back to menu.
- UI language: Brazilian Portuguese.

## Brand Commitments

- Name: Gol de Placa.
- Palette (interface): black, white and a single neon green (#a1fea0), from the user-supplied Eclipse reference. Club kits, pitch and stands keep their own colours as game content.
- Style reference (user-supplied, binding): the "Eclipse" system: flat ink-on-paper surfaces, thin 1px black borders, 25px and 100px radii, a single family, Outfit (hairline weight for headings, uppercase medium for controls). The menu layout itself must not change.

## Evidence on Hand

- Working game in index.html.
- DESIGN.md reference on the user's Desktop.
- Crests: Commons files listed in CREDITS.md. Vasco's file is the club flag, not the round crest. Crests are club trademarks: fine for personal use, not for publishing without a licence. No stadium photos.

## Product Principles

1. The match is the hero: the pitch stays readable above any decoration.
2. Fast to first kick: menu to match in two clicks.
3. Brazilian without cliché: colour and stadium identity, not clip-art.
4. Honest representation: stylised stadiums and kits, crests credited, and no claim of official licensing.

## Accessibility & Inclusion

Keyboard-only play. Respect prefers-reduced-motion in UI animation. Keep text contrast readable on dark surfaces.

// Monta a pasta deploy/ pronta para o Netlify.
// Uso: node tools/prepare-deploy.js [https://goldeplaca.fun]
// Sem argumento usa a variável URL (o Netlify define sozinho quando o build roda lá).
// O endereço entra nas tags de compartilhamento (WhatsApp, Discord, Telegram, X), que exigem endereço completo.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), out = path.join(root, 'deploy');
const site = (process.argv[2] || process.env.URL || '').replace(/\/+$/, '');
if (!site) console.warn('Aviso: sem endereço do site. A prévia no WhatsApp só funciona com o endereço completo; rode de novo com: node tools/prepare-deploy.js https://goldeplaca.fun');
fs.rmSync(out, {recursive: true, force: true}); fs.mkdirSync(out, {recursive: true});
fs.writeFileSync(path.join(out, 'index.html'), fs.readFileSync(path.join(root, 'index.html'), 'utf8').split('{{SITE}}').join(site));
fs.readdirSync(path.join(root, 'assets')).forEach(f => fs.copyFileSync(path.join(root, 'assets', f), path.join(out, f)));
const size = fs.readdirSync(out).reduce((a, f) => a + fs.statSync(path.join(out, f)).size, 0);
console.log('deploy/ pronta (' + fs.readdirSync(out).length + ' arquivos, ' + (size / 1048576).toFixed(2) + ' MB)' + (site ? ' para ' + site : ''));

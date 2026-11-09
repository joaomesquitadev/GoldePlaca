const fs=require('fs');process.chdir(__dirname+'/..');
let s=fs.readFileSync('index.html','utf8');
const names=['gol1','gol2','gol3','musica'];
const o={};names.forEach(n=>o[n]=fs.readFileSync('audio/'+n+'.mp3').toString('base64'));
const line='const AUDIO_B64 = '+JSON.stringify(o)+';\n';
const re=/^const AUDIO_B64 = .*\n/m;
if(re.test(s)) s=s.replace(re,()=>line); else s=s.replace('// ---------- Som ----------\n',()=>'// ---------- Som ----------\n'+line);
fs.writeFileSync('index.html',s);console.log('embedded',(line.length/1024|0)+'KB');

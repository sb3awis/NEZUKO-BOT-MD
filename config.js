import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import moment from 'moment-timezone';

global.botnumber = "212708841261"
global.confirmCode = "ACHRAF77"
global.authFile = `MysticSession`;

// Cambiar a true si el Bot responde a sus comandos con otros comandos.
// Cambiar a false para usar el Bot desde el mismo numero del Bot.
// Error de m.isBaileys marcado como false fix temporal
global.isBaileysFail = false;

global.defaultLenguaje = 'ar';

global.owner = [
  ['212656317785', '👑 Ez-achraf 👑', true],
];

global.suittag = ['212656317785'];
global.prems = ['212656317785'];

// Base Rest Api
global.BASE_API_DELIRIUS = "https://delirius-apiofc.vercel.app";

global.packname = 'Sticker by';
global.author = 'Ez-achraf';
global.wm = 'nezuko - Bot';
global.titulowm = 'nezuko Bot';
global.titulowm2 = `nezuko Bot`
global.igfg = 'nezuko bot';
global.wait = 'انتظر قليلا وانت تنتظر صلي على سيدنا محمد\n\n فضلا وليس امرا استرك في قناتي على الانستا *z4yts*';

global.imagen1 = fs.readFileSync('./src/assets/images/menu/languages/es/menu.png');
global.imagen2 = fs.readFileSync('./src/assets/images/menu/languages/es/menu.png');
global.imagen3 = fs.readFileSync('./src/assets/images/menu/languages/es/menu.png')
global.imagen4 = fs.readFileSync('./src/assets/images/menu/languages/es/menu.png')
global.imagen5 = fs.readFileSync('./src/assets/images/menu/languages/es/menu.png')

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar-MA';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar-MA', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar-MA', {month: 'long'});
global.año = d.toLocaleDateString('ar-MA', {year: 'numeric'});
global.tiempo = d.toLocaleString('ar-MA', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nnezuko Bot`;
global.gt = 'nezuko Bot';
global.mysticbot = 'nezuko Bot';
global.channel = 'https://whatsapp.com/channel/0029Vaein6eInlqIsCXpDs3y';
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.waitt = 'انتظر قليلا وانت تنتظر صلي على سيدنا محمد\n\n فضلا وليس امرا استرك في قناتي على الانستا *z4yts*';
global.waittt = 'انتظر قليلا وانت تنتظر صلي على سيدنا محمد\n\n فضلا وليس امرا استرك في قناتي على الانستا *z4yts*';
global.waitttt = 'انتظر قليلا وانت تنتظر صلي على سيدنا محمد\n\n فضلا وليس امرا استرك في قناتي على الانستا *z4yts*';
global.nomorown = '212656317785';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] االيوم:*  ${moment.tz('Africa/Casablanca').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] الساعة:* ${moment.tz('Africa/Casablanca').format('HH:mm:ss')}`;
global.fgif = { key: { participant: '0@s.whatsapp.net' }, message: { 'videoMessage': { 'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./src/assets/images/menu/languages/es/menu.png')}}};
global.multiplier = 69;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});

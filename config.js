//davidthegod

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '918207075323'
global.nomerowner = ["919614477116"]

// Apikey 

global.skizo = 'YAMMYY UWU'
global.casterix = 'DeeCeeXxx'
//watermark 
global.packname = '🎋🐈‍⬛𝐇𝐄𝐘 𝐓𝐇𝐄𝐑𝐄 𝐈𝐌  ＳＵＢＡＲＵ🌷(๑˃𝐀𝐒𝐈𝐀𝐒 𝐁𝐈𝐆𝐆𝐄𝐒𝐓 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐂𝐑𝐄𝐀𝐓𝐎𝐑🍂™ 🐳🕊+919614477116_'
global.author = 'ｉｎｓｔａ - lexx lutheer (._🌴ＡＡＤＩ /ᐠ - ˕ -) '

// cpanel 
global.domain = 'https://' // deeceexxx
global.apikey2 = 'ptlc' // I love anita
global.capikey2 = 'ptla' // david x anita 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = true;     
//to show your real presence  
global.available = false;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = true;
global.autoreact = true;

global.welcome = true;

global.prefix = '.';

global.autobio = false;

global.antilink = true;

global.antilinkkick = true;

global.antilinkwarn = false;

//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

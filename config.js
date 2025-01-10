require('dotenv').config(); 

global.owner = process.env.OWNER_NUMBER.split(2348158863149); 
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'true'; 
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";

global.LEVELUP = process.env.LEVELUP === 'true';
global.session_id = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"CBbqSO1Zlh0Jxz4w1BMARA63arokM/eBTL7FVO+syG0="},"public":{"type":"Buffer","data":"x0VKulyPET+TPuRJe8uylL+aASAZyk2IAciYiv1bAEI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"yM6VFPS5eIUjmw4I/nE0iPphQJlP4/82N61khtlkgUw="},"public":{"type":"Buffer","data":"mZYlIyJxoFOaMlY4VS8b782qeCmcXFdLLI2QudzckSw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uMHE5Fp0/3Xd+djkTIcCrMoLjhZJJ43UuHKfHt136U8="},"public":{"type":"Buffer","data":"+YpkQeQdXa8d5yg5QOflgdtSHV/4P3IA8X2+ciBW6x0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cFFiyNASrl1Qg//S7cHxCfJX6ZVVDwiDlCXdzVoNUUw="},"public":{"type":"Buffer","data":"lVVJK4m03bNVXw3g8piWJpbs20S+wRKrNXerardfSXk="}},"signature":{"type":"Buffer","data":"Ju/4WqKLaNUqBHHb6UZI+REdZ+qHYPxsasd5RwokmwNAEg1fsRhagMk6ADFxU5uSd3LmM+OXjXlCjNOgHfuGCQ=="},"keyId":1},"registrationId":6,"advSecretKey":"SL0R9jp3YbQSLZ3m53QhJ0WyWre9190zYzmHmIz8Ckc=","processedHistoryMessages":[{"key":{"remoteJid":"2348158863149@s.whatsapp.net","fromMe":true,"id":"C688C0537995857D64B9D1B454D7FCE8"},"messageTimestamp":1736511141}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"xDlmpakgR7SgqwZnUviKPw","phoneId":"6a584b3c-063c-4893-ade1-2047176a3bfe","identityId":{"type":"Buffer","data":"ZyzHQdDdEdRliLRS5BBYMY7LYTg="},"registered":true,"backupToken":{"type":"Buffer","data":"E40UMfOaAhfxHTAN/09O4gJXsUk="},"registration":{},"pairingCode":"HPW2BQZT","me":{"id":"2348158863149:2@s.whatsapp.net","name":"Coach David"},"account":{"details":"CJuWg40HEJSdhLwGGAIgACgA","accountSignatureKey":"ynW6cc1aDvyHR4aC7NzuXilDV7yiWIEQ4WpJWvD4/Bs=","accountSignature":"O0J2mLSUa7UBrhRCfjAFPVbiHTynhTPfzD0IARFJhJSPjs2QxoEOYL0D8aMkbOwVcWLXBpG5cClaKa9Tkra7Aw==","deviceSignature":"EXJQv9jEukv0BbgfFWW/mdyZ/IeaTDLiVaQTsjv+QMKG39ohRhMpFRrRymM8mlrTdFqcFfnd7Q8kSZmaNQ86AQ=="},"signalIdentities":[{"identifier":{"name":"2348158863149:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bcp1unHNWg78h0eGguzc7l4pQ1e8oliBEOFqSVrw+Pwb"}}],"platform":"smba","lastAccountSyncTimestamp":1736511137}";
global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = process.env.SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`); 

global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})

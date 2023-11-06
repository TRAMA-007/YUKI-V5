const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = false;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //This is the new variable for controlling status seen.
global.autoreadgc = false;


//
global.prefa = ["."];                                    //Default prefix here. you can change if you want.


//
global.Owner = ["2348073259044"];         //If you want singal number so global.Owner = ['916297175943'] Change into your number.
global.OwnerNumber = ["2348073259044"];   //If you want singal number so global.Owner = ['916297175943'] Change into your number.
global.ownertag = ["2348073259044"];
global.OwnerName = "~฿₳ⱠⱠɎ😶‍🌫🫥🫠";
global.BotName = "฿₳ⱠⱠɎ ฿Ø₮ 🙂🤧💔";
global.packname = "~฿₳ⱠⱠɎ😶‍🌫🫥🫠";                             //Do not change.
global.author = "By: ~฿₳ⱠⱠɎ";                               //Do not change.
global.BotSourceCode = "https://github.com/Kai0071/A17"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KVNvjVhIL6xEjH4UkKjktw";


//
global.sessionName = "{"noiseKey":{"private":{"type":"Buffer","data":"WMCcxjNevr4aIrED5EUgffgAgtn0uGW0wEYFxXjv/UY="},"public":{"type":"Buffer","data":"wLMDLdcpLdLQHni6HwtcqkLeO80/my4iD0XjoKG9CAA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"UANcja2+7J99c9LwS+wUi6pkk156hp5izeFpieDH5WU="},"public":{"type":"Buffer","data":"lTlBxQdqQ1nKeQvM4hzzbArkRRaoQB3ieZZ8X6YiTWA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"QH7YC/9q9B2nT9EIc+ij6odnUYnn7w9zhevAB4r6J3c="},"public":{"type":"Buffer","data":"V2vOrIoHhVogjuYKDUlkQOD86DM3eCpfXPbgBES3u2o="}},"signature":{"type":"Buffer","data":"K+iClqNrtppqt9pgPaGGEbt8HODeXaS6UGdEcs0LDOGVnTqqQUUxk6GoJotf0H3cdkwEM3XTRX/8vPYktqvxhQ=="},"keyId":1},"registrationId":64,"advSecretKey":"cnMVeGhGDw0tMeTSnEN+iicP+Jq5ZykKGL6zTsXrHeY=","processedHistoryMessages":[{"key":{"remoteJid":"2348073259044@s.whatsapp.net","fromMe":true,"id":"9EEBB7917EA86B4955A5DC9C38B22740"},"messageTimestamp":1699262738},{"key":{"remoteJid":"2348073259044@s.whatsapp.net","fromMe":true,"id":"D5BCB3F6C4FDEFE870D26FE28DD12AE8"},"messageTimestamp":1699262740}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"account":{"details":"CJTc8uUEEInioqoGGAE=","accountSignatureKey":"2E8QjUfR6rkBG3aX44PQ0Ri5KfR0kpjTzJ+QBvhiBlU=","accountSignature":"6qngokknD8zs3HtFZvwzsvgH51JuF3BuL+hGdLfY3sM2JEQCkgr/XYfOJD8wk5yNfgxgrEGrHYCTUMrDd1WzDw==","deviceSignature":"w3Slswg8CvCOIEg/MGpP1MEfTUbTB0CmvrcERcyr8v/5Sv0q/IS64R6mPwh+1M1NLkmdoF4bMcVbRcEok9Jfjg=="},"me":{"id":"2348073259044:14@s.whatsapp.net","name":"喔库偝獗犫睜蓭 喔棵樷偖 馃檪馃ぇ馃挃"},"signalIdentities":[{"identifier":{"name":"2348073259044:14@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdhPEI1H0eq5ARt2l+OD0NEYuSn0dJKY08yfkAb4YgZV"}}],"platform":"android","lastAccountSyncTimestamp":1699262732,"myAppStateKeyId":"AAAAAEnf"}";                          //Do not change.


//
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";
global.reactmoji = "❤️";
global.themeemoji = "💖";
global.vidmenu = { url: 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' };
global.websitex = "https://github.com/Kai0071";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
  jobdone: 'Here you go...',
  useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
  botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
  botowner: 'Only my *Owner* can use this command, Baka!',
  grouponly: 'This command is only made for *Groups*, Baka!',
  privateonly: 'This command is only made for *Private Chat*, Baka!',
  botonly: 'Only the *Bot itself* can use this command!',
  waiting: 'Just Wait...',
  nolink: 'Please provide me *link*, Baka!',
  error: 'An error occurd!',
  banned: 'You are *Banned* fron using commands!',
  bangc: 'This Group is *Banned* from using Commands!',
  nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'

}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};

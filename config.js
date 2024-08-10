//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "oyekanfrancis5@gmail.com";
global.location = "Lome, Togo";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lome";
global.github = process.env.GITHUB || "https://github.com/Alp24ni/SASAKI-MD_V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8aff6928045c1fddb8800.jpg";
global.devs = "https://wa.me/221768649590 , https://wa.me/221768649590";
global.sudo = process.env.SUDO || "221768649590";
global.owner = process.env.OWNER_NUMBER || "221768649590 , 221768649590";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aff6928045c1fddb8800.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://web-qr-e8ii.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVDN21aZVJKaFk4K0JZemN0WGcwL2dOd0ZxTXBsM2RwcjQ0TEZVbDBtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWNmaUd3Q0ZRRXlpc2lQbldSemNrVHRSTFc1MWF5QXE3ZFdNU0duakJUZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUDVvU25WbFdILy9iUmJMb3lpb3YyNTkraEZsKy9EaWxYNWlUZUZaSzBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcG1jZ1FSOWg4T1o3QzArVFZHRDRsWktzZ2JRZ3crWUtzaHVrdUp2MjBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDWWUvc1RqTlVCdmxKNUw2QUJOSEZHZml2SExYazFxTmpXRjVNY3llRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQwY283N1RLVFd2YnNGV3o5VXc1K3o2VGhGVlhUSWFmN0o0U0w3dWlqU1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEg4NFBqS0dwQmU4Ylo1Mm4vbVR5ZWR3NVZYdlRzODRiVUV2R2pUcFUwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWlpMWEyYWcwQjMxR054NXFCb2Z1bEdWWC9uWjlxeWpBUXppQ2tUaW1oVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF3WWNsNTUrano4em5SeXQwOFNsS0kydTJ5aU8rZThIa1NISEt1WEN4dytBYU9YSlk1U0xiQlQ3UUczOHVZcGo4OTBWUXhaMC9qZ2xEZkRlS1ZidWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJYSEdnSVBsZkNUTHl3MDBRQ0xkVFdENVhTYzVBelg5QU5HdmR5TTNyL05NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJROGdyN0JNQlFrR3dib3h6VnFuTkR3IiwicGhvbmVJZCI6IjAzOGMyMzUwLWYzZTItNDk0Yi1hOTZjLTVjNmMyYjhkN2FmYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q3VtQ2pQUGc5UEJMZnFhMTNsZ1plV1pjQ2M9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdpSEZSYmpQN2E3VkxOM0FLOVF3eXI3d2ExQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pyeXhla0hFSWJLMmJVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9YNi9sN1JscGF6VGFQeFVwdEhZWDdGVVFIRHBGaExKbWx3S0JSSGZJMTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik95M2FSMUFNTVc3RHgrOEd0WG4zU2ZPRG4xdmNvUjZkMEZTMVZhQVJMa3J2cUxEOWhmNE5WeTNhOXcyYnU5WmJMSi9xUHNuUm9ESFU3VldqUmFSMEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPWmZ6VU1BNGVhaGVBcDJBUTE3TVBiWUlFNDRUa2tWOWFxSjVnWVA0dkpOUGlOemxDcys2YkxyTkVVUm9KQUdVMmc1Q0tLL2xWOVd6YXdROGRTVUtnQT09In0sIm1lIjp7ImlkIjoiMjIxNzY4NjQ5NTkwOjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFydGh1ciBTYXNha2kifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzY4NjQ5NTkwOjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmYxK3Y1ZTBaYVdzMDJqOFZLYlIyRit4VkVCdzZSWVN5WnBjQ2dVUjN5TmQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMyMjk0NDl9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "> BRAND PRODUCT OF TEAM SASAKI",
  author: process.env.PACK_AUTHER || "TEAM SASAKI",
  packname: process.env.PACK_NAME || "SASAKI-MD_V2",
  botname: process.env.BOT_NAME || "SASAKI-MD_V2",
  ownername: process.env.OWNER_NAME || "TEAM SASAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

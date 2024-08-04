// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUx4RU8ydW9EeVNPYjhQRVY3YVYyQ3U3OXZiSTVEa0xoK1pIZGlqbUoxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWt0R1NMUkpBejQwN2Nnb3NyN3B6L1BZSkk5UHlwZXdjTVhJSjRJQkZCbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRHV3dUdwQnBRMXh4dmUyanZkVmp0aUJ5aEtqYlB3M1BTYzNIbDU0MUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOajBJSllMTGxIbFlERS96R2tzbFRQSUhEZ2RqZHFTamYzOExTRDdsMUF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPcm54TXB4RS9JaGJyRmFMU2JrK3loclhsVmhubnZBWVdoMTR2Q1JSMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM1Mk96bG8vQUJlU3p6bGMyMzRSMUVSMmhQcTVyL252a1NQQmZlaUJvR1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEkxanpabk0yNUtqRHRwS1lQYkpjeU5ZWGZsWnVERk9xNDFJN2g1d1pVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3AwdElpRktkZ3Ftcjdlc3ltQnVuc1VJMWlTbHptNzZES29QSXpTciswRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRBbjZFRUoxM2VUUS9yb3FuMG5YVTlDSytiNE5BQTN5S0tWZFlnK2dMSk5jUkxMVzh0VUw3QnFIbEFOc0VaZjNheXA1eERzUWd1dFlSc2gzbUYvZmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6IjM3eVhCYWhqU2lEMHJITVVlYWlPaVhKSkZpejM2NnVQdmJ1dU41OHdiTTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVQR0Q4OGVEUk42ZFpwWTQtNkItcnciLCJwaG9uZUlkIjoiYzQ1ODY0Y2QtYTBhNi00NmQwLTg0ZGEtMjQxOWY5NWFhNWE3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJBZGdlYU1ubzQwM0lWQitnc2NuaXI1NG11OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUzFWTTFZSlNad3R6bVAvcWJXZzMrcUhUdms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVlREWjJQODUiLCJtZSI6eyJpZCI6IjkyMzI5Nzg1OTkyNDo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRGNqSHNRaW9xNXRRWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxenM4aXFrMVBiMWZDcVZwSGpYb2dxL3ZXaVZ1aWRrME5wN3RyQWlFd0E0PSIsImFjY291bnRTaWduYXR1cmUiOiJsU2VsR1hKNXRyZDhkbGtueUlPM1N1N2YrV01qaWhBTUZ3N1plZS9kZEpTM2tsdVJ1c2xkdXFPZXMxSFJCU0NHdEUzMUxYSFAxUWpwb1lZNVhwNERCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaG1SSisrRlJnWFVZaHlmU0JqS0ttRmE0bXBMbGZEWjJTaVgzUDZxSE84REV5N0VYRVhiOXBqbzJiNWRMbUs2T0NzWWtXM3FrbFMvbFJENk9mWEppaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyOTc4NTk5MjQ6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhczdQSXFwTlQyOVh3cWxhUjQxNklLdjcxb2xib25aTkRhZTdhd0loTUFPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjk2OTgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9oVSJ9",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "✪⏤͟͞★⃝ꪶ‎𝞢𝙏𝞖𝞘𝞦-𝞛𝘿𖥘✪͜͡➺",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923072380380",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;

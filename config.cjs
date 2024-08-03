// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElaSWVJSmg1UFhMRStmaU9peVVWMjlabjBXL1F0U0VvWkJGaVMwcUducz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3NjNjNWMEpSN295emlHRFg2TkJrN1NxSkpNSFZoelQvN3JYampnSGRuOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHT2QzNTlpRmQwbVJZUmd3V3FwWlB3THVDN24zSjFndkp3TmFZbHJNbTA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkMm8wYmZNakR0SDdlRVhxVkYrUGFiUG1xSi9DTEd0Y2N3VEFpdWRrTG5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFEM2dHa0pVUFpEN1U0SDdaZmtjVUlHZFdlcStuWFJaMFFjZjY1Q0xybVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNhYTJqQjlQUWVUUE1TTE95My9pcWxtTXd3Vi9BWDAvK045RERVRnpCelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0l6cit0N0ppUjFiVFNQVW4xOTVlQUMwejF4TklHMFYydHJ3U0tpOUprbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tJS25YVWdibFpVRUowZnhFajY2aldRQnVHL1I4d2U3WUxFMHlpaXNYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5wbTVKUnh1bGRyQWdTaDl3ZmZKYjhGUVNWYnNLVE5NZjd2NjQ3VlErbGxtQkF5Y2JwUEVMYWFKTmxTb3RTVGhkM1YyUWxrM1F5U2FDa0Jub09SOUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6ImhFcVZwYXNuUlJQK1BNTmdNZGQ2TnVvd3YvNmtmSWZNeUI4aVMrVUZLQ0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjk3ODU5OTI0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM1Mjk4MUIxRDM3N0YzQTkzQ0NCQzMzNEVCMEQ2OTU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI2NTg3MDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5Nzg1OTkyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMUU5RjU0MjkxNUQ1RUU2MDM3OEZDNTMyMTk5RUIwNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNjU4NzEwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUeENHZmd3aFF0aV9RTzZrNHl1YTN3IiwicGhvbmVJZCI6ImNjMjQxMWVhLTEwYTYtNDVmNy1iYzJhLWMwZjc1YjM1ZjZjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDY3lUTlUwb1VlamZlTklCNW94eWNNQVdoaWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnQyRWFzYUVIdm5weFFyZkN4eXhXZkg4WHJJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhOWlNLV0VRIiwibWUiOnsiaWQiOiI5MjMyOTc4NTk5MjQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiI7KSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkRjakhzUWd0KzJ0UVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXpzOGlxazFQYjFmQ3FWcEhqWG9ncS92V2lWdWlkazBOcDd0ckFpRXdBND0iLCJhY2NvdW50U2lnbmF0dXJlIjoienZVWGp6aXY0V2tYQUhtREREeEo1NGFlOVJHbU9KR1JqdXh5a0dVOWpMQTc3UW9yb28yOERkb2IrdVF6eHkzOTFhdEpGZUJ2RnZzc1ZNTUZOY1dsQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlBQRktENVZRNk8wRXMxQjZlejlTVUE1cUJlWTExMVZOY0ZoZlRZNnJuM2FwWkwraUpPc1RXVTdEQUpuWUEwRnVFU0dQT2haWVQ4a1dxN28zTXJHakRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjk3ODU5OTI0OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXM3UElxcE5UMjlYd3FsYVI0MTZJS3Y3MW9sYm9uWk5EYWU3YXdJaE1BTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY1ODcwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPaFUifQ==",
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
  OWNER_NUMBER: process.env.OWNER_NUMBER || "919142294671",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;

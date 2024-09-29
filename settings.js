const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0g5eEoyVStiZGNXQjVpOHQ4QUJQdnlaZU9pNXdxbCswSzM3aWVBMjcxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkdKbUticDArcnQ2VjVvenREeUh2SElFVG1Tcm41bkxvU25CUGFpMHRCRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRFpHNCt0OUVsK1h6NnVPamNQZzhvbmNuUVhFMnliQUM2WVdtNUxnNVdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMURMWWpDeVEzbVJ0RklpdjBhaDZEYVdueWN6c1VJQ3gvcyt0UlpFM0UwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IUkFuQ2c3V25XZ2tJd2NNZTM1R2h6a0JKZUJBMXJQd28ySmJ1ZzMvVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhSRHhTMTJjUlFucnMwRnhxN0diMFR3MTBSZkpXOTFZVWdtSTFEZXJzRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZsWC93SFhMY0kwc1djdjJjUHBRZTFRN0dpS0FHYmpmdE83ejBlUGkyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienAwUTBCWlFDNW5YSkI3S3U0TTlKVldWblJTd09UZmF4WHpxUy9iOW4xbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFZNGxNdmJkRExxTXRMaXVEaTlXMlVDWmM4WEdGeFM5d1dpcWRkcTVsdGExRnNWbXd2VHdUSFQyTDRUM2htakF6eTUzcEVoQkYrYTdLVjFjaXVETURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiI4ZUhQdXZrRDZtRUsreUp0RW1vaDZ3SE1qeHo2Y3J4MHd4Z25hR2R2ZFRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNjc4OTUxNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMzkwRTA5ODE1QjAzNEU1M0MxNDgwNkNGQzA0MzBBMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NjI4MTY3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTY3ODk1MTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUYzQ0VDMDcxN0Q0RDM3MDUxOTFGQzQwMDM1ODMzMEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzYyODE2N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOWZhOGUxUmZSSXVvRUpsU1o5NW9UZyIsInBob25lSWQiOiJiMWFlNTgxYS01MjAxLTQ4ZjQtYWM5My1hOTJkMjk2OWZlMGEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTV5aUhzcEt3elhhTTdLMnJWWkRkRnNFc1FJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxLOU5zSXBrM0Vob1RDcmxHVmc5VnB0R1E3ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDTU5DN1ZZNyIsIm1lIjp7ImlkIjoiMjYzNzE2Nzg5NTE1OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ilh4eCBXcmxk8J+SpfCfjI0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w3ZDhjTUdFUEtHNXJjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxhQWVCeS9TZVdwNlNCcXZJYnhSL1ZQcndXRmhtbkRwUW0wazdvNFRQRzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNKOUZJdU9WSlFVdTIxbEdoemlhVmhJYklRdy9PU3JRcVFlNGw5MXo4WjRvUEdFeVNsWkpsNVBUbDR0Q1dCRTloT0VvQlpYOXNISzhvbnlIRDErSUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpcnFlVW9Pck9xZUFzQUVJb3lNZFEzWVUxRHM5UzF6QjhCaHJyNUk3dTUwWVlQekFCb3FtZzhQSjIwemJXcVg2YlhPWmwzUG4wUlNMTVAwQVBJSXhDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNjc4OTUxNToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTMmdIZ2N2MG5scWVrZ2FyeUc4VWYxVDY4RmhZWnB3NlVKdEpPNk9Fenh2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NjI4MTU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpvVSJ9'
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};

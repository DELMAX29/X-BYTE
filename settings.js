 


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = 'X - B Y T E'; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by k29*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '263717672068' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05SdWZsR3BicisyQk1hU3lBL0Q0QWttT3ZsWmE0Rk5FakhldVNTNEszQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDJWeFRsK0liN2Y3b0c4b0E1di95NlFNTks2aUFIc2V5UHd3ZzhQdGcxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUHFpZGdzV2MrenRTMWlRZVJQbDhvTXFNOWtCb3R5RldhNnVnUkNKajNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJINGRabG0vOWRyWmQ5QzNhK3VwRWJycHFpcmFZbjhwN3lLQ1NVM2E2cW5BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGUmxoQmV6aDRCNmprWWdEL0o5aTV4bXh1MHpSM1NtN1RrUzd6ZTlOMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMwejhOSE1MYk1jUTF1QzFaVDgwOGYzUjd6ZERYQTJhQlJMbGV2L1Y2ajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5jbVRmTHpYZS9DRzJSRnBrRVJaU2I0OEJDbEF4TWxlSzhtZzlyYnVrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2tlTlJXVU0rdndWdjhEMVNvMDBITG82TDM5NHhHeGw5enY4R0lyTW5YQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBSSi9aZnhjYkE1VTRmM1dOWGFKR05XZEFVL0lpekdwaVB5NzFZam43VUVpQW40elpZbnNIeHIxL1dSTTFxL2lTc0tnUGMyM0dlZzFMZUdvVVVGcWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJvSlRmLy9hK2hDQk5ONUU1TzBGNlYzbGVjM1lweVAxS0VXbXJGK29BbmVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUR3ltMWlERlFkeU9VS2JrM1gzQlBnIiwicGhvbmVJZCI6ImU3YjkyMGNhLTZlOWQtNGVkYi1hZTNjLTM2YjAwMTYwMzczZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUFJiUGxkMEd0ODZrTGpncGZDZVVKNDFaMEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWRIWE80N3VWekYvWThDaFdabVladVI4V0tvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFFM1QxUjhCIiwibWUiOnsiaWQiOiIyNjM3MTc2NzIwNjg6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XuPCdn67wnZ+18J2XvfCdl7/wnZe88J2XuvCdl67wnZiFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNWE5zL1lDRU5manJMVUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3YWIwaUFqRGZlZ1dCZ2JLNVpkS2NHVWpVY28vaEcyWm9rYkJtampHeURZPSIsImFjY291bnRTaWduYXR1cmUiOiJNdFM5dzRTdWtLVUhuLzNkMkxhdmRIV1FqRHQ5Z2twUjhTL0o2cXJ1Q0JQRHdnaTR0QThrMi8rNk1WRXh5eUFBWTZ1VGhGRHlBZ0l2d3phUk5BZnNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoianVzc0NPdnVVeTY0Ui9nZkIvQ1dObW5qU0pWZnV2V0dLdVhJbEQ4TXZqd0RLT1Jvc1RDdTdqZHQvZ1hIcVhIbWkvTXhpM1ZOdmxYa3RpVjNocmd6aFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTc2NzIwNjg6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0dtOUlnSXczM29GZ1lHeXVXWFNuQmxJMUhLUDRSdG1hSkd3Wm80eHNnMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQ5NTQ2MX0=', //Paste your session ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.,' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'public' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || 'k29promax', //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by k29promax*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || 'false'  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || false  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || false  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || false ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || false , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};

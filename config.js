const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_49_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDcxLFxuICAgICAgICA4LFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBGMFhrL3JZUE1QWnRycStWbWRHRlZIMjFLbGxzZWVDVit1WmZ6S05mM3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyMjcwODM5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFOTE1MzBGNEU4MENCMTk1MDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNDk3NzQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1ZTEFxM3NEVHFTcFF1aWtaT2RIU1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTA2NDM0MjYtMWQyMi00ZGVkLWIzODktZThlMTRkZDNiZDMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDgwLFxuICAgICAgMTQ4LFxuICAgICAgMjUxLFxuICAgICAgMTMxLFxuICAgICAgODIsXG4gICAgICAxNjksXG4gICAgICA2MSxcbiAgICAgIDIyNyxcbiAgICAgIDc4LFxuICAgICAgMjM2LFxuICAgICAgNzAsXG4gICAgICAyNDYsXG4gICAgICA4OSxcbiAgICAgIDIzLFxuICAgICAgMTcwLFxuICAgICAgNTAsXG4gICAgICA2OCxcbiAgICAgIDEzOSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTgsXG4gICAgICAxNDYsXG4gICAgICAxMDYsXG4gICAgICA4NyxcbiAgICAgIDEzMSxcbiAgICAgIDE5NixcbiAgICAgIDEyNixcbiAgICAgIDcxLFxuICAgICAgMjUyLFxuICAgICAgMjUzLFxuICAgICAgMTY1LFxuICAgICAgODgsXG4gICAgICAyMDEsXG4gICAgICA4LFxuICAgICAgMjA5LFxuICAgICAgODQsXG4gICAgICAxOTQsXG4gICAgICA2NCxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05YRXJmMEZFTXFabGJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWNBMEpjdFhKZjU5L0xQdVQwZklYOTZxNXByOWVibEZxMVd6SzAvd2lYQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEZDEwK3JnNjEyY3JMREVXMkRKZFgzeW8ramg0cGk5QWpiS3VtU0hJM1ltVlFZa0NpTi9kNW5MM0wzQ0RueUMxZ2VrczFwUmRsK3M0aXZCOTJOM1FBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2aVZ0Q2J0REZuMTN3UjJmaTl1aVlCMGJuajExOEk1a2swUCtVWElDTm5lbzRJd056clRBT0JuRGM4Q1JPajRYZ0E5ZUV6L2hrVUwxQ045elJIRkhEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjI3MDgzOTc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE5MDM5NzE2MjcwMjA2OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4oSi77iP4bScypzhtIDgvJJadWtv4pyT8J+UpVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMjcwODM5Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDk3NzQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0grXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSbU5IRmVMNHFkZnJzQzZhMG5BRUhOVUgxbzk4c2FNamszTzhta1NDUEdFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDUwNjczNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMDQ5Nzc0NDA3NFwifSIKfQ==" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6288239194509'] //ur owner number
global.ownernomer = "6283841608599" //ur owner number2
global.ownername = "ARZZ STORE" //ur owner name
global.ytname = "-" //ur yt chanel name
global.socialm = "" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "-"
global.botname = "YZ23"
global.ownerNumber = ["6283841608599@s.whatsapp.net"]
global.ownerweb = "-"
global.themeemoji = '🪀'
global.wm = "YZ23 MD"
global.packname = "Sticker By"
global.author = "XyuraOffc\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/26e0f1f23a416a4261b73.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

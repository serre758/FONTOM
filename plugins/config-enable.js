let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | ДОБРО ПОЖАЛОВАТЬ", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | АНТИССЫЛКА", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | АНТИССЫЛКА 𝟸", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝚀𝚄𝙴 𝙸𝙽𝙸𝙲𝙸𝙰𝙽 𝙴𝙽 𝙷𝚃𝚃𝙿𝚂", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | 𝙳𝙴𝚃𝙴𝙲𝚃", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "𝙼𝙰𝚁𝙲𝙰 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙻𝙰𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | 𝙰𝚄𝙳𝙸𝙾𝚂", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix + command} audios`},
{title: "👾 | АВТОСТИКЕР", description: "𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | 𝙿𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨ПРИВЕТ, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┣❧ *𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽𝙰 𝙳𝙴 𝙻𝙰𝚂 𝙾𝙲𝙿𝙸𝙾𝙽𝙴𝚂 𝚀𝚄𝙴 𝚂𝙰𝙻𝙴𝙽 𝙴𝙽 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙻𝙸𝚂𝚃𝙰 𝙾 𝙳𝙰 𝙲𝙻𝙸𝙲𝙺 𝙴𝙽 𝙰𝙻𝙶𝚄𝙽 𝙱𝙾𝚃𝙾𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *autosticker*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections }

let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('админ', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('админ', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('админ', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('админ', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('админ', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('админ', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('админ', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('админ', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('админ', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('владелиц', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ВЫБОР: ${type} 
🎚️ ВЫБРАНО: ${isEnable ? 'АКТИВИРОВАТЬ' : 'ДЕАКТИВИРОВАТЬ'}
📣 КОМУ: ${isAll ? 'ЭТОТ ЧАТ' : isUser ? '' : 'ЭТОТ ЧАТ'}`, author, null, [[`${isEnable ? '✖️ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'владелиц']
handler.command = /^((вк|вык)включить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

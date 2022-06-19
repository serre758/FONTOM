import fs from 'fs'
function handler(m, { conn }) {
let text = `
*—◉ НОМЕР МОЕГО ВЛАДЕЛЬЦА wa.me/5219992095479*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ИНФОРМАЦИИ - ВЛАДЕЛЬЦА',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛᴄ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://wa.me/+79054731060`}}})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['ВЛАДЕЛИЦ', 'creator']
handler.tags = ['ИНФОРМАЦИЯ']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler

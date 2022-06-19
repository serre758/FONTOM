/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 ИНФО ЛИСТ 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ ПРИВЕТ ${name} 💙*
*┃*
*┃ 👉🏻 ОБРАЩАТЬСЯ СТРОГО ПО НОМЕРУ ТЕЛЕФОНА*
*┃ НЕ ГРУБИТЕ :𝟹*
*┃*
*┃ ➤ НОМЕР:* 
*┃ +79054741060*
*┃ ➤ БАНК: СБЕР* 
*┃ ➤ ОПЛАТИТЕ АРЕНДУ БОТА :* 
*┃ ЧТО БЫ СНЯТЬ БОТА В ГРУППУ* 
*┃ ➤ РЕКВЕЗИТЫ: СБЕР*  
*┃ ➤ СБЕР: СБЕРБАНК*
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴 𝚂𝙸* 
*┃ 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝙼𝙰𝚂*
*┃ 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰* 
*┃ 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴 <𝟹*
*┃ wa.me/+79054731060*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['информация']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler

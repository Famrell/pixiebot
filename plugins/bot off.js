let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Pixie Off, Ketik Pixieon Untuk Menghidupkan Bot* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['Pixie(on/off)']
handler.tags = ['main']
handler.command = /^(pixieoff)$/i

handler.admin = true

export default handler
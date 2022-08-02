let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Pixie On, Ada Yang Bisa Di Bantu?* ')
}

handler.tags = ['main']
handler.command = /^(pixieon)$/i

handler.admin = true

export default handler
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ Permanen
├ 1 Bulan
├ 1 Minggu
├ Trial 3 Hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa : 08546606905
Pulsa2 : 081946945315
Dana: 085646606905
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Permanen', description: "Rp20.000\nSewa bot tanpa batasan waktu.", rowId:".owner"},
        {title: '1 Bulan', description: "Rp10.000\nSewa bot selama 1 bulan.", rowId:".owner"},
        {title: '1 Minggu', description: "Rp5.000\nSewa bot selama 1 minggu.", rowId:".owner"},
        {title: 'Trial', description: "GRATIS\nBot gratis 3 Hari.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy

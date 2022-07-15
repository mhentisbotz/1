let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

•Allah swt
•My ortu
•Nurutomo
•Xteam
•Rzy-botz (Rozi)
•AlyaaXzy 
•BOTCAHX (Tio)
•Zeks
•Asyraf 6Youu (Recorder)
•Penyedia Layanan API
•Orang-orang yang Berdonasi
`.trim(), watermark, 'Back To Raf Botz Menu', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh

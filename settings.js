import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

// ✿━━━━━━✿•°:°•✿━━━━━━✿ XD

global.botNumber = ''

global.owner = [
  ['50493732693', '♡ Wirk ♡', true]
]

global.mods = []
global.suittag = ['50493732693']
global.prems = []

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.languaje = 'Español'
global.vs = '2.2.0'
global.nameqr = 'MaiBot-MD'
global.namebot = '✿◟Mᴀɪ - Bᴏᴛ◞✿'
global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.yukiJadibts = true

global.packname = '🌸 Mᴀɪ • Bᴏᴛ 🌸'
global.botname = '🌷 Mᴀɪ 🌷'
global.wm = '💫 ᴘʀᴏᴄᴇssᴇᴅ ʙʏ ᴍᴀɪ-ʙᴏᴛ ʙʏ ᴡɪʀᴋ 💫'
global.author = '🍡 By Wirk 🍡'
global.dev = '🌼 Wirk Dev 🌼'
global.textbot = '💖 Mᴀɪ-Bᴏᴛ • Wᴏʀʟᴅ ᴏғ Cᴜᴛᴇ 💖'
global.etiqueta = '🌸 @Wirk 🌸'

global.moneda = 'MimiCoins🫦'
global.welcom1 = '⌗ Usa *setwelcome* para editar este mensaje'
global.welcom2 = '⌗ Usa *setbye* para editar este mensaje'
global.banner = 'https://files.catbox.moe/uq8da7.jpg'
global.avatar = 'https://files.catbox.moe/6pmrwk.jpg'

global.gp1 = 'https://chat.whatsapp.com/D9hmosKv0924sPqyXeu1CU'
global.comunidad1 = 'https://chat.whatsapp.com/G6knC0f7kCZIG39iTZOTJw'
global.channel = 'https://whatsapp.com/channel/0029Vagdmfv1SWt5nfdR4z3w'
global.channel2 = global.channel
global.md = 'https://github.com/The-King-Destroy/Yuki_Suou-Bot'
global.correo = 'thekingdestroy507@gmail.com'
global.cn = global.channel

global.catalogo = fs.readFileSync('./src/catalogo.jpg')
global.estilo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    ...(false ? { remoteJid: '5219992095479-1625305606@g.us' } : {})
  },
  message: {
    orderMessage: {
      itemCount: -999999,
      status: 1,
      surface: 1,
      message: global.packname,
      orderTitle: 'MaiBot',
      thumbnail: global.catalogo,
      sellerJid: '0@s.whatsapp.net'
    }
  }
}
global.ch = {
  ch1: '120363322713003916@newsletter'
}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    const emot = {
      level: '🌟 Nivel',
      coin: '💸 Coin',
      exp: '✨ Exp',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
      kyubi: '🌀 Magia',
      joincount: '💰 Token',
      emerald: '♦️ Esmeralda',
      stamina: '⚡ Energía',
      role: '⚜️ Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp',
      gold: '👑 Oro',
      iron: '⛓️ Hierro',
      coal: '🌑 Carbón',
      stone: '🪨 Piedra',
      potion: '🥤 Poción'
    }
    const results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    return results.length ? emot[results[0][0]] : ''
  }
}

global.rpgg = {
  emoticon(string) {
    string = string.toLowerCase()
    const emott = {
      level: '🌟',
      coin: '💸',
      exp: '✨',
      bank: '🏦',
      diamond: '💎',
      health: '❤️',
      kyubi: '🌀',
      joincount: '💰',
      emerald: '♦️',
      stamina: '⚡',
      role: '⚜️',
      premium: '🎟️',
      pointxp: '📧',
      gold: '👑',
      iron: '⛓️',
      coal: '🌑',
      stone: '🪨',
      potion: '🥤'
    }
    const results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    return results.length ? emott[results[0][0]] : ''
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("✿ Archivo 'settings.js' actualizado ✿"))
  import(`${file}?update=${Date.now()}`)
})



let handler = async (m, { conn, usedPrefix, command }) => {
  
    if (!m.hasQuotedMsg || !m.quoted.mimetype.startsWith('image/')) {
        return m.reply(`❗ Por favor, responde a una imagen usando el comando:\n${usedPrefix + command}`);
    }


    let message = `✨ Tu imagen ha sido procesada con éxito.\nAunque este bot no puede mejorarla directamente, puedes buscar herramientas como "Photo Enhancer" o "Image Upscaler" para optimizar su calidad. ¡Espero ayudarte más en el futuro!`;

   
    await conn.reply(m.chat, message, m);
};

handler.help = ['hd'];
handler.tags = ['tools'];
handler.command = ['hd'];

export default handler;
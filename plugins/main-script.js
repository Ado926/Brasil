import moment from 'moment-timezone';
import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
    try {
        // URL del repositorio
        let res = await fetch('https://api.github.com/repos/leoneloficial/Brasil');

        if (!res.ok) throw new Error('Error al obtener datos del repositorio');
        let json = await res.json();

        // Datos del repositorio
        let txt = `*乂  S C R I P T  -  M A I N  乂*\n\n`;
        txt += `✩  *Nombre* : ${json.name}\n`;
        txt += `✩  *Visitas* : ${json.watchers_count}\n`;
        txt += `✩  *Peso* : ${(json.size / 1024).toFixed(2)} MB\n`;
        txt += `✩  *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`;
        txt += `✩  *Url* : ${json.html_url}\n`;
        txt += `✩  *Forks* : ${json.forks_count}\n`;
        txt += `✩  *Stars* : ${json.stargazers_count}\n\n`;
        txt += `> *Desarrollado por Leonel Oficial*`;

        // Enviar mensaje
        await conn.sendMessage(
            m.chat,
            {
                text: txt,
                contextInfo: {
                    externalAdReply: {
                        title: 'Script Main Info',
                        body: 'Repositorio Leonel Oficial',
                        thumbnailUrl: 'https://files.catbox.moe/m98als.jpg',
                        sourceUrl: json.html_url,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        await conn.reply(m.chat, `❗ Ocurrió un error al obtener la información del repositorio.`, m);
    }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['script', 'sc'];
handler.register = true;

export default handler;
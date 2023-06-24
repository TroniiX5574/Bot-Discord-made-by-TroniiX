const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setTitle('Arrow')
            .setDescription('[Discord](https://discord.gg/aMa7PYxrUH)')
            .setColor('RANDOM')
            .addField('**Serveur RP WL**', "Dev Constant", true)
            .addField('**Connect**', '<fivem://connect/play.arrowrp.fr>', true)
            .setAuthor('Arrow', 'https://cdn.discordapp.com/attachments/810231141264916527/810258927765028904/Arrow_logo.png', 'https://discord.gg/aMa7PYxrUH')
            .setImage('https://cdn.discordapp.com/attachments/810231141264916527/810258927765028904/Arrow_logo.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/810231141264916527/810258927765028904/Arrow_logo.png')
            .setFooter('Arrow RP V2', 'https://cdn.discordapp.com/attachments/810231141264916527/810258927765028904/Arrow_logo.png')
            .setTimestamp()
            .setURL('https://discord.gg/aMa7PYxrUH'))
    },
    name: 'embed'
}
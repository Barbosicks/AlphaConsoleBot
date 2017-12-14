const Discord = require('discord.js');

module.exports = {
    title: "role",
    perms: "everyone",
    commands: ["!role <Giveaways or ga>"],
    description: ["It will add or remove the role depending if you have the role or not"],
    
    run: async(client, serverInfo, sql, message, args) => {
        if (message.channel.id == serverInfo.BotSpam) {
            if (args[1].toLowerCase() == "giveaways" || args[1].toLowerCase() == "ga") {
                if (message.member.roles.has(serverInfo.EventsRole)) {
                    message.member.removeRole(serverInfo.EventsRole)
                    const embed = new Discord.MessageEmbed()
                    .setColor([255,255,0])
                    .setAuthor("Role removed from your profile.", serverInfo.logo)
                    message.channel.send(embed)
                } else {
                    message.member.addRole(serverInfo.EventsRole)
                    const embed = new Discord.MessageEmbed()
                    .setColor([255,255,0])
                    .setAuthor("Role added to your profile.", serverInfo.logo)
                    message.channel.send(embed)
                }
            }
        }
    }
}
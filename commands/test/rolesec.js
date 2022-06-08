const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "rolesec",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setTitle("Select Role")
                .setDescription("Select roles from the button below")
                .setColor("ORANGE")
            ],
            components: [
                new MessageActionRow()
                .addComponents([
                    new MessageButton()
                    .setCustomId("role-983652167028178945")
                    .setStyle("PRIMARY")
                    .setLabel("Vjp")
                ])
            ]
        })
    }
}
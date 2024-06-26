const { ApplicationCommandOptionType } = require('discord.js');
const run = async({ client, interaction, prefix }) => {
    let messages = interaction.options.getString("message");
    interaction.reply(messages).catch((err) => {console.log(err)});
}

module.exports = {
    name: "say",
    category: "talk",
    description: 'Yêu cầu bot nói gì đó',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "message",
            description: "Lời muốn nói",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ], run
}
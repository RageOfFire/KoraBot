const run = async({ client, interaction, prefix }) => {
    let messages = interaction.options.getString("message");
    interaction.reply(messages);
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
            type: "STRING",
            required: true,
        },
    ], run
}
const run = async(client, interaction) => {
    let messages = interaction.options.getString("message");
    interaction.reply(messages);
}

module.exports = {
    name: "callhelp",
    category: "talk",
    description: 'Yêu cầu bot nói gì đó',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "message",
            description: "Kêu cứu!",
            type: "STRING",
            required: true,
        },
    ], run
}
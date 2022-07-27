const run = async({ client, interaction, prefix }) => {
    let messages = interaction.options.getString("message");
    client.guilds.cache.get(process.env.GUILDID).channels.cache.get(process.env.CHANNELID).send(messages).catch((err) => {console.log(err)});
    interaction.reply('Gửi tin nhắn thành công');
}

module.exports = {
    name: "callhelp",
    category: "talk",
    description: 'Kêu cứu :))))',
    permissions: [],
    devOnly: true,
    options: [
        {
            name: "message",
            description: "Kêu cứu!",
            type: "STRING",
            required: true,
        },
    ], run
}
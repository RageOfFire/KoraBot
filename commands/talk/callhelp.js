module.exports = {
    name: "callhelp",
    category: "info",
    description: 'Kêu cứu :))))',
    permissions: [],
    devOnly: true,
    run: async({ client, message, args }) => {
        let messages = message.content.replace(prefix + 'callhelp ', '')
        client.guilds.cache.get(process.env.GUILDID).channels.cache.get(process.env.CHANNELID).send(messages).catch((err) => {console.log(err)});
        message.reply('Gửi tin nhắn thành công');
    }
}
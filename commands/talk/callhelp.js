module.exports = {
    name: "callhelp",
    category: "talk",
    description: 'Kêu cứu :))))',
    permissions: [],
    devOnly: true,
    run: async function({ client, message, prefix, args }) {
        let messages = message.content.replace(prefix + this.name + ' ', '')
        client.guilds.cache.get(process.env.GUILDID).channels.cache.get(process.env.CHANNELID).send(messages).catch((err) => {console.log(err)});
        message.reply('Gửi tin nhắn thành công');
    }
}
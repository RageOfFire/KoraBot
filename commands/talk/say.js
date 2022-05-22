const chat = require('../../util/api');
const { Points } = require('../../events/Points')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "chat",
    category: "talk",
    permissions: [],
    devOnly: false,
    run: async({ client, message, prefix, args }) => {
        const pointDB = await Points.findOne({ where: { 'nameid': message.author.id } });
        if (pointDB != null) {
            await Points.increment('points', { by: 1, where: { 'nameid': message.author.id } });
        }
        else {
            await Points.create({
                nameid: message.author.id,
                name: message.author.tag,
                points: 1
            });
        }
        const asyncChat = async () => {
            const response = await chat.GetItems(message.author.id, message.content.replace(prefix + 'chat ',''), message.author.username, client.user.username, message.content.replace(prefix + 'chat ',''))
            const koraEmbed = new MessageEmbed()
                .setColor('#faa152')
                .setTitle('Kora')
                .setURL('https://www.crystalgem.cf/')
                .setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
                .setDescription(response.data)
                .setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
                .addFields(
                    { name: 'Đang trò chuyện với', value: `🔊 ${message.author.toString()} 🔊`, inline: true },
                    { name: 'Điểm tương tác', value: `🧡 ${pointDB != null ? pointDB.points : 1} 🧡`, inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });

            message.reply({ embeds: [koraEmbed] });
        }
        asyncChat()
    }
}
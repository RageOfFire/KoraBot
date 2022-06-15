const chat = require('../../util/api');
const { Points } = require('../../events/Points')
const { MessageEmbed } = require('discord.js')

const run = async (client, interaction) => {
    await interaction.deferReply();
    const pointDB = await Points.findOne({ where: { 'nameid': interaction.user.id } });
    let message = interaction.options.getString("message");
    const response = await chat.GetItems(interaction.user.id, message, interaction.user.username, client.user.username, message);
    if (!message) {
        interaction.reply({content: "Bạn cần nhập nội dung", ephemeral: true})
    }
    else {
        if (pointDB != null) {
           await Points.increment('points', { by: 1, where: { 'nameid': interaction.user.id } });
        }
        else {
           await Points.create({
                nameid: interaction.user.id,
                name: interaction.user.tag,
                points: 1
            });
        }
            const koraEmbed = new MessageEmbed()
                .setColor('#faa152')
                .setTitle('Kora')
                .setURL('https://www.crystalgem.cf/')
                .setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
                .setDescription(response.data)
                .setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
                .addFields(
                    { name: 'Đang trò chuyện với', value: `🔊 ${interaction.user.username} 🔊`, inline: true },
                    { name: 'Điểm tương tác', value: `🧡 ${pointDB != null ? pointDB.points : 1} 🧡`, inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });

            await interaction.editReply({ embeds: [koraEmbed] }).catch((err) => {console.log(err)});
        }
    }

module.exports = {
    name: "chat",
    category: "talk",
    description: 'Trò chuyện với Kora',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "message",
            description: "Đôi lời muốn nói với Kora",
            type: "STRING",
            required: true,
        },
    ], run
}
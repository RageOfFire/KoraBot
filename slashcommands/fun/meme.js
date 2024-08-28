const axios = require("axios");
const { EmbedBuilder } = require('discord.js')
const run = async (client, interaction, prefix) => {
    await interaction.deferReply().catch((err) => { console.error(err) });;
    await axios.get('https://meme-api.com/gimme')
        .then(function (response) {
            const memeEmbed = new EmbedBuilder()
                .setColor('#faa152')
                .setTitle(response.data.title)
                .setURL(response.data.postLink)
                .setAuthor({ name: `Được đề xuất bởi ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
                .setThumbnail(client.user.displayAvatarURL())
                .setImage(response.data.url)
                .setTimestamp()
            interaction.editReply({ embeds: [memeEmbed] }).catch((err) => {console.error(err)})
        })
        .catch(function (error) {
            console.error(error);
            interaction.editReply("Có gì đó không đúng").catch((err) => {console.error(err)})
        })
}

module.exports = {
    name: "meme",
    category: "fun",
    description: 'Tạo 1 meme ngẫu nhiên',
    permissions: [],
    devOnly: false, run
}
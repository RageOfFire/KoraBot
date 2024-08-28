const axios = require("axios");
const { EmbedBuilder } = require('discord.js')
module.exports = {
    name: "meme",
    category: "fun",
    description: 'Tạo 1 meme ngẫu nhiên',
    permissions: [],
    devOnly: false,
    run: async function({ client, message, prefix, args }) {
        await axios.get('https://meme-api.com/gimme')
        .then(function (response) {
            const memeEmbed = new EmbedBuilder()
                .setColor('#faa152')
                .setTitle(response.data.title)
                .setURL(response.data.postLink)
                .setAuthor({ name: `Được đề xuất bởi ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setThumbnail(client.user.displayAvatarURL())
                .setImage(response.data.url)
                .setTimestamp()
                message.reply({ embeds: [memeEmbed] }).catch((err) => {console.error(err)})
        })
        .catch(function (error) {
            console.error(error);
            message.reply("Có gì đó không đúng").catch((err) => {console.error(err)})
        })
    }
}
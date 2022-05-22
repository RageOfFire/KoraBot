const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const { hyperlink } = require('@discordjs/builders');
require("dotenv").config();
const { Points } = require('./include/database')
const chat = require('./include/api');

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let prefix = "k-";
client.on("ready", () => {
    Points.sync();
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity("CrystalGem", {
        type: 'PLAYING',
        url: 'https://crystalgem.cf/'
    })
})

client.on("messageCreate", async (message) => {
    if (message.content.startsWith(prefix) || (message.mentions.has(client.user.id) && message.type == "REPLY" && !message.content.startsWith(prefix))) {
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
            const response = await chat.GetItems(message.author.id, message.content.slice(prefix.length), message.author.username, client.user.username, message.content.slice(prefix.length))
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
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if (message.mentions.has(client.user.id) && message.type !== "REPLY") {
        const adEmbed = new MessageEmbed()
            .setColor('#faa152')
            .setTitle('Kora')
            .setURL('https://www.crystalgem.cf/')
            .setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
            .setDescription(`Này bạn ping tôi à? Lỡ ping rồi thì chơi game này đi cực hay luôn đó là CrystalGem thử xem ${hyperlink("tại đây", "https://crystalgem.cf/")} ?\nBất kì khi nào rảnh quay lại nói chuyện với tôi qua k-(nói chuyện) nha.`)
            .setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
            .setTimestamp()
            .setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });

        message.reply({ embeds: [adEmbed] });
    }
});
client.login(process.env.TOKEN)
const Discord = require("discord.js");
const request = require('request');
const Sequelize = require('sequelize');
const { MessageEmbed } = require('discord.js');
const { hyperlink } = require('@discordjs/builders');
require("dotenv").config()

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'kora.sqlite',
});

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

const Points = sequelize.define('KoraPoint', {
    nameid: {
        type: Sequelize.INTEGER,
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    points: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
    },
});

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
            await Points.increment('points', {by: 1, where: {'nameid': message.author.id}});
            superPoint = pointDB.points;
        }
        else {
            superPoint = 0;
            await Points.create({
                nameid: message.author.id,
                name: message.author.tag,
            });
        }
        const options = {
            method: 'POST',
            url: 'https://waifu.p.rapidapi.com/path',
            qs: {
                user_id: message.author.id,
                message: message.content.slice(prefix.length),
                from_name: message.author.toString(),
                to_name: client.user.toString(),
                situation: 'Kora đang nói chuyện với bạn',
                translate_from: 'en vn',
                translate_to: 'vn'
            },
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'waifu.p.rapidapi.com',
                'x-rapidapi-key': process.env.RAPIAPI,
                useQueryString: true
            },
            body: {},
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            const koraEmbed = new MessageEmbed()
                .setColor('#faa152')
                .setTitle('Kora')
                .setURL('https://www.crystalgem.cf/')
                .setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
                .setDescription(body)
                .setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
                .addFields(
                    { name: 'Đang trò chuyện với', value: `🔊 ${message.author.toString()} 🔊`, inline: true },
                    { name: 'Điểm tương tác', value: `🧡 ${superPoint} 🧡`, inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });

            message.reply({ embeds: [koraEmbed] });
        });
    }
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if (message.mentions.has(client.user.id) && message.type !== "REPLY") {
        const adEmbed = new MessageEmbed()
        .setColor('#faa152')
        .setTitle('Kora')
        .setURL('https://www.crystalgem.cf/')
        .setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
        .setDescription(`Này bạn ping tôi à? Lỡ ping rồi thì chơi game này đi cực hay luôn đó là CrystalGem thử xem ${hyperlink("tại đây","https://crystalgem.cf/")} ?\nBất kì khi nào rảnh quay lại nói chuyện với tôi qua k-(nói chuyện) nha.`)
        .setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
        .setTimestamp()
        .setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });

    message.reply({ embeds: [adEmbed] });
    }
})
client.login(process.env.TOKEN)
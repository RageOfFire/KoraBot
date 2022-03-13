const Discord = require("discord.js")
const request = require('request');
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
let prefix = "k-";
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity("CrystalGem", {
        type: 'PLAYING',
        url: 'https://crystalgem.cf/'
    })
})
client.on("messageCreate", (message) => {
    if (message.content.startsWith(prefix)) {
        const options = {
            method: 'POST',
            url: 'https://waifu.p.rapidapi.com/path',
            qs: {
                user_id: `<@${message.author.id}>`,
                message: `${message.content.slice(prefix.length)}`,
                from_name: `<@${message.author.username}>`,
                to_name: `<@${client.user.username}>`,
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

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            message.reply(body);
        });
    }
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if (message.mentions.has(client.user.id) && message.type == "REPLY") {
        message.reply("Bạn đã bị rickroll xin chúc mừng! https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif")
    }
    if (message.mentions.has(client.user.id) && message.type !== "REPLY") {
        message.reply("Này bạn ping tôi à? Lỡ ping rồi thì chơi game này đi cực hay luôn đó là CrystalGem thử xem tại đây? https://crystalgem.cf/\nBất kì khi nào rảnh quay lại nói chuyện với tôi qua k-chat nha.")
    }
})
client.login(process.env.TOKEN)
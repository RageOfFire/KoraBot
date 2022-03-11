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
let prefix = "k.";
client.user.setActivity("CrystalGem", { type: 'PLAYING' }, { url: 'https://crystalgem.cf/' })
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on("messageCreate", (message) => {
    if (message.content.startsWith(prefix) && message.content == !prefix + "game") {
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const options = {
            method: 'POST',
            url: 'https://waifu.p.rapidapi.com/path',
            qs: {
                user_id: `${message.author.id}`,
                message: `${args}`,
                from_name: `${message.author.username}`,
                to_name: `${client.user}`,
                situation: 'Kora đang nói chuyện với bạn',
                translate_from: 'auto',
                translate_to: 'vn'
            },
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'waifu.p.rapidapi.com',
                'x-rapidapi-key': `${process.env.RAPIAPI}`,
                useQueryString: true
            },
            body: {},
            json: true
        };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            message.reply(body);
        });
        if (message.content == prefix + "game") {
            message.reply("Bạn muốn chơi game à? Ý hay đấy tôi có 1 game cực hay luôn đó là CrystalGem sao bạn không thử xem? https://crystalgem.cf/")
        }
    }
})
client.login(process.env.TOKEN)
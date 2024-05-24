const { ApplicationCommandOptionType } = require('discord.js');
const run = async ({ client, interaction, prefix }) => {
    let user = interaction.options.getUser("user")
    if(!user) {
        interaction.reply(`Bạn có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ gay`).catch((err) => {console.log(err)});
    }
    else {
        interaction.reply(`${user} có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ gay`).catch((err) => {console.log(err)});
    }
};

module.exports = {
    name: "howgay",
    category: "fun",
    description: 'Xem độ gay của bạn :))) ?',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "user",
            description: "Người nào đó",
            type: ApplicationCommandOptionType.User,
            required: false
        },
    ], run
}
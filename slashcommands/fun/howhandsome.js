const { ApplicationCommandOptionType } = require('discord.js');
const run = async({ client, interaction, prefix }) => {
    const user = interaction.options.getUser("user");
    if(!user) {
        await interaction.reply(`Bạn có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ đẹp trai`).catch((err) => {console.log(err)});
    }
    else {
        await interaction.reply(`${user} có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ đẹp trai`).catch((err) => {console.log(err)});
    }
};

module.exports = {
    name: "howhandsome",
    category: "fun",
    description: 'Xem độ đẹp trai của bạn :v',
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
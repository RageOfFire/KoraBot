const { ApplicationCommandOptionType } = require("discord.js");
const run = async(client, interaction, prefix) => {
    let min = interaction.options.getNumber('min') ?? 1;
    let max = interaction.options.getNumber('max') ?? 100;
    if(min > max) return interaction.reply({content: "Số tối thiểu không thể lớn hơn số tối đa", ephemeral: true})
    interaction.reply(`Con số ngẫu nhiên của bạn là ${Math.floor(Math.random() * (max - min) + min)}`).catch((err) => {console.error(err)});
};

module.exports = {
    name: "number",
    category: "fun",
    description: 'Đưa ra 1 số ngẫu nhiên trong 1 khoảng nhất định',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "min",
            description: "Số tối thiểu",
            type: ApplicationCommandOptionType.Number,
            required: false,
        },
        {
            name: "max",
            description: "Số tối đa",
            type: ApplicationCommandOptionType.Number,
            required: false,
        },
    ], run
}
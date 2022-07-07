const run = async(client, interaction) => {
    let number = interaction.options.getNumber('number');
    interaction.reply(`Con số ngẫu nhiên của bạn là ${Math.floor(Math.random() * number + 1)}`).catch((err) => {console.log(err)});
};

module.exports = {
    name: "number",
    category: "fun",
    description: 'Đưa ra 1 số ngẫu nhiên từ 1-100',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "number",
            description: "Số tối đa",
            type: "NUMBER",
            required: true,
        },
    ], run
}
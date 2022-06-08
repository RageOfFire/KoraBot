const run = async (client, interaction) => {
    let user = interaction.options.getMember("user")
    if(!user) {
        interaction.reply(`Bạn có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ gay`).catch((err) => {console.log(err)});
    }
    else {
        interaction.reply(`${user.user.tag} có ${Math.floor(Math.random() * 100) + 1}% tỷ lệ gay`).catch((err) => {console.log(err)});
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
            type: "USER",
            required: false
        },
    ], run
}
const { WouldYouRather } = require('discord-gamecord')

const run = async ({ client, interaction, prefix }) => {
    new WouldYouRather({
        message: interaction,
        slash_command: true,
        embed: {
            title: 'Nếu là bạn ?',
            color: '#faa152',
        },
        thinkMessage: '**Đang suy nghĩ...**',
        buttons: { option1: 'Lựa chọn 1', option2: 'Lựa chọn 2' },
        othersMessage: 'Bạn không có quyền sử dụng nút này!',
    }).startGame().catch((err) => {console.log(err)});
}

module.exports = {
    name: "rather",
    category: "fun",
    description: 'Nếu là bạn ?',
    permissions: [],
    devOnly: false, run
}
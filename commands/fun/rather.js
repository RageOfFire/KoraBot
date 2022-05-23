const { WouldYouRather } = require('discord-gamecord')
module.exports = {
    name: "rather",
    category: "fun",
    description: 'Nếu là bạn ?',
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        new WouldYouRather({
            message: message,
            slash_command: false,
            embed: {
                title: 'Nếu là bạn ?',
                color: '#faa152',
            },
            thinkMessage: '**Đang suy nghĩ...**',
            buttons: { option1: 'Lựa chọn 1', option2: 'Lựa chọn 2' },
            othersMessage: 'Bạn không có quyền sử dụng nút này!',
        }).startGame();
    }
}
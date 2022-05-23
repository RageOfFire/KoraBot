const { Slots } = require('discord-gamecord')
module.exports = {
    name: "slots",
    category: "fun",
    description: 'Test vận may',
    permissions: [],
    devOnly: false,
    run: async({ client, message, args }) => {
        new Slots({
            message: message,
            slash_command: false,
            embed: {
                title: '🎰 Slot Machine',
                color: '#faa152'
            }
        }).startGame();
    }
}
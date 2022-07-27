const { Slots } = require('discord-gamecord')

const run = async({ client, interaction, prefix }) => {
    new Slots({
        message: interaction,
        slash_command: true,
        embed: {
            title: '🎰 Slot Machine',
            color: '#faa152'
        }
    }).startGame().catch((err) => {console.log(err)});
}

module.exports = {
    name: "slots",
    category: "fun",
    description: 'Test vận may',
    permissions: [],
    devOnly: false, run
}
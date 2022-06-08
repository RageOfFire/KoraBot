const { EightBall } = require('discord-gamecord')

const run = async (client, interaction) => {
    let message = interaction.options.getString("message");
    if (!message) {
        interaction.reply({content: "Bạn cần nhập nội dung", ephemeral: true})
    }
    else {
        new EightBall({
            message: interaction,
            question: message,
            slash_command: true,
            embed: {
                title: '🎱 8Ball',
                color: '#faa152'
            }
        }).startGame().catch((err) => {console.log(err)});
    }
}

module.exports = {
    name: "8ball",
    category: "game",
    description: 'Game 8Ball',
    permissions: [],
    devOnly: false,
    options: [
        {
			name: "message",
			description: "1 tin nhắn nào đó",
			type: "STRING",
			required: true,
		},
    ], run
}
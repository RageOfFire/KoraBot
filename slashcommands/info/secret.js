const { hyperlink } = require('@discordjs/builders');

const run = async ({ client, interaction, prefix }) => {
    interaction.reply(`CrystalGem là 1 tựu game RPG đánh theo lượt cực kỳ vjp pro luôn thử xem ${hyperlink("tại đây", "https://rageoffire.itch.io/crystalgem")}.`).catch((err) => {console.log(err)});
}

module.exports = {
	name: "secret",
	category: "info",
    description: 'Hmm verry sus',
	permissions: [],
	devOnly: false, run
}
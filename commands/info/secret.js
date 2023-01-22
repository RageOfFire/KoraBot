const { hyperlink } = require('@discordjs/builders');
module.exports = {
	name: "secret",
	category: "info",
    description: 'Hmm verry sus',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
        message.reply(`CrystalGem là 1 tựu game RPG đánh theo lượt cực kỳ vjp pro luôn thử xem ${hyperlink("tại đây", "https://rageoffire.itch.io/crystalgem")}.`).catch((err) => {console.log(err)});
	}
}
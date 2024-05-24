const { EmbedBuilder } = require('discord.js')
const { getFiles } = require("../../util/functions")
const fs = require("fs")

const run = async ({ client, interaction, prefix }) => {
	let HelpCMD = 'Tất cả lệnh đều bắt đầu = (' + prefix + ')\n\n';
	fs.readdirSync('./commands/').forEach((category) => {
		let commands = getFiles(`./commands/${category}`, ".js")
		commands.forEach((f) => {
			const command = require(`../${category}/${f}`)
			HelpCMD += `🔶${prefix}${command.name}: ${command.description}\n\n`
		})
	})
	HelpCMD += 'Hoặc có thể sử dụng với /';
	const helpEmbed = new EmbedBuilder()
		.setColor('#faa152')
		.setTitle('Hướng dẫn')
		.setURL('https://rageoffire.itch.io/crystalgem')
		.setAuthor({ name: client.user.username, iconURL:  client.user.displayAvatarURL(), url: 'https://rageoffire.itch.io/crystalgem' })
		.setDescription(HelpCMD)
		.setThumbnail(client.user.displayAvatarURL())
		.setTimestamp()
		.setFooter({ text: `Được đề xuất bởi ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });
	interaction.reply({ embeds: [helpEmbed] }).catch((err) => {console.log(err)});
}

module.exports = {
	name: "help",
	category: "info",
	description: 'Xem hướng dẫn',
	permissions: [],
	devOnly: false, run
}
const { MessageEmbed } = require('discord.js')
const { getFiles } = require("../../util/functions")
const fs = require("fs")
module.exports = {
	name: "help",
	category: "info",
	description: 'Xem hướng dẫn',
	permissions: [],
	devOnly: false,
	run: async ({ client, message, prefix, args }) => {
		let HelpCMD = 'Tất cả lệnh đều bắt đầu = (' + prefix + ')\n\n';
		fs.readdirSync('./commands/').forEach((category) => {
			let commands = getFiles(`./commands/${category}`, ".js")
			commands.forEach((f) => {
				const command = require(`../${category}/${f}`)
				HelpCMD += `🔶${prefix}${command.name}: ${command.description}\n\n`
			})
		})
		const helpEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Kora')
			.setURL('https://www.crystalgem.cf/')
			.setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
			.setDescription(HelpCMD)
			.setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });
		message.reply({ embeds: [helpEmbed] })
	}
}
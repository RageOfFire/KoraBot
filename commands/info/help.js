const { MessageEmbed } = require('discord.js')
module.exports = {
	name: "help",
	category: "info",
	permissions: [],
	devOnly: false,
	run: async ({ client, message, args }) => {
		const helpEmbed = new MessageEmbed()
			.setColor('#faa152')
			.setTitle('Kora')
			.setURL('https://www.crystalgem.cf/')
			.setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
			.setDescription(`
			🔶Tất cả lệnh đều bắt đầu = (k-)
			\n🔶 chat (Nội dung): Để trò chuyện với Kora
			\n🔶 howhandsome : Xem tỷ lệ đẹp trai của bạn :v
			\n🔶 howgay : Xem tỷ lệ gay của bạn
			\n🔶 number : Nhận 1 số ngẫu nhiên từ 1-100
			\n🔶 secret : Hmmm very sú`)
			.setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
			.setTimestamp()
			.setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });
		message.reply({ embeds: [helpEmbed] })
	}
}
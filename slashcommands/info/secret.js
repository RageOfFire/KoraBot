const { MessageEmbed } = require('discord.js')
const { hyperlink } = require('@discordjs/builders');

const run = async (client, interaction) => {
    const adEmbed = new MessageEmbed()
        .setColor('#faa152')
        .setTitle('Kora')
        .setURL('https://www.crystalgem.cf/')
        .setAuthor({ name: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160', url: 'https://www.crystalgem.cf/' })
        .setDescription(`CrystalGem là 1 tựu game RPG đánh theo lượt cực kỳ vjp pro luôn thử xem ${hyperlink("tại đây", "https://crystalgem.cf/")}.`)
        .setThumbnail('https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160')
        .setTimestamp()
        .setFooter({ text: 'Kora', iconURL: 'https://cdn.discordapp.com/avatars/951682890297659412/7e31923b9f673ca23c66336b2a97bead.webp?size=160' });

    interaction.reply({ embeds: [adEmbed] }).catch((err) => {console.log(err)});
}

module.exports = {
	name: "secret",
	category: "info",
    description: 'Hmm verry sus',
	permissions: [],
	devOnly: false, run
}
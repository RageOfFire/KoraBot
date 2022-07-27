const { Points } = require('../../events/Points')

const run = async ({ client, interaction, prefix }) => {
    await interaction.deferReply();
    const pointDB = await Points.findOne({ where: { 'nameid': interaction.user.id } });
    interaction.editReply(`Điểm tương tác: 🧡 ${pointDB != null ? pointDB.points : 1} 🧡\n`).catch((err) => {console.log(err)});
}

module.exports = {
    name: "checkpoint",
    category: "talk",
    description: 'Xem điểm tương tác !',
    permissions: [],
    devOnly: false, run
}
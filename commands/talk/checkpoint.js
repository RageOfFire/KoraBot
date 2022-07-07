const { Points } = require('../../events/Points')
module.exports = {
    name: "checkpoint",
    category: "talk",
    description: 'Xem điểm tương tác !',
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        const pointDB = await Points.findOne({ where: { 'nameid': message.author.id } });
        message.reply(`Điểm tương tác: 🧡 ${pointDB != null ? pointDB.points : 1} 🧡\n`).catch((err) => {console.log(err)});
    }
}
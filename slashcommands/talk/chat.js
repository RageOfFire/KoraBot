const chat = require('../../util/api');
const { Points } = require('../../events/Points')

const run = async (client, interaction) => {
    await interaction.deferReply();
    const pointDB = await Points.findOne({ where: { 'nameid': interaction.user.id } });
    let message = interaction.options.getString("message");
    const response = await chat.GetItems(interaction.user.id, message, interaction.user.username, client.user.username, message);
    if (!message) {
        interaction.reply({content: "Bạn cần nhập nội dung", ephemeral: true})
    }
    else {
        if (pointDB != null) {
           await Points.increment('points', { by: 1, where: { 'nameid': interaction.user.id } });
        }
        else {
           await Points.create({
                nameid: interaction.user.id,
                name: interaction.user.tag,
                points: 1
            });
        }
            interaction.editReply(response.data).catch((err) => {console.log(err)});
        }
    }

module.exports = {
    name: "chat",
    category: "talk",
    description: 'Trò chuyện với Kora',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "message",
            description: "Đôi lời muốn nói với Kora",
            type: "STRING",
            required: true,
        },
    ], run
}
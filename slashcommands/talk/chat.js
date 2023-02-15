// un-comment to use old api
// const chat = require('../../util/api');
const { GetItems } = require('../../util/apiv2');

const run = async ({ client, interaction, prefix }) => {
    await interaction.deferReply();
    let message = interaction.options.getString("message");
    // Old public API
    // const response = await chat.GetItems(interaction.user.id, message, interaction.user.username, client.user.username, message);
    if (!message) {
        interaction.reply({content: "Bạn cần nhập nội dung", ephemeral: true})
    }
    // else {
    //     interaction.editReply(response.data).catch((err) => {console.log(err)});
    // }
    else {
        GetItems(message)
        .then(outputText => {
            interaction.editReply(`${outputText}`);
        })
        .catch(error => {
            console.error(error);
            interaction.editReply('Error something went wrong :(((.');
        });
    }
}

module.exports = {
    name: "chat",
    category: "talk",
    description: 'Trò chuyện với Bot',
    permissions: [],
    devOnly: false,
    options: [
        {
            name: "message",
            description: "Đôi lời muốn nói với Bot",
            type: "STRING",
            required: true,
        },
    ], run
}
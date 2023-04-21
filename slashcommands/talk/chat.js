// const chat = require("../../util/api");
// un-comment to use OpenAI API
const { GetItems } = require('../../util/apiv2');

const run = async ({ client, interaction, prefix }) => {
  await interaction.deferReply();
  let message = interaction.options.getString("message");
  // Old public API
  // const response = await chat.GetItems(
  //   interaction.user.id,
  //   message,
  //   interaction.user.username,
  //   client.user.username,
  //   message
  // );
  // interaction.editReply(response.data).catch((err) => {
  //   console.log(err);
  //   interaction.editReply("Error something went wrong :(((.").catch((err) => {console.log(err)});
  // });
  // Using OpenAI API
    GetItems(message)
    .then(outputText => {
      interaction.editReply(`${outputText}`).catch((err) => {console.log(err)});
    }).catch(error => {
      console.error(error);
      interaction.editReply('Error something went wrong :(((.').catch((err) => {console.log(err)});
    });
};

module.exports = {
  name: "chat",
  category: "talk",
  description: "Trò chuyện với Bot",
  permissions: [],
  devOnly: false,
  options: [
    {
      name: "message",
      description: "Đôi lời muốn nói với Bot",
      type: "STRING",
      required: true,
    },
  ],
  run,
};

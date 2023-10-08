// const { GetItems } = require("../../util/api");
// un-comment to use OpenAI API

// const { GetItems } = require('../../util/apiv2');

// un-comment to use self host API
// const { GetPromts } = require("../../util/apiv3");

const run = async ({ client, interaction, prefix }) => {
  await interaction.deferReply();
  let message = interaction.options.getString("message");
  // Old public API
  await GetItems(
    interaction.user.id,
    message,
    interaction.user.username,
    client.user.username,
    message
    ).then(response => {
      interaction.editReply(response.data).catch((err) => { console.log(err) });
    }).catch(error => {
      console.error(error);
      interaction.editReply("Error something went wrong :(((.").catch((err) => { console.log(err) });
    })

  // API v3
  // await GetPromts(message, interaction.user.username).then(response => {
  //   interaction.editReply(response.data.results[0].text).catch((err) => { console.log(err); });
  // }).catch(error => {
  //   console.error(error);
  //   interaction.editReply("Error something went wrong :(((.").catch((err) => { console.log(err) });
  // })
  
  // Using OpenAI API
  // GetItems(message)
  // .then(outputText => {
  //   interaction.editReply(`${outputText}`).catch((err) => {console.log(err)});
  // }).catch(error => {
  //   console.error(error);
  //   interaction.editReply('Error something went wrong :(((.').catch((err) => {console.log(err)});
  // });
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

const { ApplicationCommandOptionType } = require('discord.js');
// const { GetItems } = require("../../util/api");

// un-comment to use Gemini API
const { GetItems } = require("../../util/api-gemini");

const run = async ({ client, interaction, prefix }) => {
  await interaction.deferReply();
  let message = interaction.options.getString("message");
  // Old public API
  // await GetItems(
  //   interaction.user.id,
  //   message,
  //   interaction.user.username,
  //   client.user.username,
  //   message
  //   ).then(response => {
  //     interaction.editReply(response.data).catch((err) => { console.log(err) });
  //   }).catch(error => {
  //     console.error(error);
  //     interaction.editReply("Error something went wrong :(((.").catch((err) => { console.log(err) });
  //   })

  // Using Gemini API
  await GetItems(message)
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
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run,
};

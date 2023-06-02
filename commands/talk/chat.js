// un-comment to use OpenAI API
// const { GetItems } = require('../../util/apiv2');
const chat = require("../../util/api");
module.exports = {
  name: "chat",
  category: "talk",
  description: "Trò chuyện với Bot",
  permissions: [],
  devOnly: false,
  run: async function ({ client, message, prefix, args }) {
    let chatMess = message.content.replace(prefix + this.name + " ", "");
    // Old API
    const response = await chat.GetItems(
      message.author.id,
      chatMess,
      message.author.username,
      client.user.username,
      chatMess
    );
    if (
      message.content == prefix + this.name + " " ||
      message.content == prefix + this.name
    ) {
      message.channel.send("Bạn cần nhập nội dung").catch((err) => {console.log(err)});
    } 
    // Old API
    else {
      message.channel.send(response.data).catch((err) => {
        console.log(err);
        message.reply("Error something went wrong :(((.").catch((err) => {console.log(err)});
      });
    }
      // Using OpenAI API
      // else {
      //     GetItems(chatMess)
      //     .then(outputText => {
      //         message.channel.send(`${outputText}`).catch((err) => {console.log(err)});
      //     })
      //     .catch(error => {
      //         console.error(error);
      //         message.reply('Error something went wrong :(((.').catch((err) => {console.log(err)});
      //     });
      // }
  },
};

// un-comment to use OpenAI API
// const { GetItems } = require('../../util/apiv2');

// Old API
// const { GetItems } = require("../../util/api");

// un-comment to use self host API
// const { GetPromts } = require("../../util/apiv3");

module.exports = {
  name: "chat",
  category: "talk",
  description: "Trò chuyện với Bot",
  permissions: [],
  devOnly: false,
  run: async function ({ client, message, prefix, args }) {
    let chatMess = message.content.replace(prefix + this.name + " ", "");
    // Start if
    if (
      message.content == prefix + this.name + " " ||
      message.content == prefix + this.name
    ) {
      message.channel.send("Bạn cần nhập nội dung").catch((err) => { console.log(err) });
    }

    // Old API
    else {
      await GetItems(
        message.author.id,
        chatMess,
        message.author.username,
        client.user.username,
        chatMess
      ).then(response => {
        message.channel.send(response.data).catch((err) => { console.log(err) });
      }).catch(error => {
        console.error(error);
        message.reply("Error something went wrong :(((.").catch((err) => { console.log(err) });
      })
    }

    // Using OpenAI API
    // else {
    //   GetItems(chatMess)
    //     .then(outputText => {
    //       message.channel.send(`${outputText}`).catch((err) => { console.log(err) });
    //     })
    //     .catch(error => {
    //       console.error(error);
    //       message.reply('Error something went wrong :(((.').catch((err) => { console.log(err) });
    //     });
    // }

    // API v3
    // else {
    //   await GetPromts(chatMess, message.author.username).then(response => {
    //     message.channel.send(response.data.results[0].text).catch((err) => { console.log(err); });
    //   }).catch(error => {
    //     console.error(error);
    //     message.reply("Error something went wrong :(((.").catch((err) => { console.log(err) });
    //   })
    // }
  },
};

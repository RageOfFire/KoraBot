const { ApplicationCommandOptionType } = require('discord.js');
const short = require('../../util/shortapi');
let urlregex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
const run = async({ client, interaction, prefix }) => {
    await interaction.deferReply();
    let getUrl = interaction.options.getString("url");
    let check = getUrl.match(urlregex);
    if(check) {
        const response = await short.GetItems(short.createUrl(getUrl));
        interaction.editReply(`Link rút gọn của bạn là ${response.data.result_url}`).catch((err) => {console.log(err)});
    }
    else {
        interaction.editReply(`URL không hợp lệ`).catch((err) => {console.log(err)});
    }
}

module.exports = {
	name: "short",
	category: "info",
    description: 'Rút gọn link',
	permissions: [],
    devOnly: false,
    options: [
        {
            name: "url",
            description: "URL",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ], run
}
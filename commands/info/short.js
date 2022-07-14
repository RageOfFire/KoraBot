const short = require('../../util/shortapi');
let urlregex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
module.exports = {
	name: "short",
	category: "info",
    description: 'Rút gọn link',
	permissions: [],
	devOnly: false,
	run: async function({ client, message, prefix, args }) {
		let getUrl = message.content.replace(prefix + this.name + ' ', '');
		let check = getUrl.match(urlregex);
		if (message.content == prefix + this.name + ' ' || message.content == prefix + this.name) {
            message.reply('Bạn cần nhập URL');
        }
		else if(check) {
			const response = await short.GetItems(short.createUrl(getUrl));
			message.reply(`Link rút gọn của bạn là ${response.data.result_url}`).catch((err) => {console.log(err)});
		}
		else {
			message.reply(`URL không hợp lệ`).catch((err) => {console.log(err)});
		}
	}
}
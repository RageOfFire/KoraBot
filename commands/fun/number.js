module.exports = {
    name: "number",
    category: "fun",
    description: 'Đưa ra 1 số ngẫu nhiên từ <min> - <max>',
    permissions: [],
    devOnly: false,
    run: async function({ client, message, prefix, args }) {
        console.log(args[0] + ' and ' + args[1])
        if (!args.length || (isNaN(args[0]) && isNaN(args[1]))) return message.reply('Bạn cần nhập số').catch((err) => {console.log(err)});
        if(parseInt(args[0]) > parseInt(args[1])) return message.reply('Số tối thiểu không thể lớn hơn số tối đa').catch((err) => {console.log(err)});
        else {
            message.reply(`Con số ngẫu nhiên của bạn là ${Math.floor(Math.random() * (args[1] - args[0]) + args[0])}`).catch((err) => {console.log(err)});
        }
    }
}
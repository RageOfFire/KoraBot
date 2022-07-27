const { Trivia } = require('discord-gamecord')

const run = async ({ client, interaction, prefix }) => {
  const difficulty = ["easy", "medium", "hard"];
  const random = Math.floor(Math.random() * difficulty.length);
  new Trivia({
    message: interaction,
    slash_command: true,
    embed: {
      title: 'Câu đố',
      description: 'Bạn có {time} giây để trả lời!',
      color: '#faa152',
    },
    difficulty: difficulty[random],
    winMessage: 'Đáp án đúng! Đó là **{answer}**',
    loseMessage: 'Đáp án sai! Câu trả lời đúng là **{answer}**',
    othersMessage: 'Bạn không có quyền sử dụng nút này!',
  }).startGame().catch((err) => {console.log(err)});
}

module.exports = {
  name: "trivia",
  category: "fun",
  description: 'Trả lời câu đố',
  permissions: [],
  devOnly: false, run
}
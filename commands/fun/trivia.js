const { Trivia } = require('discord-gamecord')
module.exports = {
  name: "trivia",
  category: "fun",
  description: 'Trả lời câu đố',
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const difficulty = ["easy", "medium", "hard"];
    const random = Math.floor(Math.random() * difficulty.length);
    new Trivia({
      message: message,
      slash_command: false,
      embed: {
        title: 'Câu đố',
        description: 'Bạn có {time} giây để trả lời!',
        color: '#faa152',
      },
      difficulty: difficulty[random],
      winMessage: 'Đáp án đúng! Đó là **{answer}**',
      loseMessage: 'Đáp án sai! Câu trả lời đúng là **{answer}**',
      othersMessage: 'Bạn không có quyền sử dụng nút này!',
    }).startGame();
  }
}
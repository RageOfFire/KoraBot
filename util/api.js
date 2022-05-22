const axios = require("axios");
module.exports = {
  GetItems: (id, message, author, client, situation) => axios({
    method: 'POST',
    url: 'https://waifu.p.rapidapi.com/path',
    params: {
      user_id: id,
      message: message,
      from_name: author,
      to_name: client,
      situation: situation,
      translate_from: 'vi',
      translate_to: 'vi'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Host': 'waifu.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.RAPIAPI
    },
    data: '{}'
  })
}

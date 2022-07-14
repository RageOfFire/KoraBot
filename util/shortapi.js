const axios = require("axios");
const encodedParams = new URLSearchParams();
module.exports = {
  createUrl: (url) => {
    encodedParams.append("url", url)
  },
  GetItems: () => axios(
    {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.RAPIAPI,
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      data: encodedParams,
  })
}

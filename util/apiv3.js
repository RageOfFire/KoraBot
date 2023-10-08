const axios = require("axios");
require("dotenv").config()

const res = axios.create({
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
});

module.exports = {
    GetPromts: (message, author) => res.post(process.env.API_URL, {
        "prompt": author + ": " + message,
        "temperature": 0.5,
        "top_p": 0.9
    })
}
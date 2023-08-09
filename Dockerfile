FROM node:18

# Create the bot's directory

RUN mkdir -p /usr/src/kora-bot

WORKDIR /usr/src/kora-bot



COPY package.json /usr/src/kora-bot

RUN npm install



COPY . /usr/src/kora-bot



# Start the bot.

CMD ["node", "index.js"]
module.exports = {
    name: "ready",
    run: async(bot) => {
        bot.client.user.setActivity("CrystalGem", {
            type: "PLAYING",
            url: "https://www.crystalgem.cf/"
        });
        console.log("logged as " + bot.client.user.tag)
    }
}
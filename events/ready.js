module.exports = {
    name: "ready",
    run: async(bot) => {
        const { client } = bot;
        
        bot.client.user.setActivity("CrystalGem", {
            type: "PLAYING",
            url: "https://www.crystalgem.cf/"
        });
        await client.application.commands.set([])
        await client.application.commands.set([...client.slashcommands.values()])
        console.log("logged as " + bot.client.user.tag)
    }
}
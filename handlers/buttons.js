const { getFiles } = require("../util/functions")

module.exports = (bot, reload) => {
    const { client } = bot
    let buttons = getFiles("./buttons/", ".js")

    if(buttons.length === 0)
        console.log("No button loaded")

        buttons.forEach((f, i) => {
            if (reload) delete require.cache[require.resolve(`../buttons/${f}`)]
            const btn = require(`../buttons/${f}`)
            client.buttons.set(btn.name, btn)
        })
}
module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const { client, prefix, owner } = bot

        // if (!message.guild) return
        if (message.author.bot) return
        if (message.content.includes("@here") || message.content.includes("@everyone")) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g)

        // chat command if send message not a command or is a direct message
        if (!message.content.startsWith(prefix) || message.channel.type == 'DM') {
            const chatCommand = client.commands.get('chat');
            try {
                await chatCommand.run({...bot, message, args })
            } catch (err) {
                let errMSG = err.toString()
                if (errMSG.startsWith("?")) {
                    errMSG = errMSG.slice(1)
                    await message.reply(errMSG).catch((err) => {console.log(err)});
                } else
                    console.error(err)
            }
        }
        
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)

        // If user send empty prefix
        if (message.content === prefix) {
            const helpCommand = client.commands.get('help');
            try {
                await helpCommand.run({ ...bot, message, args })
            } catch (err) {
                let errMSG = err.toString()
                if (errMSG.startsWith("?")) {
                    errMSG = errMSG.slice(1)
                    await message.reply(errMSG).catch((err) => {console.log(err)});
                } else
                    console.error(err)
            }
        }

        if (!command) return

        let member = message.member

        if (command.devOnly && !owner.includes(member.id)) {
            return message.reply("Lệnh này đang trong chế độ phát triển").catch((err) => {console.log(err)});
        }
        if (command.premissions && member.premissions.missing(command.premissions).length !== 0) {
            return message.reply("Bạn không có quyền thực hiện lệnh này").catch((err) => {console.log(err)});
        }
        try {
            await command.run({...bot, message, args })
        } catch (err) {
            let errMSG = err.toString()
            if (errMSG.startsWith("?")) {
                errMSG = errMSG.slice(1)
                await message.reply(errMSG).catch((err) => {console.log(err)});
            } else
                console.error(err)
        }
    }
}
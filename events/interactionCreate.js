module.exports = {
    name: "interactionCreate",
    run: async (bot, interaction) => {
        if(interaction.isCommand()) handleSlashCommand(bot, interaction)
    },
}

const handleSlashCommand = (bot, interaction) => {
    const { client, prefix, owner } = bot
    if(!interaction.inGuild()) return interaction.reply('this command can be used in server only')
    
    const slashcmd = client.slashcommands.get(interaction.commandName)
    if(!slashcmd) return interaction.reply("Invalid slash command")

    let member = interaction.member
    if (slashcmd.devOnly && !owner.includes(member.id)) {
        return interaction.reply("Lệnh này đang trong chế độ phát triển")
    }
    if(slashcmd.permissions && !interaction.member.permissions.has(slashcmd.permissions))
        return interaction.reply("You don't have permission")
    slashcmd.run({client, interaction, prefix});
}
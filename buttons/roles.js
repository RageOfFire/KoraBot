module.exports = {
    name: "role",
    run: async (bot, interaction, parameters) => {
        const roleId = parameters[0]
        if(!interaction.guild)
            return interaction.reply({content: "This command can only b used in a server", ephemeral: true})

            const role = await interaction.guild.roles.fetch(roleId)
            if(!role)
                return interaction.reply({content: "Role not found", ephemeral: true})

            const member = await interaction.guild.members.fetch(interaction.member.id)
            if(member.roles.cache.has(role.id)) {
                await member.roles.remove(role.id)
                return interaction.reply({content: `Remove role ${role.name} from u`, ephemeral: true})
            }
            else {
                await member.roles.add(role.id)
                return interaction.reply({content: `Added role ${role.name} to u`, ephemeral: true})
            }
    }
}
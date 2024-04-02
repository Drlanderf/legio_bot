module.exports = {
    data: {
        name: `pvp6`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1224682321459023952");
        await interaction.reply({
            content: `Vous avez reçu le rôle PvP logo peugeot`,
            ephemeral: true,
        });
    }
}
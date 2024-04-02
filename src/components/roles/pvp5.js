module.exports = {
    data: {
        name: `pvp5`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1224682239485280279");
        await interaction.reply({
            content: `Vous avez reçu le rôle PvP tomates`,
            ephemeral: true,
        });
    }
}
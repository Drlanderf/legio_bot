module.exports = {
    data: {
        name: `pvp1`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1218970358481162370");
        await interaction.reply({
            content: `Vous avez reçu le rôle PvP Cyro`,
            ephemeral: true,
        });
    }
}
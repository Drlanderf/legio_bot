module.exports = {
    data: {
        name: `pvp3`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1218970500542238851");
        await interaction.reply({
            content: `Vous avez reçu le rôle PvP BG`,
            ephemeral: true,
        });
    }
}
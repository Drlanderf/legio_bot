module.exports = {
    data: {
        name: `pvp2`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1218970442467901481");
        await interaction.reply({
            content: `Vous avez reçu le rôle PvP Cité`,
            ephemeral: true,
        });
    }
}
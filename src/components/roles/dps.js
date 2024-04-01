module.exports = {
    data: {
        name: `dps`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1219259947544739901");
        await interaction.reply({
            content: `Vous avez reçu le rôle de DPS`,
            ephemeral: true,
        });
    }
}
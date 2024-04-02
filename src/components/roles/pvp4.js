module.exports = {
    data: {
        name: `pvp1`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1224682386336387203");
        await interaction.reply({
            content: `Vous avez reçu le rôle PvP bananes`,
            ephemeral: true,
        });
    }
}
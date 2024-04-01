module.exports = {
    data: {
        name: `tank`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1219259869601861713");
        await interaction.reply({
            content: `Vous avez reçu le rôle de Tank`,
            ephemeral: true,
        });
    }
}
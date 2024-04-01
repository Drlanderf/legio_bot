module.exports = {
    data: {
        name: `heal`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1219259917051891714");
        await interaction.reply({
            content: `Vous avez reçu le rôle de Healer`,
            ephemeral: true,
        });
    }
}
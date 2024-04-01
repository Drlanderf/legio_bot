module.exports = {
    data: {
        name: `pve2`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1218970200137793546");
        await interaction.reply({
            content: `Vous avez reçu le rôle de Raid vet`,
            ephemeral: true,
        });
    }
}
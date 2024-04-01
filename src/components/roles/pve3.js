module.exports = {
    data: {
        name: `pve3`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1218970310439866529");
        await interaction.reply({
            content: `Vous avez reçu le rôle de Raid HM`,
            ephemeral: true,
        });
    }
}
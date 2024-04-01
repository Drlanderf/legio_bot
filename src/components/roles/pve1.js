module.exports = {
    data: {
        name: `pve1`
    },
    async execute(interaction,client){
        await interaction.member.roles.add("1218970270015033555");
        await interaction.reply({
            content: `Vous avez reçu le rôle de Raid normal`,
            ephemeral: true,
        });
    }
}
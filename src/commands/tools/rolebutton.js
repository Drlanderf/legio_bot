const {
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rolebutton")
    .setDescription("Return the role button panel"),
  async execute(interaction, client) {
    /**************************************************************************/
    //Setting up buttons

      /* ------------------------------------------------------------
    PvP
   ------------------------------------------------------------ */
    const buttonPvp1 = new ButtonBuilder()
      .setCustomId(`pvp1`)
      .setEmoji("Cryro")
      .setStyle(`Secondary`);
    const buttonPvp2 = new ButtonBuilder()
      .setCustomId(`pvp2`)
      .setEmoji("Cité")
      .setStyle(`Secondary`);
    const buttonPvp3 = new ButtonBuilder()
      .setCustomId(`pvp3`)
      .setEmoji("BG")
      .setStyle(`Secondary`);

      /* ------------------------------------------------------------
    PvE
   ------------------------------------------------------------ */
    const buttonPve1 = new ButtonBuilder()
      .setCustomId(`pve1`)
      .setEmoji("normal")
      .setStyle(`Secondary`);
    const buttonPve2 = new ButtonBuilder()
      .setCustomId(`pve2`)
      .setEmoji("vet")
      .setStyle(`Secondary`);
    const buttonPve3 = new ButtonBuilder()
      .setCustomId(`pve3`)
      .setEmoji("HM")
      .setStyle(`Secondary`);
      /* ------------------------------------------------------------
spécialité
------------------------------------------------------------ */
      const buttonSpe1 = new ButtonBuilder()
          .setCustomId(`tank`)
          .setEmoji("tank")
          .setStyle(`Secondary`);
      const buttonSpe2 = new ButtonBuilder()
          .setCustomId(`heal`)
          .setEmoji("heal")
          .setStyle(`Secondary`);
      const buttonSpe3 = new ButtonBuilder()
          .setCustomId(`dps`)
          .setEmoji("dps")
          .setStyle(`Secondary`);
    /**************************************************************************/
    //Setting up the rows
    const row1 = new ActionRowBuilder()
      .addComponents(buttonPvp1)
      .addComponents(buttonPvp2)
      .addComponents(buttonPvp3);
    const row2 = new ActionRowBuilder()
      .addComponents(buttonPve1)
      .addComponents(buttonPve2)
      .addComponents(buttonPve3);
      const row3 = new ActionRowBuilder()
          .addComponents(buttonSpe1)
          .addComponents(buttonSpe2)
          .addComponents(buttonSpe3);
    /**************************************************************************/
    //Setting up the custom embed !
    let embed = new EmbedBuilder()
      .setTitle(`Choix des rôles :`)
      .addFields([
        {
          name: `PvP`,
          value: `Choisis là où tu préfères faire du PvP, à savoir en Cyro, en cité ou en BG`,
          inline: true,
        },
        {
          name: `PvE`,
          value: `Choisis ce que tu préfères faire, à savoir, Raid normal plutôt casu, raid vet ou raid HM`,
          inline: true,
        },
        {
          name: `Spécialités`,
          value: `Choisis ta/tes spécialité(s), à savoir Tank, Heal ou DPS`,
          inline: true,
        },
      ])
      .setColor("DarkButNotBlack");
    /**************************************************************************/
    //Sending the message
    interaction.channel.send({
      components: [row1, row2],
      embeds: [embed],
    });
    interaction.reply({
      content: `The Notif button has been send !`,
      ephemeral: true,
    });
  },
};

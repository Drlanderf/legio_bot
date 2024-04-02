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
      .setEmoji("🐎")
      .setStyle(`Secondary`);
    const buttonPvp2 = new ButtonBuilder()
      .setCustomId(`pvp2`)
      .setEmoji("🥷")
      .setStyle(`Secondary`);
    const buttonPvp3 = new ButtonBuilder()
      .setCustomId(`pvp3`)
      .setEmoji("🤺")
      .setStyle(`Secondary`);
    const buttonPvp4 = new ButtonBuilder()
        .setCustomId(`pvp4`)
        .setEmoji("🟨")
        .setStyle(`Secondary`);
    const buttonPvp5 = new ButtonBuilder()
        .setCustomId(`pvp5`)
        .setEmoji("🟥")
        .setStyle(`Secondary`);
    const buttonPvp6 = new ButtonBuilder()
        .setCustomId(`pvp6`)
        .setEmoji("🟦")
        .setStyle(`Secondary`);

      /* ------------------------------------------------------------
    PvE
   ------------------------------------------------------------ */
    const buttonPve1 = new ButtonBuilder()
      .setCustomId(`pve1`)
      .setEmoji("1️⃣")
      .setStyle(`Secondary`);
    const buttonPve2 = new ButtonBuilder()
      .setCustomId(`pve2`)
      .setEmoji("2️⃣")
      .setStyle(`Secondary`);
    const buttonPve3 = new ButtonBuilder()
      .setCustomId(`pve3`)
      .setEmoji("3️⃣")
      .setStyle(`Secondary`);
      /* ------------------------------------------------------------
spécialité
------------------------------------------------------------ */
      const buttonSpe1 = new ButtonBuilder()
          .setCustomId(`tank`)
          .setEmoji("🛡️")
          .setStyle(`Secondary`);
      const buttonSpe2 = new ButtonBuilder()
          .setCustomId(`heal`)
          .setEmoji("🚑")
          .setStyle(`Secondary`);
      const buttonSpe3 = new ButtonBuilder()
          .setCustomId(`dps`)
          .setEmoji("⚔️")
          .setStyle(`Secondary`);
    /**************************************************************************/
    //Setting up the rows
    const row1 = new ActionRowBuilder()
      .addComponents(buttonPvp1)
      .addComponents(buttonPvp2)
      .addComponents(buttonPvp3);
    const row2 = new ActionRowBuilder()
        .addComponents(buttonPvp4)
        .addComponents(buttonPvp5)
        .addComponents(buttonPvp6);
    const row3 = new ActionRowBuilder()
      .addComponents(buttonPve1)
      .addComponents(buttonPve2)
      .addComponents(buttonPve3);
      const row4 = new ActionRowBuilder()
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
          value: `Choisis là où tu préfères faire du PvP,\n🐎 Cyro\n🥷 Cité\n🤺 BG`,
          inline: true,
        },{
          name: `Alliance`,
          value: `Sélectionne ta couleur d'Alliance,\n🟨 Bananes\n🟥 Tomates\n🟦 Peugeot`,
          inline: true,
        },
        {
          name: `PvE`,
          value: `Choisis ce que tu préfères faire, à savoir,\n1️⃣ Raid normal\n2️⃣ Raid vet\n3️⃣ Raid HM`,
          inline: true,
        },
        {
          name: `Spécialités`,
          value: `Choisis ta/tes spécialité(s), à savoir,\n🛡️ Tank\n🚑 Heal\n⚔️ DPS`,
          inline: true,
        },
      ])
      .setColor("DarkButNotBlack");
    /**************************************************************************/
    //Sending the message
    interaction.channel.send({
      components: [row1,row2,row3,row4],
      embeds: [embed],
    });
    interaction.reply({
      content: `The Notif button has been send !`,
      ephemeral: true,
    });
  },
};

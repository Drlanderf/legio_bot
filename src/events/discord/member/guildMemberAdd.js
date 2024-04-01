const Canvas = require("@napi-rs/canvas");
const { promises } = require("fs");
const { join } = require("path");
const {
  getCounterChannelName,
} = require("../../../functions/tools/getCounterChannelName");
const {
  GuildMember,
  Client,
} = require("discord.js");
const Guild = require(`../../../schemas/guild`);
module.exports = {
  name: "guildMemberAdd",
  /**
   * @param {GuildMember} member
   * @param {Client} client
   */
  async execute(member, client) {
    /* ------------------------------------------------------------
		Sync to DB
	   ------------------------------------------------------------ */
    let guildProfile = await Guild.findOne({
      guildId: member.guild.id,
    });
    /* ------------------------------------------------------------
		Variables
	   ------------------------------------------------------------ */
    const MyWelcomeChannelID = guildProfile.guildJoinChannel;
    const MyRoleID00 = guildProfile.roleId00;
    const MyRoleID01 = guildProfile.roleId01;
    const MyRoleID02 = guildProfile.roleId02;
    try {
      /* ------------------------------------------------------------
              Add the role to the new member
              ID :	member,
              DATA use : MyRoleID00, MyRoleID01, MyRoleID02.
         ------------------------------------------------------------ */
      await member.roles.add([
        `${MyRoleID00}`,
        `${MyRoleID01}`,
        `${MyRoleID02}`,
      ]);
    } catch (error) {
      console.log(error);
    }
  },
};

const { ActivityType } = require("discord.js");

/**
 * @type {{type: ActivityType; text: string; status: string}[]}
 */
const activities = [
  //
  {
    type: 3,
    text: "Disponnble pour raid",
    status: "online",
  },
  {
    type: 2,
    text: "commands",
    status: "idle",
  },
  {
    type: 0,
    text: "Occupé à faire raid",
    status: "dnd",
  },
];
async function pickPresence(client) {
  const choice = activities[Math.trunc(Math.random() * activities.length)];
  await client.user.setPresence({
    activities: [
      {
        name: choice.text,
        type: choice.type,
      },
    ],
    status: choice.status,
  });
}
module.exports = { pickPresence };


require("dotenv").config();
const { Client, GatewayIntentBits  } = require("discord.js");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences
	]
});

client.once("ready", () => {
	console.log("Ghost is online.");
});

client.on("messageCreate", message => {
	if (message.content === '>listGMs') {
        let roleID = '353002125342801924';
        let membersWithRole = message.guild.roles.cache.get(roleID).members;
        message.reply(`Got ${membersWithRole.size} members with that role.`);
        console.log(membersWithRole);
	}
});

client.login(process.env.CLIENT_TOKEN);
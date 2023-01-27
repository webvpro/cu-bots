
require("dotenv").config();
const { Client, GatewayIntentBits, AttachmentBuilder   } = require("discord.js");
const roleID = process.env.ROLE_ID;
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences
	]
});

client.once("ready", () => {
	console.log("CU Bot is online.");
});

client.on("messageCreate", message => {
	if (message.content === '>listGiveawayEntries') {
        //let roleID = '1065333204707455026';
        let membersWithRole = message.guild.roles.cache.get(roleID).members.map(m=>m.user.tag);
        //create file 
        let attachFile = new AttachmentBuilder(Buffer.from(membersWithRole.join('\r\n')), { name: 'listMembers.txt' })
        message.reply(`working on it. ${membersWithRole.length} members written to file, I will post attachment`);
        message.channel.send({
            content: "ok here you go I did it",
            files: [attachFile]
        });
    }
});

client.login(process.env.CLIENT_TOKEN);
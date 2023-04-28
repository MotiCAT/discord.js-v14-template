const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});
require('dotenv').config()
client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
});
client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;
    if (message.content === '!ping') {
        message.channel.send('Pong!')
    }
});
client.login(process.env.DISCORD_TOKEN);

const { Client, GatewayIntentBits, Events } = require('discord.js'); // discord.jsを使うことを宣言します。
const client = new Client({
    intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] 
});  // Botが監視できるものを指定します。この場合だとメッセージ内容、サーバー情報、サーバー内メッセージを読み取ることが出来ます。
require('dotenv').config() // dotenvを使うことを宣言します。
client.on(Events.ClientReady, async () => { // Botがログインしたときに発生するイベントです。
    console.log(`Logged in as ${client.user.tag}`); // ○○としてログインした旨のログをコンソールに送信します。
});
client.on(Events.MessageCreate, async message => { // メッセージが送信されたときに発生するイベントです。
    if (message.author.bot) return; // メッセージがBotだったら処理を終了する。
    if (message.content === '!ping') { // もしメッセージが !ping だったら
        message.channel.send('Pong!'); // Pong! と応答する
    }
    if (message.content.match(/こんにちは/) { // 送信されたメッセージの中に こんにちは が含まれていたら
        message.channel.send('こんにちは！'); // こんにちは！ と応答する
    }
});
client.login(process.env.DISCORD_TOKEN); //.envファイルの DISCORD_TOKEN を読み取りログインします。

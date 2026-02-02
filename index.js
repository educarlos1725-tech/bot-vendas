require('dotenv').config();
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
app.get('/', (req, res) => res.send('Bot online'));
app.listen(3000, () => console.log('Web ok'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log('Discord bot online');
});

client.login(process.env.TOKEN);

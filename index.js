const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: 8 });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

//reply to command
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('je vais te goumer batard');
	} else if (commandName === 'combat') {
		await interaction.reply('22h gare du nord viens seul');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'members') {
		await interaction.reply(`there is currently: ${interaction.guild.name} people in this server\n`);
	} else if (commandName === 'available') {
		await interaction.reply(`${interaction.guild.available}`);
	}
});

// Login to Discord with your client's token
client.login(token);
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');


const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('vas-y ose me ping fdp'),
	new SlashCommandBuilder().setName('combat').setDescription('VAS Y OSE SEULEMENT'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('members').setDescription('répond avec le nombre de membres!'),
	new SlashCommandBuilder().setName('available').setDescription('checks server availability'),
]
	.map(command => command.toJSON());
	
const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);


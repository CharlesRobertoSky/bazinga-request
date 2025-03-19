require('dotenv').config();
const {
  Events,
  Client,
  GatewayIntentBits,
  Partials,
  Collection
} = require('discord.js');

const { loadCommands } = require('./bot/Handlers/commandHandler');
const { loadEvents } = require('./bot/Handlers/eventHandler');

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)]
});

client.commands = new Collection();

if (!process.env.DISCORD_TOKEN) throw new Error('DISCORD_TOKEN is required!');

client.config = process.env.DISCORD_TOKEN;

client.login(client.config.DISCORD_TOKEN).then(() => {
  loadCommands(client);
  loadEvents(client);
});

// client.on(Events.InteractionCreate, async interaction => {
// 	if (!interaction.isChatInputCommand()) return;

// 	const command = interaction.client.commands.get(interaction.commandName);

// 	if (!command) {
// 		console.error(`No command matching ${interaction.commandName} was found.`);
// 		return;
// 	}

// 	try {
// 		await command.execute(interaction);
// 	} catch (error) {
// 		console.error(error);
// 		if (interaction.replied || interaction.deferred) {
// 			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
// 		} else {
// 			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
// 		}
// 	}
// });
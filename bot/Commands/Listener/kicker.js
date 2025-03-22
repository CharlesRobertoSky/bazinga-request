const {SlashCommandBuilder} = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('kicker')
		.setDescription('Ativa o reino das sombras'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
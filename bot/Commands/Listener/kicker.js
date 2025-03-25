const {SlashCommandBuilder} = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('kicker')
		.setDescription('Ativa o reino das sombras'),
	async execute(interaction) {

		if (interaction.user.id !== '1211855926731079733') {
			await interaction.reply('hello world')
		};
		await interaction.reply('Tu de novo meu amigo')
		
		state = 0
		console.log(interaction)
		
		setInterval(() => {
			console.log('kicker')

		}, 60000);
	},
};
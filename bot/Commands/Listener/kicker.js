const fs = require('fs');
const {SlashCommandBuilder, } = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('kicker')
		.setDescription('Envia alguem para o reino das sombras')
		.addStringOption(option => 
			option.setName('input')
			.setDescription("Adicione o cargo")),

	async execute(interaction) {
		if (interaction.user.id !== '343464455109083141') {
			return await interaction.reply('hello world')
		};
		console.log('option',option)
		let role = ''
		let text = `{"role":"${role}"}`;
		console.log('text role',text)
		if (!text.role){
			const data = fs.readFileSync('./bot/json/options.json', 'utf8');
			text = JSON.parse(data);
		}
		fs.writeFileSync('./bot/json/options.json', JSON.stringify(text, null, 2));

		



		
		await interaction.reply('Tu de novo meu amigo')
		
		state = 0
		try{
			setInterval(() => {
				const member = interaction.options.getMember('343464455109083141');
				if (member.roles.cache.some(role => role.name === text.role )) {
					console.log('usuario logado')
				}
	
			}, 10000);
		}catch(e){
			console.log(e)
		}
		
	},
};
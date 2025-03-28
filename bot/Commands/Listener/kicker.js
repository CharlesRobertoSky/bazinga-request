const fs = require('fs');
const {SlashCommandBuilder, } = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('kicker')
		.setDescription('Envia alguem para o reino das sombras')
		.addStringOption(option => 
			option.setName('cargo')
			.setDescription("Adicione o cargo")),

	async execute(interaction) {
		if (interaction.user.id !== '343464455109083141') {
			
			return await interaction.reply('hello world')
		};
		
		const role = interaction.options.getString('cargo') || 'DROGA É O PROGRAMAS'
		
		if (!text.role){
			const jsonData = new JsonHandler('./bot/json/options.json', role)
			let role = jsonData.read()
			if (role["role"] == ''){
				await interaction.reply('Nenhum cargo adicionado, por favor tente novamente com o cargo desejado.')
			}
		}
		
		await interaction.reply('Tu de novo meu amigo')
		
		if (interaction.member.roles.cache.some(role => role.name === role )){
			console.log('ON')
		}


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



class JsonHandler {
	constructor(local='./', data=""){
		this.local = local;
		this.data = data;
	}
	
	read(){
		const data = fs.readFileSync(this.local, 'utf8');
		return JSON.parse(data);
	}

	save(data){
		const jsonData = {
			"role": `${this.data}`
		}
		return fs.writeFileSync(this.local, JSON.stringify(jsonData, null, 2));
	}
	
}
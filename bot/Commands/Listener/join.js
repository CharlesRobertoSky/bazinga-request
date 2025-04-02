const fs = require('fs');
const JsonHandler = require('../../Component/JsonHandler')
const { getVoiceConnections, joinVoiceChannel, VoiceConnectionStatus, entersState} = require('@discordjs/voice');
const {SlashCommandBuilder, ChannelType, MessageFlags, GuildVoice} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Envia alguem para o reino das sombras')
		.addChannelOption((option) => 
			option
      .setName('canal')
			.setDescription("Canal de voz para logar")
      .setRequired(true)
      .addChannelTypes(ChannelType.GuildVoice)
    ),
			

	async execute(interaction) {
		if (interaction.user.id !== '343464455109083141') {
			return await interaction.reply('hello world')
		};
		const jsonData = new JsonHandler('./bot/json/options.json')

		
		
		return await interaction.reply({ content: 'Vou fazer a boa', flags: MessageFlags.Ephemeral })
	
		// try{
		// 	setInterval(() => {
				


		// 	}, 10000);
		// }catch(e){
		// 	console.log(e)
		// }
		
	},
};




const fs = require('fs');
const JsonHandler = require('../../Component/JsonHandler')
const { getVoiceConnections, joinVoiceChannel, } = require('@discordjs/voice');
const {SlashCommandBuilder, ChannelType, MessageFlags} = require('discord.js');
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

		
		
		await interaction.reply({ content: 'Vou fazer a boa', flags: MessageFlags.Ephemeral })

		const voiceChannel = interaction.options.getChannel('channel')
		console.log('channel' + voiceChannel)
		const voiceConnection = joinVoiceChannel()
			joinVoiceChannel({
				channelId: '1294806620416507945',
				guildId : interaction.guildId,
				adapterCreator: interaction.guild.voiceAdapterCreator
			});

			await voiceConnection()
			
		
		

		// try{
		// 	setInterval(() => {
				


		// 	}, 10000);
		// }catch(e){
		// 	console.log(e)
		// }
		
	},
};




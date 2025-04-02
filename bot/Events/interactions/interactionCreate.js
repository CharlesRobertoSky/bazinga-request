const {JsonHandler} = require('../../Component/JsonHandler')
const {joinVoiceChannel, VoiceConnectionDisconnectReason} = require('@discordjs/voice');
const {MessageFlags} = require('discord.js')

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    

    if (!interaction.isChatInputCommand()) return;

	  const command = interaction.client.commands.get(interaction.commandName);

	  if (!command) {
		  console.error(`No command matching ${interaction.commandName} was found.`);
		  return;
	  }
		
		if(interaction.commandName === 'join'){
			const voiceChannel = interaction.options.getChannel('canal')

		const voiceConnection = joinVoiceChannel({
				channelId: voiceChannel.id,
				guildId : interaction.guildId,
				adapterCreator: interaction.guild.voiceAdapterCreator,
			})
			if(interaction.commandName === 'disconnect'){
				voiceConnection.disconnect()
			}
			client.channels.fetch(voiceConnection.id)
  			.then(channel => console.log(channel.name))
  			.catch(console.error);
		// 	try{
		// 	setInterval(() => {
				


		// 	}, 10000);
		// 	}catch(e){
		// 		console.log(e)
		// }
		}
		

		

	  try {
		  await command.execute(interaction);
	  } catch (error) {
		  console.error(error);
		  if (interaction.replied || interaction.deferred) {
			  await interaction.followUp({ content: 'Aconteceu algum erro enquanto executava o comando', flags: MessageFlags.Ephemeral });
		  } else {
			  await interaction.reply({ content: 'Aconteceu algum erro enquanto executava o comando', flags: MessageFlags.Ephemeral });
		}
	}
  }
};

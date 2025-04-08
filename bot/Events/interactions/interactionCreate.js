const {JsonHandler} = require('../../Component/JsonHandler')
const {joinVoiceChannel} = require('@discordjs/voice');
const {MessageFlags} = require('discord.js')
const {
  setInterval,
} = require('node:timers/promises');
module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;
	  const command = interaction.client.commands.get(interaction.commandName);
	  if (!command) {
		  console.error(`No command matching ${interaction.commandName} was found.`);
		  return;
	  }
		console.log(interaction.commandName)
		if(interaction.commandName === 'join'){
			const reinoDasSombras = '1294854660980605029' //Define o id do canal de voz para enviar o usuario
			
			const voiceChannel = interaction.options.getChannel('canal')
			const voiceConnection = joinVoiceChannel({
				channelId: voiceChannel.id,
				guildId : interaction.guildId,
				adapterCreator: interaction.guild.voiceAdapterCreator,
			})

			const canalVoz = interaction.guild.channels.cache.get("1294806537549643836");
			const interval = 1000; //define o intervalo do loop

				try{
					(async function() {
						for await (const startTime of setInterval(interval, Date.now())) {
							let cargoDasSombras = JsonHandler()
							const now = Date.now();
							console.log('Datetime'+ now);
							// if ((now - startTime) > 100000)
							// 	break
							const membros = canalVoz.members.map(membro => {
								if (membro.roles.cache.has('1312556729208275035') ) {
									membro.voice.setChannel('1304914518618673182')
								}
							});
    
						if (membros.length === 0) {
							console.log('Não há membros no canal de voz.');
							break
						}
						}
						console.log(Date.now());
					})();
					;
						}catch(e){
								console.log(e)
						}		
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

// const {JsonHandler} = require('../../Component/JsonHandler')
// const {joinVoiceChannel, getVoiceConnections, getVoiceConnection} = require('@discordjs/voice');
// const {MessageFlags} = require('discord.js')
// const {
//   setInterval,
// } = require('node:timers/promises');
// const interval = 1000;

// module.exports = {
//   name: 'interactionCreate',
//   async execute(interaction) {
    

//     if (!interaction.isChatInputCommand()) return;

// 	  const command = interaction.client.commands.get(interaction.commandName);

// 	  if (!command) {
// 		  console.error(`No command matching ${interaction.commandName} was found.`);
// 		  return;
// 	  }


// 		console.log(interaction.commandName)
// 		if(interaction.commandName === 'join'){
// 			const reinoDasSombras = '1294854660980605029'
// 			const idDoCargo = '1312556729208275035' //Define o id do canal de voz para enviar o usuario
// 			const voiceChannel = interaction.options.getChannel('canal')
// 			const voiceChannelId = voiceChannel.id

// 			const voiceConnection = joinVoiceChannel({
// 				channelId: voiceChannel.id,
// 				guildId : interaction.guildId,
// 				adapterCreator: interaction.guild.voiceAdapterCreator,
// 			})

// 			const canalVoz = interaction.guild.channels.cache.get(voiceChannelId);
    
// 				try{
// 					(async function() {
// 						for await (const startTime of setInterval(interval, Date.now())) {
// 							const now = Date.now();
// 							console.log('Time Now '+now);
// 							// if ((now - startTime) > 100000)
// 							// 	break;

// 							const membros = canalVoz.members.map(membro => {
// 								if (membro.roles.cache.has("1312556729208275035") ) {
// 									membro.voice.setChannel("1294854660980605029")
// 								}
// 							});
    
// 						if (membros.length === 0) {
// 							console.log('Não há membros no canal de voz.');
// 							break
// 						}}
// 						console.log(Date.now());
// 					})();
// 						}catch(e){
// 								console.log(e)
// 						}
// 		}

		

// 	  try {
// 		  await command.execute(interaction);
// 	  } catch (error) {
// 		  console.error(error);
// 		  if (interaction.replied || interaction.deferred) {
// 			  await interaction.followUp({ content: 'Aconteceu algum erro enquanto executava o comando', flags: MessageFlags.Ephemeral });
// 		  } else {
// 			  await interaction.reply({ content: 'Aconteceu algum erro enquanto executava o comando', flags: MessageFlags.Ephemeral });
// 		}
// 	}
//   }
// };


// async function getCurrentChannelMembers(channel){
//   const fetchedChannel = await channel.fetch(true)
//   const members = fetchedChannel.members;
//   console.log('Members: ', members)
// }
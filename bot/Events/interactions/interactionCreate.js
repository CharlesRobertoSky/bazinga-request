const {JsonHandler} = require('../../Component/JsonHandler')
const {joinVoiceChannel, getVoiceConnections, getVoiceConnection} = require('@discordjs/voice');
const {MessageFlags} = require('discord.js')

require('dotenv').config();
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  BaseManager
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    
  ],
  
  partials: [Object.keys(Partials)]
});

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
			const reinoDasSombras = '1294963537256386580'
			
			const voiceChannel = interaction.options.getChannel('canal')

			const voiceConnection = joinVoiceChannel({
				channelId: voiceChannel.id,
				guildId : interaction.guildId,
				adapterCreator: interaction.guild.voiceAdapterCreator,
			})
			

			const canalVoz = interaction.guild.channels.cache.get(voiceChannel.id);
    
        const membros = canalVoz.members.map(membro => membro.user.roles.id);
    
        if (membros.length === 0) {
          return console.log('Não há membros no canal de voz.');
        }
    
        console.log(`Membros no canal de voz ${canalVoz.name}: \n${membros.join('\n')}`);
			
				// if(idUsuairo ter o cargo === 'REINO DAS SOMBRAS'){

				// }
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


async function getCurrentChannelMembers(channel){
  const fetchedChannel = await channel.fetch(true)
  const members = fetchedChannel.members;
  console.log('Members: ', members)
}
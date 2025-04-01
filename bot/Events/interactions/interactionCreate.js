const {JsonHandler} = require('../../Component/JsonHandler')
const { getVoiceConnections, joinVoiceChannel, } = require('@discordjs/voice');
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
		}

		if(interaction.commandName === 'kicker'){

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

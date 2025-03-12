const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');



client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.commands = new Collection();


const client = new Client(
	{intents:[GatewayIntentBits.Guilds]},
);

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('Online');
});

// client.on('interactionCreate', interaction => { 
// 	const role =  interaction.options.getRole('diamond');
// 	const member = interaction.options.getMember(client.guilds.cache.get('343464455109083141'));
// 	member.roles.add(role);
// });

client.on(Events.InteractionCreate, interaction => {
	console.log(interaction)
	// if (messageCreate.author.bot) return;
	// if(messageCreate.channel.type ==="DM") return;

	// const args = messageCreate.content.slice(config.prefix.length).trim().split(/ +/g);
	// const command = args.shift().toLocaleLowerCase();
	
	// if (command === 'ping'){
	// 	const m = await messageCreate.channel.send('Ping?');
	// 	m.edit('Pong')
	// }

			
	// if(command === 'k'){
	// 	if(messageCreate.author.id == '343464455109083141'){
	// 		console.log('Chamada de sky')
	// 		try{
	// 		messageCreate.member.roles.add('984859244803260517')
	// 		console.log(`adicionado cargo ao ${messageCreate.author.username}`)
	// 		}catch{
	// 			console.log('Não foi possivel adicionar cargo')
	// 		}
	// 	};
	// 	await messageCreate.channel.send('Comando inválido.')
	// 	console.log(messageCreate.author)
	// }

	// if(command === 'break' && messageCreate.author.id == '343464455109083141'){
	// 	console.log('Forçando quebra de código por comando em Discord')
	// 	await messageCreate.channel.send('Encerrando processos do bot...')
	// 	process.exit('/main.js')
	// }

	
	// if (command === 'teste'){
	// 	console.log(messageCreate)
	// }
	// if (command === 'info'){
	// 	console.log('Message')
	// 	console.log(messageCreate)
	// 	console.log('member')
	// 	console.log(messageCreate.author)
	// 	console.log(member.roles)
	// }

});



// Log in to Discord with your client's token
client.login(token);
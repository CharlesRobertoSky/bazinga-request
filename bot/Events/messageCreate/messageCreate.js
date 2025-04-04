
module.exports = {
  name: 'messageCreate',
  async execute(message) {
    
      
      if (message.content.startsWith('!membros')) {
        const args = message.content.split(' ');
        const canalVozId = args[1];
    
        if (!canalVozId) {
          return message.channel.send('Uso correto: !membros <canal_voz_id>');
        }
    
        const canalVoz = message.guild.channels.cache.get(canalVozId);
    
       
    
        const membros = canalVoz.members.map(membro => membro.user.id);
    
        if (membros.length === 0) {
          return console.log('Não há membros no canal de voz.');
        }
    
        console.log(`Membros no canal de voz ${canalVoz.name}: \n${membros.join('\n')}`);
      
    }
  }
};


async function getCurrentChannelMembers(channel){
  const fetchedChannel = await channel.fetch(true)
  const members = fetchedChannel.members;
  console.log('Members: ', members)
}
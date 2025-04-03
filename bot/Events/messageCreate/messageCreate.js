
module.exports = {
  name: 'messageCreate',
  async execute(messagesHandler) {
    if(messagesHandler.author.bot) return;
    console.log('msg received: '+messagesHandler.content)
    if(messagesHandler.content.startsWith(';')) {
      const msgArr = messagesHandler.content.split(' '); 
    }
  }
};


function loadEvents(client) {
  const ascii = require('ascii-table');
  const table = new ascii().setHeading('Events', 'Status');
  const fs = require('node:fs');
  const path = require('node:path');

  // const folders = fs.readdirSync('./bot/Events');

  // for (const folder of folders) {
  //   const files = fs
  //     .readdirSync(`./bot/Events/${folder}`)
  //     .filter(file => file.endsWith('.js'));

  //   for (const file of files) {
  //     const event = require(`../Events/${folder}/${file}`);
  //     if (event.rest) {
  //       if (event.once)
  //         client.rest.once(event.name, (...args) =>
  //           event.execute(...args, client)
  //         );
  //       else
  //         client.rest.on(event.name, (...args) =>
  //           event.execute(...args, client)
  //         );
  //     } else {
  //       if (event.once)
  //         client.once(event.name, (...args) => event.execute(...args, client));
  //     }
  //     table.addRow(file, 'loaded');
  //     continue;
  //   }
  // }
  const eventsPath = path.join(__dirname, './bot/Events');
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

  for (const file of eventFiles) {
    console.log(eventFiles)
	  const filePath = path.join(eventsPath, file);
	  const event = require(filePath);
	  if (event.once) {
	  	client.once(event.name, (...args) => event.execute(...args));

	  } else {
	  	client.on(event.name, (...args) => event.execute(...args));
    
	  }
    table.addRow(eventFiles, 'loaded');
    
  }
  return console.log(table.toString(), '\n Loaded events');
}
module.exports = { loadEvents };

function loadEvents(client) {
  const ascii = require('ascii-table');
  const table = new ascii().setHeading('Events', 'Status');
  const fs = require('node:fs');

  const folders = fs.readdirSync('./bot/Events');

  for (const folder of folders) {
    const files = fs
    .readdirSync(`./bot/Events/${folder}`)
    .filter(file => file.endsWith('.js'));
    console.log(files)

    for (const file of files) {
      const event = require(`../Events/${folder}/${file}`);
      if (event.rest) {
        if (event.once)
          client.rest.once(event.name, (...args) =>
            event.execute(...args, client)
          );
        else
          console.log(client.rest)
          client.rest.on(event.name, (...args) =>
            event.execute(...args, client)
          );
      } else {
        
      }
      table.addRow(file, 'loaded');
      continue;
    }
  }
  return console.log(table.toString(), '\n Loaded events');
}
module.exports = { loadEvents };

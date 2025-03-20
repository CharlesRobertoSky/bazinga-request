require('dotenv').config();
const { REST, Collection, Routes } = require('discord.js');
const fs = require('node:fs');

const ArraySlashs = [];
const CollectionSlashs = new Collection();

async function loadSlashCommands(path) {

  for (const file of fs.readdirSync(path)) {
    console.log(fs.lstatSync(`${path}/${file}`).isDirectory())
    if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
      loadSlashCommands(`${path}/${file}`);
    } else {
      console.log(file.endsWith('.js'), 'WHERE')
      if (file.endsWith('.js')) {
        const cmd = await import(`../../../${path}/${file}`);
        console.log(cmd)
        if (cmd.data && cmd.execute) {
          ArraySlashs.push(cmd.data);
          CollectionSlashs.set(cmd.data.name, cmd.execute);
        }
      }
    }
  }
}

loadSlashCommands('./bot/Commands/');

const rest = new REST({ version: '10' }).setToken("MTM0NjI4MDkxMTA4MzI3NDI5MA.GQKbut.lTPrn-BZ7h_jDemvwUA-cD20l-zkRkrFAAikmk");

async function RegistrySlash(ID) {
  try {
    const commands = await rest.put(Routes.applicationCommands(ID), {
      body: ArraySlashs
    });
    console.log(
      `Comandos do aplicativo ${commands.length} (/) carregados com sucesso.`
    );
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    RegistrySlash(client.guilds.cache.size);
  }
};

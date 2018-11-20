const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Delta Discord,Twitch Status Active.!`);
  client.user.setPresence({
status: 'online',
game: {
  name: 'Before Die',
  type: 'STREAMING',
  url: 'https://www.twitch.tv/natobilisim'
}
  });
});

client.login('NDY0ODQ0ODY4OTg1MDI4NjE4.DqPk_w.b1tRLJxw0nhk6sixDpKDKiscRqw');
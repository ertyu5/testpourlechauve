
const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
const prefix = '>';

client.on('ready', () => {
  console.log('Je suis réveiller!');
  client.user.setActivity("Natthh est grand");
});

client.on('message', message => {
  if (!message.guild) return;
});


client.on("message", message => {

if (message.content.includes("Natthh le grand roi")) {
if(message.author.bot) return;
client.channels.get('345327498592256000').send(`Oui, Natthh est un très grand roi !`)
}

});

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('442332780106612778').send('**' + member.user.username + ' , a rejoind le serveur !**');
    let role = message.guild.roles.get("330100338042470404");
    member.addRole(role)
});
client.login(token);

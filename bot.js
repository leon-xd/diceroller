require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if(msg.content.toLowerCase === 'praise pelor!') {
        msg.reply('Praise Pelor!');
    }
    
    if(msg.content.toLowerCase === 'is ginsy a dum dum?') {
        msg.reply('yes he is');
    }

//    if(msg.content.includes('roll')){
//    }
})


client.login(process.env.DISCORD_TOKEN);

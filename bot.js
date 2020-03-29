require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
    if(msg.content.toLowerCase() === 'praise pelor!') {
        msg.reply('Praise Pelor!');
    }
    
    if(msg.content.toLowerCase() === 'is ginsy a dum dum?') {
        msg.reply('yes he is');
    }

    if(msg.content.includes("8 ball")){
        if(msg.author.username === 'Gansy') {
            msg.reply('shut up ginsy');
        }
        else{
            msg.reply(get8BallReply());
        }
    }

    if(msg.content.includes("roll d")){
        integer = msg.content.match(/\d+/);
        reply = rollDice(integer);
        if(Number(reply) ==  Number(integer)){
            reply = reply + "! Praise Pelor!";
        }
        if(Number(integer) != 1 && Number(reply) == 1){
            reply = reply + " ha u suck";
        }
        msg.reply(reply);

    }
});


client.login(process.env.DISCORD_TOKEN);


function get8BallReply(){
    rand = Math.floor(Math.random() * 6);
    reply = "";
    switch(rand){
        case 0:
            reply = "no";
            break;
        case 1:
            reply = "shut up";
            break;
        case 2:
            reply = "without a doubt, my friend";
            break;
        case 3:
            reply = "you really had to bother me with this question";
            break;
        case 4:
            reply = "yes";
            break;
        case 5:
            reply = "how should I know??";
            break;
    }
    return reply;
};

function rollDice(integer){
    return Math.floor(Math.random() * integer) + 1;
};

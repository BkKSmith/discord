/*
    This is my test bot for all my beginning test code for discord bots. This is mainly being
    used for testing the discord bot to be created for OU discord bots. This is to be split
    into more than one discord bot to limit the people able to use the commands. Also
    restricts the rights needed by each bot. This may mean more bots will need to be
    running, but it will make the server more secure based on the idea that each bot will
    have a limited amount of rights.

*/
const botSettings = require("./botSettings.json");
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const prefix = botSettings.prefix;
var elliotCounter = 0;
var tigerCounter = 0;
var fountainCounter = 0;
var domeCounter = 0;
var lakeCounter = 0;


// () => {} is short hand for function(args){}. Even when typing function it shows this as an option
bot.on("ready", async () => {
    console.log(`This bot is now running: ${bot.user.username}`);

});

//Event listener for new guild members
bot.on('guildMemberAdd', member =>{
    //send message to the guilds default channel (usually #general), metioning the member
    member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);

    /*If you want to send the message to a designated channel on a server instead do the following:
    let channel = member.guild.channels.find("name", "member-log");
    //Do nothing of the channel wasnt found on this server
    if(!channel) return;
    channel.send(`Welcome to the server, ${member}`);
*/
});

bot.on("message", async message =>{

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This is the user's info!")
        .setColor("#3393FF")
        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ROLE", message.author.role)
        .addField("Created At", message.author.createdAt);
    
        message.author.send({embed});
    return;

//        bot.guilds.get("id");
//        bot.guilds.find("name", )
    }

//Get the amount of people that are each place ex. raid.
//Raid at Elliot Tower at OU
    if(command === `${prefix}Elliot`) {
       
            elliotCounter = elliotCounter + 1;
            return;
        }

    if(command === `${prefix}ElliotReset`){
            elliotCounter = 0;
            return;
    }
    if(command === `${prefix}ElliotCount`){
            message.author.send("The Elliot Tower Gym Has: " + elliotCounter.toString())
            return;
    }
//Raid at Tiger Statue
    if(command === `${prefix}Tiger`) {
        
             tigerCounter = tigerCounter + 1;
             return;
         }
 
     if(command === `${prefix}TigerReset`){
             tigerCounter = 0;
             return;
     }
     if(command === `${prefix}TigerCount`){
             message.author.send("Tiger Gym has: " + tigerCounter.toString())
             return;
     }
    
//Raid at Fountain
    if(command === `${prefix}Fountain`) {
        
             fountainCounter = fountainCounter + 1;
             return;
         }
 
     if(command === `${prefix}FountainReset`){
             fountainCounter = 0;
             return;
     }
     if(command === `${prefix}FountainCount`){
             message.author.send("Fountain Gym has: " + fountainCounter.toString())
             return;
     }
     
//Raid at dome
    if(command === `${prefix}Dome`) {
        
             domeCounter = domeCounter + 1;
             return;
         }
 
     if(command === `${prefix}DomeReset`){
             domeCounter = 0;
             return;
     }
     if(command === `${prefix}DomeCount`){
             message.author.send("Dome Gym has: " + domeCounter.toString())
             return;
     }

//Raid at Bear Lake
     if(command === `${prefix}BearLake`) {
        
             lakeCounter = lakeCounter + 1;
             return;
         }
 
     if(command === `${prefix}BearLakeReset`){
             lakeCounter = 0;
             return;
     }
     if(command === `${prefix}BearLakeCount`){
             message.author.send("Bear Gym has: " + lakeCounter.toString())
             return;
     }
});
bot.login(botSettings.token); 


//client.on('message');
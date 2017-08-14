const botSettings = require("./botsettings.json");
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


bot.on("message", async message =>{
    
        if(message.author.bot) return;
        if(message.channel.type == "dm") return;
        
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
    
        if(!command.startsWith(prefix)) return;

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

    if(command === `${prefix}ElliotDropped`) {
        
             elliotCounter = elliotCounter - 1;
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

     if(command === `${prefix}TigerDropped`) {
        
             tigerCounter = tigerCounter - 1;
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
     
     if(command === `${prefix}FountainDropped`) {
        
             fountainCounter = fountainCounter - 1;
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

     if(command === `${prefix}DomeDropped`) {
        
             domeCounter = domeCounter - 1;
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

     if(command === `${prefix}BearLakeDropped`) {
        
             lakeCounter = lakeCounter - 1;
             return;
         }
 
});
bot.login(botSettings.token); 


//client.on('message');
const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')

client.on("ready" , () => {
  console.log("I am ready!");
});

var prefix = "!";
client.on("message", (message) => {
  if (message.author === client.user) return; //if the bot is saying a message that can trigger itself
  if (message.content.startsWith(prefix + "ping!")) {
    message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``); //prints difference between the time now and the time the message was created
  } else

  if (message.content.toLowerCase().includes("good grief")) {
    message.channel.send("Yare yare daze...");
  }
});
client.login(settings.token);

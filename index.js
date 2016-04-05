var Discord = require("discord.js");
var secrets = require("./secrets");

var mybot = new Discord.Client();

mybot.on("message", function(message){
    if(message.content === "ping")
        mybot.reply(message, "pong");
});

mybot.login(secrets.email, secrets.password);


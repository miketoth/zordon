var Discord = require("discord.js");
var secrets = require("./secrets");

var mybot = new Discord.Client();

// Utility function to find the bot among list of users
// bot name should be specified in secrets file
function findZordon(users) {
  return users.filter(function(user) {
    return user.username === 'zordon'
  });
}

mybot.on("message", function(message){
  var zordon = findZordon(mybot.users)[0]; // result returned as an array. First one always correct
  // error if more than one in the array
  if(message.isMentioned(zordon)) 
      mybot.reply(message, "What is it, ranger?");
});

mybot.login(secrets.email, secrets.password);


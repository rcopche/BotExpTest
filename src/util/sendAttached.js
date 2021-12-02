const {MessageAttachment} = require("discord.js");



module.exports = {
    sendAttached(message, url, name){
        const attachment = new MessageAttachment(url, name);
        message.channel.send({ files: [attachment] }).catch(console.error);
    }
    
}
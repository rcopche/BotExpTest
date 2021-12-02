const { DiscordAPIError, MessageEmbed } = require("discord.js");
module.exports = (client) => {      
     client.on("guildMemberAdd", member => {
          console.log("teste")
          let channel = member.channels.cache.get("882033474943471657"); //id do canal
          console.log("canal")
          let guild = member.guilds.cache.get("873358225695703111"); //id do servidor
          console.log("Servidor")
          

          console.log(member)
          //let emoji = member.guild.emojis.cache.find(emoji => emoji.name === '');
          if(guild != member.guild){
          return console.log("Bem vindo");
          }else{
               let embed = new MessageEmbed()
               .setColor("#234F45")
               .setAuthor(member.user.tag, member.user.displayAvatarURL())
               .setTitle(`Boas Vindas`) 
               .setDescription(`${member.user}, Seja bem vindo ao servido ${guild.name}! Atualmente temos ${member.guild.memberCount} membros.`)
               .setThumbnail(member.user.displayAvatarURL({ dinamic: true, format:"png", size: 1024}))
               .setFooter('ID do usuario: '+ member.user.id)
               .setTimestamp(new Date());
               //.setTitle(`${emoji}Boas Vindas`)          
               //.setImage('URL')

               channel.send({embeds: [embed]});
               console.log("chegou")
          } 
     })
     
     

};
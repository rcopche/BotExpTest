const {} = require("discord.js")
module.exports = {
    async deleteMessage(message){
        try{
            let valor = message.content.split(" ")

            if(!valor[1]) return message.reply("Entre a qtd de msgs a apagar")
            if(isNaN(valor[1])) return message.reply("Entre um numero")
     
            if(valor[1] > 100) return message.reply("Não é possivel deletar  mais de 100 mensagens")
            if(valor[1] < 1) return message.reply("Você tem que deletar pelo menos uma mensagem")
            
            await message.channel.messages.fetch({limit: 10}).then(messages =>{
                message.channel.bulkDelete(valor[1])
            })
        }catch(e){
            consele.log('Mensagens com mais de 15 dias não são apagadas.', e)
        }
        


    }
}
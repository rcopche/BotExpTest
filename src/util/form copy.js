const DiscordJS = require('discord.js')
const formController = require("../controller/formController")


module.exports = {
    function (message){             
        try{
            
            if(message.content.toLowerCase().replace('?','') === 'relatar'){
                let sair = false
                let counter = 0
                let time = 600000
                let timeString = millisToMinutesAndSeconds(time) 

                //message.channel.send(`Você terá ${timeString} para noticiar sobre seus testes `)

                const questions = [
                    `O que deseja relatar? \nPara **BUG** digite    **1**; \nPara **ISSUE** digite    **2**; \nPara **SAIR** digite    **3**.`,
                    'OK, Descreva brevemente ',
                    'Digite **S** para SALVAR ou **C** para CANCELAR.'
                ]
                        
                const filter = (m) => {
                    return m.author.id === message.author.id
                }
        
                const collector = new DiscordJS.MessageCollector(message.channel, { 
                    max: questions.length,
                    time: time,
                    filter: filter
                })
        
                message.channel.send(questions[counter++])

                collector.on('collect', (m) => {                    
                        if(counter < questions.length){
                            console.log(counter)
                            if(counter == 2){
                                if(m.content === '1')
                                {
                                    m.channel.send(questions[counter++] + 'o **BUG:**' )
                                }else if(m.content === '2')
                                {
                                    m.channel.send(questions[counter++] + 'a **ISSUE:**' )
                                }else 
                                {                            
                                    message.channel.send('**CANCELADO**')
                                    counter = 3
                                    sair = true
                                    return
                                }
                            }else if(counter == 3){
                                m.channel.send(questions[counter++])
                            }               
                            
                        }
                    
                })        
               
                collector.on('end', (collected) => {
                    console.log(`Collected ${collected.size} messages`)
        
                    if(collected.size < questions.length){
                        message.reply("Tempo de relato terminado tente novamente.")
                        return
                    }                    
                    if(sair == false){
                        let counter = 0
                        let resposta = []
                        
                        collected.forEach((value) =>{                             
                            resposta[counter] = value.content                                                                   
                            counter++                          
                        })
                        console.log(resposta)
                        if(resposta[3].toLowerCase() === 's'){  
                            var retorno = formController.findById(message)
                            retorno.then(function(result) {
                                try{
                                    if(result._id === message.author.id){
                                        console.log('Existe')
                                        formController.updateForm1(message,resposta)
                                        
                                    }else{
                                        formController.guardaForm(message,resposta)                          
                                        message.reply(`**GRAVADO COM SUCESSO**`)
                                    }
                                }catch(err){
                                    formController.guardaForm(message,resposta)                          
                                    message.reply(`**GRAVADO COM SUCESSO**`)
                                }
                                
                             })
                        }else{
                            message.reply(`**CANCELADO**`)
                            return
                        }

                    }
                    
                })
                
            }
        }catch(ex){
            message.channel.send(`Erro: ${ex}`)
        }
    
    }

    
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "min:" + (seconds < 10 ? '0' : '') + seconds ;
  }
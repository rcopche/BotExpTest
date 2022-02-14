const DiscordJS = require('discord.js')
const formController = require("../controller/formController")
const timer = require("./timer")


module.exports = {
    function (message){    
        var anexo = [];         
        try{
            
            if(message.content.toLowerCase().replace('?','') === 'relatar'){
                let sair = false
                let counter = 0
                let time = 600000
                let timeString = millisToMinutesAndSeconds(time) 

                //message.channel.send(`Você terá ${timeString} para noticiar sobre seus testes `)

                const questions = [
                    'Qual **charter** você está aplicando 1 ou 2?',
                    `O que deseja relatar? \nPara **BUG** digite    **1**; \nPara **ISSUE** digite    **2**; \nPara **SAIR** digite    **3**.`,
                    'OK, Descreva brevemente ',
                    'Muito bem, agora você pode anexar arquivos ou imagens relacionadas ao seu relato clicando no **+** que está do lado esquerdo da caixa de digitação.',
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
                        //console.log(counter)
                        if(counter == 2){
                            if(m.content === '1')
                            {
                                m.channel.send(questions[counter++] + 'o **BUG:**.' )
                                console.log(counter)
                            }else if(m.content === '2')
                            {
                                m.channel.send(questions[counter++] + 'a **ISSUE:**' )
                            }else 
                            {                            
                                message.channel.send('**CANCELADO**')
                                counter = 4
                                sair = true
                                return
                            }                                                                                
                        } else if(counter == 4){
                            var i = 0
                            if (m.attachments) {
                                let attachments = m.attachments;       
                                for (let file of attachments) {    
                                    anexo[i] = `${file[1].attachment}` 
                                    console.log(file[1].attachment)
                                    i++;
                                }
                                //console.log(attachments)
                            } 
                            m.channel.send(questions[counter++])                                
                        } else{
                            m.channel.send(questions[counter++]);
                        }      
                                            
                    }                    
                })        
               
                collector.on('end', (collected) => {
                    //console.log(`Collected ${collected.size} messages`)
        
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
                        
                        if(resposta[4].toLowerCase() === 's'){ 
                            var info = timer.TimerInfo
                            var i = new info(message)                            
                            //bug
                            if(resposta[1] === `1`){                                
                                var retorno = formController.findById(message)
                                retorno.then(function(result) {
                                    try{
                                        formController.insertBugs(message, i, resposta, anexo)
                                        message.reply("**Bug salvo com sucesso.**")
                                    }catch(err){                                                                 
                                        message.reply("**Erro ao salvar bug**")
                                    }                                    
                                })
                             //issue
                            }else if(resposta[1] === `2`){                                
                                var retorno = formController.findById(message)
                                retorno.then(function(result) {
                                    try{
                                        formController.insertIssue(message, i, resposta, anexo)
                                        message.reply("**Issue salva com sucesso.**")
                                    }catch(err){                                                               
                                        message.reply("**Erro ao salvar issue**" + err)
                                    }
                                    
                                })
                            }

                        }else{
                            message.reply(`**CANCELADO**`)
                            return
                        }

                    }
                    
                })
                
            }
        }catch(ex){
            console.log(`Erro: ${ex}`)
        }
    
    }

    
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "min:" + (seconds < 10 ? '0' : '') + seconds ;
  }
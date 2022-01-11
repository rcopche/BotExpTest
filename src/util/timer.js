const DiscordJS = require('discord.js')
const formController = require("../controller/formController")
const resposta = require("./resposta")

var liga = 0;
var count = 0;
var primeira = true;

var app = 0;
var charter = 0;
var minDigitado = 0

function Timer(message) {
    if(message.content.toLowerCase().replace('?','') === 'iniciar' || message.content.toLowerCase().replace('?','') === '<iniciar>' 
    || message.content.toLowerCase().replace('?','') === 'parar' || message.content.toLowerCase().replace('?','') === '<parar>'){ 
        //enquanto 1 o loop está ativo
        if(message.content.toLowerCase().replace('?','')  === 'iniciar'){   
            console.log(liga)
            if(liga == 1){
                message.reply('```diff\n- Existe uma sessão em andamento. Para interrompê-la digite ?parar. ```');
            }else{
                liga = 1; 
                SetTime(message)    
            }                 
        }else{
            message.reply('A sessão de teste foi interrompida.');            
            liga = 0;   
            count = 0; 
            app = 0;
            charter = 0;
            minDigitado = 0   
        }     
    }
}

//Função que recebe o tempo digitado pelo testador
async function SetTime(message){             
    try{       
            const questions = [                
                'Qual o App você irá testar?\nPara **BookCatalog** digite **1** para **Reminders** digite **2**',
                'Qual **charter** irá aplicar **1** ou **2**?',
                'Digite o tempo da sessão em minutos (**Sessão mínima 30 min.**), ou digite qualquer caracter para sair.',
            ]
            let time = 60000
            let timeString = millisToMinutesAndSeconds(time)            
            let counter = 0
            
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
                    m.channel.send(questions[counter++])
                }
            })    
           
            collector.on('end', (collected) => {
                console.log(`Collected ${collected.size} messages`)
    
                if(collected.size < questions.length){
                    message.reply("Para iniciar a sessão você deve digitar o tempo em minutos. Por exemplo digite 30 para 30 minutos de teste.")
                    return
                }  
                //uso para pegar a posição do vetor                     
                var i = 0
                
                collected.forEach((value) =>{                        
                    if (isNaN(value.content)) {
                        return
                    } 
                    if(i==0){
                        app = value.content
                    }else if(i==1){
                        charter = value.content
                    }else if(i==2){//ultimo valor do vetor trás o tempo da sessão
                        minDigitado = value.content
                    }                      
                    i++  
                })   
                
                if(app!=0 && charter!=0 && minDigitado!=0){
                    if(app<3 && charter<3 && minDigitado > 20){
                        console.log("Charter: ",charter)
                        console.log("App: ",app)
                        console.log("Min: ",minDigitado)
                        formController.insertCharter(message, charter, app, minDigitado)
                        //count = 1800; //1800 = 30 min. 1800/60 = 30 min.
                        count = minDigitado * 60 
                        tempo(message)
                        start() 
                        
                        

                    }  else{
                        message.reply('```diff\n- A Sessão de teste não foi iniciada. \nAs opções digitadas não são válidas. \nTente novamente.```')
                        liga = 0
                        console.log('Opções inválidas')
                        return
                    }                 
                }else{
                    message.reply('```diff\n- A Sessão de teste não foi iniciada. \nAs opções digitadas não são válidas. \nTente novamente.```')
                    liga = 0
                    console.log('Opções inválidas')
                    return
                }
            })
            
        
    }catch(ex){
        message.channel.send(`Ops. Algo deu errado. Tente novamente`)
        console.log(ex)
    }

}

//usado para calcular o tempo que a pergunta de tempo de sessão ficara na tela
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "min:" + (seconds < 10 ? '0' : '') + seconds + 'seg';
  }

//loop de apresentação das mensagens
async function tempo(message) {  
    do{    
        var msg = '' ;                          
        var minRestante = parseInt(count / 60);  
        if(liga == 1){
            msg = colorir(minRestante); 
        }    
        
        //tempo de teste terminado bot faz a notificação e o processo é parado
        if(minRestante==0){
            liga = 0;
            message.reply('O tempo da sessão de teste foi finalizado. ');
        } else{
            //se tempo maior que 6 minutos notifica de 3 em 3 min. Menor que 6 notifica de 1 em 1min.
            if(minRestante > 6){
                message.reply(msg);
                await sleep(180000);
            }else{
                message.reply(msg);
                await sleep(60000);
            }
        }                 
    }while(liga == 1)
}

//usado para controlar os aviso de tempo da sessão apresentado pelo bot
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  


  //cronometro regressivo em segundos
function start() {
    if (count > 0){
        count -= 1;
        if (count == 0) {
            count = "0";
        }else if(count < 10){
            count = "0" + count;
        }
        console.log(count.toString());
        setTimeout(start, 1000);        
    }
}


  //mudança de cor da menssagem por tempo
  function colorir(x){
      var aleatorio = randonSugestoesTimer()
      //se a sessão acabou de ser iniciada o a variavel primeira é verdadeira para a msg ser diferente.
      if(primeira == true){
          primeira = false;
        return '```md\n# A SESSÃO DE TESTES FOI INICIADA, DIRECIONE TODA SUA ATENÇÃO PARA OS ITENS DO CHARTER. LEMBRE-SE DE ANEXAR A IMAGEM DO BUG OU DA ISSUE. \nTEMPO DA SESSÃO: '+x.toString()+'min.```';
        
      }
      if(x>20){
          //azul
        return '```md\n# TEMPO RESTANTE: '+x.toString()+' min.```'+`\n${aleatorio}`;        
      }else if(x>10){
        //amarelo
        return '```fix\n- TEMPO RESTANTE: '+x.toString()+' min.```'+`\n${aleatorio}`;
      }else{
          //vermelho
        return '```diff\n- TEMPO RESTANTE: '+x.toString()+' min.```'+`\n${aleatorio}`;
      } 
  }

  function randonSugestoesTimer(){

    let retorno = resposta.Resposta;
    
    var interacaoleatoria = '';
    var falas = ['Estou por aqui é só me chamar!','Dúvidas? digite **?ajuda**.','Posso ajudar em algo?','','Como está o teste?', 
    'Veja essa dica: ','','Gostaria de ver o manual? Digite **?manual**'
    ,'','Olá está tudo certo ai?','Quando você testa a qualidade aumenta!','Ai vai mais uma dica pra você: ',
    'Siga os objetivos do charter!','','Mantenha o foco!','Use sua criatividade!'];
  
    interacaoleatoria =  falas[Math.floor(Math.random()*falas.length)];	
  
    var items = ['bluetooth','rede','geral', 'swipe','camera','sdcard','gps', '7','8','9','10','11','12','13','14','15']; 
  

    let ret = new retorno(items[Math.floor(Math.random()*items.length)]);
  
    interacaoleatoria += '\n'+ret.retorno
    console.log(interacaoleatoria)
    return interacaoleatoria;
  }
  

  function TimerInfo(message){        
        var array = [count, app, charter, minDigitado]
        //message.reply(`${array[0]}`)
        this.retorno = array
        
        
  }

//module.exports.Timer = Timer;

module.exports = {Timer, TimerInfo:TimerInfo}
require('dotenv').config();
const http = require('http')
const { Client, Intents, MessageEmbed } = require('discord.js');
const resposta = require("./src/util/resposta")
const timer = require("./src/util/timer")
const connect = require("./src/util/connectMongo")
const interacaoController = require("./src/controller/interacaoController")
const attachedController = require("./src/controller/attachedController")
const questionController = require("./src/controller/questionController")
const formController = require("./src/controller/formController")
const novoCanal = require("./src/util/newChannel");
const boasVindas = require('./src/util/boasVindas');
const sendAttached = require('./src/util/sendAttached')
const sendEmbed = require('./src/util/sendEmbed')
const form = require('./src/util/form');
const deleteMessages = require('./src/util/deleteMessages')
const fs = require('fs');
const { MessageAttachment } = require('discord.js');

http.createServer(function(req,res){
  res.end('<HTML>  <HEAD>  <TITLE>ExpTesteBot</TITLE>  </HEAD>  <BODY style="background:#A020F0;font-size:50px; color:#FFF" > <div >Chatbot Ativo. <\div>  </BODY>  </HTML>')
  console.log('De pé    <img src="/bot.png" alt="BotExpTest" width="100px" height="100px">')
}).listen(process.env.PORT || 5000);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });
//const client = new Client({ ws: {intents: Intents.ALL} });
client.on('ready', async () => {
  console.log('BOT ON-LINE');
  await connect.connectToDatabase();
  
});

var prefix = '?';
client.on("messageCreate", function (message) {
  if (message.author.bot) return;
  

  //guarda url de anexos  
  //if (message.attachments) {  
    // attachedController.guardaAnexo(message)
  //}

  if (message.content.startsWith(prefix)) {

    ////guarda todas interações do usuario    
    // if(message.content.replace('?','') !== ''){
    //   interacaoController.guardaConversa(message)
    // }

    /* sendAttached.sendAttached(message, 'https://puu.sh/DTwNj/a3f2281a71.gif', 'test.gif') */
    

    /* if(message.content.toLowerCase()==='?lista')
    {
      var question = questionController.select();  
      message.reply(question)  
    } */
    

    //se interação começar com novocanal cria canal
    if (message.content.substring(0, 10).toLowerCase() !== '?novocanal' && message.content.toLowerCase() !== '?relatar' && message.content.split(" ")[0] !== '?clear') {

      //timer.TimerInfo(message)
      //formController.insert(message, "")
      //formController.insertCharter(message)
      //formController.insertBugs(message)
      //formController.findById(message)
      //formController.findById(message)
      //formController.findById(message)
      //formController.deleteForm(message)
       //console.log(message)
      if (message.content.toLowerCase() === '?iniciar' || message.content.toLowerCase() === '?<iniciar>'
        || message.content.toLowerCase() === '?parar' || message.content.toLowerCase() === '?<parar>') {
       
        //ativa o tempo de teste
        timer.Timer(message)
      } else {        
        //chama a classe resposta do bot
        let retorno = resposta.Resposta;
        let ret = new retorno(message.content);
        if(ret.retorno === 'embed'){
          //Resposta inicial de apresentação
          sendEmbed.sendEmbed(message)
        }else{
          message.reply(ret.retorno);
          if(message.content.toLowerCase() === '?charter'){
            sendAttached.sendAttached(message, 'https://www.grupotcm.com.br/downloads/Charters.png',  'Charter.gif')
            
            //sendAttached.sendAttached(message, 'https://www.grupotcm.com.br/downloads/Charter2C.png', 'Charter2 Compras.png')           
            //sendAttached.sendAttached(message, 'https://www.grupotcm.com.br/downloads/Charter2L.png', 'Charter 2 Lixo teste.png')
          }
        }
      }
    } else if (message.content.substring(0, 10).toLowerCase() === '?novocanal') {
      //console.log(message.content.replace('?', '').substring(0, 8), 'teste')
      //novoCanal(message)      
    } else if (message.content.toLowerCase() === '?relatar') {
      var info = timer.TimerInfo
      var i = new info(message)  
      //console.log(i)       
      if(i.retorno[0] != 0){
        //chama form de relatorio de bugs e issues
        form.function(message)
      }else{
        message.reply(`No momento nenhuma sessão está ativa. Digite **?iniciar** para relatar.`)
      }
      
    }////código para limpar mensagens digite clear + numero de msg
    else if (message.content.split(" ")[0] === '?clear') {
      deleteMessages.deleteMessage(message)
    }
  } else {
    return
  }


});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}  

client.login(process.env.TOKEN);






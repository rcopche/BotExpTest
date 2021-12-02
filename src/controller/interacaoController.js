const mongoose = require("mongoose");
const interacaoSchema = require("../schema/interacaoSchema")
const data = require("../util/pegaData")


module.exports = {
    async guardaConversa(message){
        const interacao = mongoose.model("interaction", interacaoSchema);
        const interacao1 = new interacao({
          name: `${message.author.username}`,        
          texto: `${message.content}`,
          data: `${data.pegarDataAtual()}`
        })
        await interacao1.save();
    },



    async select(){
      try{
        const interaction =  await mongoose.model("interactions", interacaoSchema).find() 
        console.log('Aqui:',interaction[1].name)
               
      }catch(e){
        console.log('Erro:',e);
      }
      
    }
}



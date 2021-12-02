const mongoose = require("mongoose");
const formSchema= require("../schema/formSchema")
const data = require("../util/pegaData")

module.exports = {
  
  //CRIAR CAMPOS IDENTIFICANDO QUAL O APP, CHARTER E SESSÃO O BUG FOI ENCONTRADO.


  async insertBugs(message, info, bugFound){      
    var anexo = [];
    i=0;
    if (message.attachments) {
      let attachments = message.attachments;       
      for (let file of attachments) {    
        anexo[i] = `${file[1].attachment}` 
        i++;
      }
      //console.log(attachments)
    }
    const form = mongoose.model('bugs', formSchema.bugSchema)
    const bug = new form({
      testerId: `${message.author.id}`,          
      user: `${message.author.username}`,  
      anexo: anexo,   
      app:`${info.retorno[1]}`,
      charter:`${info.retorno[2]}`,
      session:`1`,   
      description: `${bugFound}`,
      data: `${data.pegarDataAtual()}`
    })
    await bug.save();             
  },

  // ////////////////////////////////

  async insertIssue(message, info, issueFound){  
    var anexo = [];
    i=0;
    if (message.attachments) {
      let attachments = message.attachments;       
      for (let file of attachments) {    
        anexo[i] = `${file[1].attachment}` 
        i++;
      }
    }    
    const form = mongoose.model('issues', formSchema.issueSchema)
    const issue = new form({
      testerId: `${message.author.id}`,          
      user: `${message.author.username}`,  
      anexo: anexo,   
      app:`${info.retorno[1]}`,
      charter:`${info.retorno[2]}`,
      session:`1`,   
      description: `${issueFound}`,
      data: `${data.pegarDataAtual()}`
    })
    await issue.save();        
  },

  //////////////////////////////////////////

  async insertCharter(message, id, app, minDigitado){
    const charter = mongoose.model('charter', formSchema.charterSchema);
    
    const teste = await charter.findById(`${id}`,
      function (err, user) {         
        if(user != null){  
             var session = {_id:`2`, app:app, time:minDigitado, data:`${data.pegarDataAtual()}`}
            charter.findOneAndUpdate(
              { _id:`${id}`},
              { $push: {
                session: [session]                                
              }},
             function (error, success) {
                   if (error) {
                       console.log(error);
                   } else {
                       console.log(success);
                   }
              }
            ); 
            console.log('foi')
        }else{
          console.log('não existe')
          var session = {_id:`1`, app:app, time:minDigitado, data:`${data.pegarDataAtual()}`}
          const charter1 = new charter({
            _id:`${id}`,
            testerId: `${message.author.id}`,          
            user: `${message.author.username}`,  
            session:[session]
          })    
          charter1.save();
           console.log(`Salvo com sucesso`)
        }
        
      }
    )
  },






  async findById(message){
    const form = mongoose.model('charters', formSchema.charterSchema);
    
    var teste = await form.findById(`${message.author.id}`, function (err, user) { console.log(user)});
    //message.reply(teste)
    
  },

  



















    // async guardaForm(message, resposta){
    //     //console.log(questao, answer, message.author.username)
    //     const form= mongoose.model('report', formSchema);
    //     console.log(message.author.username)
    //     const form1 = new form({
    //       _id: message.author.id,          
    //       name: `${message.author.username}`,  
    //       tipo: `${resposta[0]}`,      
    //       description: `${resposta[1]}`,
    //       data: `${data.pegarDataAtual()}`
    //     })
    //     await form1.save();
    // },

    // async insert(message, resposta){
    //   //console.log(questao, answer, message.author.username)
    //   const form = mongoose.model('report', formSchema.formSchema2);
      

    //   var bugs = {descricao:"teste",anexo:"www",data:"22/12/76"}

    //   var issues = {descricao:"teste",anexo:"www",data:"22/12/76"}

    //   var charter = {_id:1, sessionTime: 20, bugs, issues}

    //   var app = {_id:2, charter}


    //   var bug = {descricao:"teste",anexo:"ww333333w",data:"22/12/76"}
    //   //console.log(app)

    //   const teste = await form.findById(`${message.author.id}`,
    //     function (err, user) { 
    //       if(user != null){  
    //           form.findOneAndUpdate(
    //             { _id:`${message.author.id}`},
    //             { $push: {
    //               app:{_id:`2`, charter:{_id:`1`, bugs:bug}}                                  
    //             }},
    //            function (error, success) {
    //                  if (error) {
    //                      console.log(error);
    //                  } else {
    //                      console.log(success);
    //                  }
    //             }
    //           ); 
    //           console.log('foi')

    //       }else{
    //         console.log('não existe')
    //         const form1 = new form({
    //         _id: message.author.id,          
    //          name: `${message.author.username}`,  
    //          app: app        
    //         })      
    //          form1.save();
    //          console.log(`Salvo com sucesso`)
    //       }
          
    //     }
    //   )
    // },   

    // async updateForm(message, resposta){
    //   const form = mongoose.model('report', formSchema);      
    //   var teste = await form.findById(`${message.author.id}`);
      
    //   teste.description = `${resposta[1]}`
    //   teste.tipo = `${resposta[0]}`
      

    //   await teste.save();

    //   console.log(teste)      
    // },

    // async updateForm1(message, resposta){
    //   const form = mongoose.model('report', formSchema);  
    //   var _id = message.author.id  
    //   const test = await form.updateOne({_id},{
    //     $set : {
    //       description : `${resposta[1]}`,
    //       tipo : `${resposta[0]}`
    //     }
    //   })       
    // },

    // async deleteForm(message){
    //   const form = mongoose.model('report', formSchema);  
    //   var _id = message.author.id  
    //   const test = await form.deleteOne({_id})      
    // },


    

  
}
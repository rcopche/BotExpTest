const mongoose = require("mongoose");
const attachedSchema= require("../schema/attachedSchema")
const data = require("../util/pegaData")


module.exports = {
    async guardaAnexo(message){
    const attached = mongoose.model("attached", attachedSchema);
    if (message.attachments) {
      let attachments = message.attachments;       
      for (let file of attachments) {        
        const attached1 = new attached({
            name: `${message.author.username}`,        
            url: `${file[1].attachment}`,
            data: `${data.pegarDataAtual()}`
        })
        await attached1.save()
        
        }
    }

        
      }
}
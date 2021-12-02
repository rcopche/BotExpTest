const mongoose = require("mongoose");
const questionSchema= require("../schema/questionSchema")
module.exports = {
        async select(){
        try{            
            const questions = await questionSchema.find()
            console.log(questions[0].questions[0]);
            return questions[0].questions[0]
        }catch(e){
            console.log(e)
        }
    }
}
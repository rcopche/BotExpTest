const mongoose = require('mongoose');

const interacaoSchema = new mongoose.Schema({
  name: {
      type:String,
      required: true
  },
  texto: String,   
  data: String
})

const charterSchema = new mongoose.Schema({
  _id:String,
  testerId:String,
  user: {
      type:String,
      required: true
  },
  session:[{
    _id:String,
    app:String,
    time:String,
    data: String,
  }],  
})

const bugSchema = new mongoose.Schema({
  testerId:String,
  user: {
      type:String,
      required: true
  },
  app:String,
  charter:String,
  session:String,
  anexo:[],
  description: String,  
  data: String
})

const issueSchema = new mongoose.Schema({
  testerId:String,
  user: {
      type:String,
      required: true
  },
  app:String,
  charter:String,
  session:String,
  anexo:[],
  description: String,  
  data: String
})












const formSchema1 = new mongoose.Schema({
    _id: String,
    name: String,
    charters:[
      {
        charterId:String,
        sessions:[
          {
            sessionId:String,
            bugs:[],
            issues:[]
          }
        ]
      }
    ]  
})

const formSchema2 = new mongoose.Schema({
  _id: String,
  name: String,
  app:[
    {
      _id:String,
      charter:[
        {
          _id:String,
          charterTime:String,
          bugs:[{
            descricao:String,
            anexo:String,
            data: String
          }],
          issues:[{
            descricao:String,
            anexo:String,
            data: String
          }]
        }
      ]
    }
  ]  
})



const attachedSchema = new mongoose.Schema({
  name: {
      type:String,
      required: true
  },
  url: String,   
  data: String
})


module.exports = {charterSchema, bugSchema, issueSchema, interacaoSchema}
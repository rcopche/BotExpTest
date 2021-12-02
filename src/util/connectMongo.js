const mongoose = require('mongoose');


async function connectToDatabase() {    
    const connection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:  true,
        useFindAndModify: false,
        useCreateIndex: true       
    }).then(() => console.log("Connection Successfull."))
    .catch((err) => console.log(err));
}

module.exports.connectToDatabase = connectToDatabase;
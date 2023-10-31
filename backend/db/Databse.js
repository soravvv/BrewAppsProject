const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`mongodb connected with server: ${data.connection.host}`);
    })
}

module.exports = connectToDatabase
const app = require("./app");
const connectToDatabase = require("./db/Databse");
require("dotenv").config({
    path: 'backend/config/.env'
})

// connect db
connectToDatabase();

// create server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

app.get('/', async (req, res) => {
    res.status(200).send('API is working');
})
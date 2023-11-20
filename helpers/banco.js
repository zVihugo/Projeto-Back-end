const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;


mooongose.connect(
    `mongodb+srv://${username}:${password}@api-rest.yn6gipj.mongodb.net/?retryWrites=true&w=majority`,
).then(() => {
    console.log('Conectado ao banco de dados');
}).catch((err) => {
    console.log('Erro ao conectar ao banco de dados');
    console.log(err);
});

module.exports = mongoose;


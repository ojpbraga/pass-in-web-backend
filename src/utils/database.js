// Conexão com banco de dados

import mongoose from "mongoose";

const URI = 'mongodb+srv://admin:EfRMHsWV7Iv6PdKs@pass-in-web-bd.zqnx7af.mongodb.net/?retryWrites=true&w=majority&appName=pass-in-web-bd';

async function databaseConnection() {
    // Conectar apenas uma vez
    if(!global.mongoose) {
        mongoose.set('strictQuery', false);
        global.mongoose = await mongoose.connect(URI); 

    }
}

export default databaseConnection;
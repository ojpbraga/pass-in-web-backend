import express from 'express';
import bodyParser from 'body-parser';
import userController from './controllers/user.js';
import cors from 'cors';

const app = express(); // Função que cria o app
app.use(cors());
const PORT = 3000;

app.use(bodyParser.json()); // Transforma os dados do body (recebidos do usuário) em json, para conseguirmos trabalhar

// Quando ele receber um get (suponhamos, do formulário), tomará esta ação

// req: ver informações de quem está acessando o site, tipo o ip do usuário / REQUISIÇÃO
// res: resposta do backend para o usuário
    // rota
// app.get('/', (req, res) => {
//     // Colocamos o que queremos mandar de volta para a requisição
//     res.send("Get"); // Resposta
// });

app.use('/user', userController) // .use: rotas criadas para chamar o controller


app.listen(PORT, () => {
    console.log(`Rodando em: http://localhost:${PORT}`);
});

// !!! Não Atualiza Automaticamente, precisa usar o NodeMon
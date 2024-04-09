
// Controller Usuário: vai ficar responsável pelas rotas do usuário.

// import { Router } from 'express';
const Router = require('express'); // Função para criar o controller

const router = Router();

router.get('/', (req, res) => {
     res.send('OK');
})

module.exports = router;
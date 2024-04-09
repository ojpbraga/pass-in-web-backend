
// Controller Usuário: vai ficar responsável pelas rotas do usuário.

import { Router } from 'express'; // Função para criar o controller
import { listUsers, createUser } from '../services/user.js';

const router = Router();

router.get('/', async (req, res) => {
     const userList = await listUsers();
     res.send(userList);
})

router.post('/', (req, res) => {
     res.send('POST USER');
})

router.delete('/', (req, res) => {
     res.send('DELETE USER');
})

export default router;

// Controller Usuário: vai ficar responsável pelas rotas do usuário.

import { Router } from 'express'; // Função para criar o controller
import { listUsers, createUser } from '../services/user.js';

const router = Router();

router.get('/', async (req, res) => {
     const userList = await listUsers();
     res.send(userList);
})

router.post('/', async (req, res) => {
     try {
          // Body: onde recebemos os dados
          const user = await createUser(req.body);
          res.status(201).send(user);
     } catch(err) {
          res.status(400).send(err);
     }
})

router.delete('/', (req, res) => {
     res.send('DELETE USER');
})

export default router;
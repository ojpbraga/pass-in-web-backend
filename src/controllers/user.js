
// Controller Usuário: vai ficar responsável pelas rotas do usuário.

import { Router } from 'express'; // Função para criar o controller
import { listUsers, createUser, deleteUser, updateUser } from '../services/user.js';

const router = Router();

router.get('/', async (req, res) => {
     const userList = await listUsers();
     res.send(userList);
})

router.post('/', async (req, res) => {
     try {
          // Body: onde recebemos os dados
          const user = await createUser(req.body);
          res.send(user);
     } catch(err) {
          res.status(400).send(err);
     }
})

//             Variável da rota
router.delete('/:userId', async (req, res) => {
     await deleteUser(req.params.userId);
     res.send();
})

router.put('/:userId', async (req, res) => {
     await updateUser(req.params.userId, req.body);
     res.send();
})

export default router;
import { Router } from 'express';

import UsuarioController from '../controllers/UsuarioController';

const usuarioRouter = Router();

const usuarioController = new UsuarioController();

usuarioRouter.post('/usuario', usuarioController.create);

usuarioRouter.get('/usuarios', usuarioController.findAll);

usuarioRouter.get('/usuario/:id', usuarioController.findOne);

usuarioRouter.put('/usuario', usuarioController.update);

usuarioRouter.delete('/usuario/:id', usuarioController.delete);

export default usuarioRouter;

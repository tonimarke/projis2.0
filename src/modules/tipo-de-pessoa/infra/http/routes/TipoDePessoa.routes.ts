import { Router } from 'express';

import TipoDePessoaController from '../controllers/TipoDePessoaController';

const tipoDePessoaRouter = Router();

const tipoDePessoaController = new TipoDePessoaController();

tipoDePessoaRouter.post('/tipo_de_pessoa', tipoDePessoaController.create);

tipoDePessoaRouter.get('/tipos_de_pessoas', tipoDePessoaController.findAll);

tipoDePessoaRouter.get('/tipo_de_pessoa/:id', tipoDePessoaController.findOne);

tipoDePessoaRouter.put('/tipo_de_pessoa', tipoDePessoaController.update);

tipoDePessoaRouter.delete('/tipo_de_pessoa/:id', tipoDePessoaController.delete);

export default tipoDePessoaRouter;

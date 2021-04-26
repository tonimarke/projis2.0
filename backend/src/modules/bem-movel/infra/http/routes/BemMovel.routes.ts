import { Router } from 'express';

import BemMovelController from '../controllers/BemMovelController';

const bemMovelRouter = Router();

const bemMovelController = new BemMovelController();

bemMovelRouter.post('/bem_movel', bemMovelController.create);

bemMovelRouter.get('/bens_moveis', bemMovelController.findAll);

bemMovelRouter.get('/bem_movel/:id', bemMovelController.findOne);

bemMovelRouter.put('/bem_movel/:id', bemMovelController.update);

bemMovelRouter.delete('/bem_movel/:id', bemMovelController.delete);

export default bemMovelRouter;

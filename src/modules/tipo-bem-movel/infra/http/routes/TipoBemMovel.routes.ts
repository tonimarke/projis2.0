import { Router } from 'express';

import TipoBemMovelController from '../controllers/TipoBemMovelController';

const tipoBemMovelRouter = Router();

const tipoBemMovelController = new TipoBemMovelController();

tipoBemMovelRouter.post('/tipo_bem_movel', tipoBemMovelController.create);

tipoBemMovelRouter.get('/tipos_bens_moveis', tipoBemMovelController.findAll);

tipoBemMovelRouter.get('/tipo_bem_movel/:id', tipoBemMovelController.findOne);

tipoBemMovelRouter.put('/tipo_bem_movel', tipoBemMovelController.update);

tipoBemMovelRouter.delete('/tipo_bem_movel/:id', tipoBemMovelController.delete);

export default tipoBemMovelRouter;

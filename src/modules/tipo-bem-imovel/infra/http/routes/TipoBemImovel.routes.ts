import { Router } from 'express';

import TipoBemImovelController from '../controllers/TipoBemImovelController';

const tipoBemImovelRouter = Router();

const tipobemImovelController = new TipoBemImovelController();

tipoBemImovelRouter.post('/tipo_bem_imovel', tipobemImovelController.create);

tipoBemImovelRouter.get('/tipos_bens_imoveis', tipobemImovelController.findAll);

tipoBemImovelRouter.get(
  '/tipo_bem_imovel/:id',
  tipobemImovelController.findOne,
);

tipoBemImovelRouter.put('/tipo_bem_imovel', tipobemImovelController.update);

tipoBemImovelRouter.delete(
  '/tipo_bem_imovel/:id',
  tipobemImovelController.delete,
);

export default tipoBemImovelRouter;

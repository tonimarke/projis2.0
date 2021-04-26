import { Router } from 'express';

import OrcamentoFamiliarController from '../controllers/OrcamentoFamiliarController';

const orcamentoFamiliarRouter = Router();

const orcamentoFamiliarController = new OrcamentoFamiliarController();

orcamentoFamiliarRouter.post(
  '/orcamento_familiar',
  orcamentoFamiliarController.create,
);

orcamentoFamiliarRouter.get(
  '/orcamentos_familiares',
  orcamentoFamiliarController.findAll,
);

orcamentoFamiliarRouter.get(
  '/orcamento_familiar/:id',
  orcamentoFamiliarController.findOne,
);

orcamentoFamiliarRouter.put(
  '/orcamento_familiar',
  orcamentoFamiliarController.update,
);

orcamentoFamiliarRouter.delete(
  '/orcamento_familiar/:id',
  orcamentoFamiliarController.delete,
);

export default orcamentoFamiliarRouter;

import { Request, Response, Router } from 'express';
import multer from 'multer';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';
import { AddItemController } from './controllers/order/AddItemController';
import { CreateOrderController } from './controllers/order/CreteOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { RemoveProductFromCategoryController } from './controllers/product/RemoveProductFromCategoryController';

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

//TESTANDO SE AS ROTAS ESTAO FUNCINANDO
router.get('/test', (req: Request, res: Response) => {
  return res.json({ test: 'Sistema backend funcionando!!!!' });
});

// Rotas Usuario
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

router.get('/me', isAuthenticated, new DetailsUserController().handle);

// Rotas Categoria
router.post(
  '/category',
  isAuthenticated,
  new CreateCategoryController().handle,
);

router.get('/category', isAuthenticated, new ListCategoryController().handle);

// Rotas Produtos
router.post(
  '/product',
  isAuthenticated,
  upload.single('file'),
  new CreateProductController().handle,
);

router.get(
  '/category/product',
  isAuthenticated,
  new ListByCategoryController().handle,
);

router.delete(
  '/category/product/',
  new RemoveProductFromCategoryController().handle,
);

// Rotas de Order
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete(
  '/order/remove',
  isAuthenticated,
  new RemoveItemController().handle,
);

router.put('/order/send', isAuthenticated, new SendOrderController().handle);

router.get('/orders', isAuthenticated, new ListOrderController().handle);

router.get(
  '/order/detail',
  isAuthenticated,
  new DetailOrderController().handle,
);

router.put(
  '/order/finish',
  isAuthenticated,
  new FinishOrderController().handle,
);

export { router };

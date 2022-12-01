import express from 'express';
import { b_addProduct, buyProduct, b_addReward, getReward } from '../controllers';
const indexRouter = express.Router();

indexRouter.post('/baddproduct', b_addProduct);
indexRouter.post('/baddreward', b_addReward);
indexRouter.post('/product', buyProduct);
indexRouter.get('/getrewards', getReward);
export default indexRouter;
import express from 'express';
import * as UserController from '../controllers/User';
import * as ItemController from '../controllers/Item';

const router = express.Router(); // eslint-disable-line

router.route('/user').get(UserController.user);
router.route('/auth/user/inventory').get(UserController.inventory);
router.route('/auth/item/sell').post(ItemController.sell);

export default router;

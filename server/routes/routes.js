import express from 'express';
import * as UserController from '../controllers/User';

const router = express.Router(); // eslint-disable-line

router.route('/user').get(UserController.user);
router.route('/auth/inventory').get(UserController.inventory);
router.route('/auth/sell-item').post(UserController.sellItem);

export default router;

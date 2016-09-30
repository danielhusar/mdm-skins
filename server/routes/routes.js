import express from 'express';
import * as UserController from '../controllers/User';

const router = express.Router(); // eslint-disable-line

router.route('/api/user').get(UserController.user);
router.route('/api/auth/inventory').get(UserController.inventory);

export default router;

import express from 'express';
const router = express.Router();

import driverController from '../controllers/drivers';

router.get('/', driverController.greeting)

export default router;
import express from 'express';
const router = express.Router();

import driverController from '../controllers/drivers';

router.get('/', driverController.greeting)

router.post('/drivers', driverController.create)

export default router;
import express from 'express';
const router = express.Router();

import driverController from '../controllers/drivers';

router.get('/', driverController.test);

router.post('/drivers', driverController.create);
router.put('/drivers/:id', driverController.update);
router.get('/drivers/:id', driverController.getOne);
router.delete('/drivers/:id', driverController.delete);

export default router;
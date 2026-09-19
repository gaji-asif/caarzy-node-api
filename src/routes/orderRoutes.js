import express from 'express';
import orderController from '../controllers/orderController.js';

const router = express.Router();

router.get(
    '/cars/:carId/availability',
    orderController.getCarAvailability
);

export default router;
import orderService from '../services/orderService.js';

async function getCarAvailability(req, res, next) {
    try {
        const { carId } = req.params;

        const availability =
            await orderService.getCarAvailability(carId);

        return res.status(200).json(availability);
    } catch (error) {
        next(error);
    }
}

export default {
    getCarAvailability,
};
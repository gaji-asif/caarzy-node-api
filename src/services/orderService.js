import orderRepository from '../repositories/orderRepository.js';

async function getCarAvailability(carId) {
    const order =
        await orderRepository.findActiveOrderByCarId(carId);

    if (!order) {
        return {
            car_id: Number(carId),
            available: true,
            status: 'available',
        };
    }

    if (order.order_type === 'buy') {
        return {
            car_id: Number(carId),
            available: false,
            status: 'sold',
        };
    }

     if (order.order_type === 'reserve') {
        return {
            car_id: Number(carId),
            available: false,
            status: 'reserved',
        };
    }

    return {
        car_id: Number(carId),
        available: false,
        status: 'unavailable',
    };
}

export default {
    getCarAvailability,
};
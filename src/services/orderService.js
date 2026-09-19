import orderRepository from '../repositories/orderRepository.js';

async function getCarAvailability(carId) {
    const reservation =
        await orderRepository.findActiveReservationByCarId(carId);

    if (reservation) {
        return {
            car_id: Number(carId),
            available: false,
            status: 'reserved',
        };
    }

    return {
        car_id: Number(carId),
        available: true,
        status: 'available',
    };
}

export default {
    getCarAvailability,
};
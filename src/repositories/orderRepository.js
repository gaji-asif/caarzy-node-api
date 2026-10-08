import prisma from '../database/prisma.js';

async function findActiveOrderByCarId(carId) {
    return prisma.vehicle_orders.findFirst({
        where: {
            car_id: BigInt(carId),

            order_type: {
                in: ['reserve', 'buy'],
            },

            status: {
                in: ['pending', 'approved'],
            },
        },

        select: {
            id: true,
            car_id: true,
            order_type: true,
            status: true,
        },
    });
}

export default {
    findActiveOrderByCarId,
};
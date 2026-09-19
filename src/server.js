import app from './app.js';
import env from './config/env.js';
import prisma from './database/prisma.js';

async function startServer() {
    try {
        await prisma.$queryRaw`SELECT 1`;

        console.log('Database connected successfully');

        app.listen(env.port, () => {
            console.log(`CaarZy Node API running on port ${env.port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();
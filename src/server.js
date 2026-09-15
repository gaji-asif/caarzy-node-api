const app = require('./app');
const env = require('./config/env');
const pool = require('./database/pool');

async function startServer() {
    try {
        await pool.query('SELECT 1');

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
require('dotenv').config();

module.exports = {
    app: {
        // Usa el puerto proporcionado por el entorno (Render) o 3000 por defecto
        port: process.env.PORT || 3000,
    },
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT 
    }
};
import express, { json } from 'express';
import cors from 'cors';
import { dbConnection } from '../database/config.js';
import AuthRoutes from '../routes/auth.js'

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth', 
        }
        
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(json());
    }

    routes(){
        this.app.use(this.paths.auth, AuthRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}


export default Server;
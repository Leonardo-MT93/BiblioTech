import express, { json } from 'express';
import cors from 'cors';
import { dbConnection } from '../database/config.js';
import AuthRoutes from '../routes/auth.js'
import UserRoutes from '../routes/user.js';
import BookRoutes from '../routes/book.js';
import FavoritesRoutes from '../routes/favorites.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth', 
            user: '/api/user',
            book: '/api/book',
            favorites: '/api/favorites',
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
        this.app.use(this.paths.user, UserRoutes);
        this.app.use(this.paths.book, BookRoutes);
        this.app.use(this.paths.favorites, FavoritesRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}


export default Server;
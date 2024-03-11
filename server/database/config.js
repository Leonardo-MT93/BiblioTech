import { connect } from 'mongoose';

const dbConnection = async() => {

    try {
        await connect(process.env.MONGODB_ATLAS);

        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la base de datos');
    }
}

export {
    dbConnection
}

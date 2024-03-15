
# Bibliotech

Este proyecto es una aplicación web para gestionar una biblioteca virtual. Permite a los usuarios explorar una colección de libros, agregar libros a sus favoritos y administrar su propia colección de libros.




## Instalación - Server

Navega al directorio 'server', instala las dependencias del server de desarrollo

```bash
  cd server
  npm install
```

## Instalación - Cliente

Navega al directorio client, instala las dependencias del cliente de desarrollo

```bash
  cd client
  npm install
```

    
## Variables de entorno para el server
Para correr este proyecto es necesario agregar las siguientes variables de entorno a tu archivo .env

`PORT`

`MONGODB_ATLAS`

`SECRET_PRIVATEKEY`

PORT: Acá especificamos el puerto donde vamos a ejecutar nuestro servidor.

MONGODB_ATLAS: Acá ingresamos nuestra cadena de conexión de MONGODB_ATLAS

SECRET_PRIVATEKEY: Acá ingresamos nuestra clave secreta


## Deployment - Cliente

Para deployar el cliente en desarrollo, hay que ir a la carpeta client y luego ejecutar el comando `npm run dev`

```bash
    cd client
    npm run dev
```

## Deployment - Server

Para deployar el server en desarrollo, hay que ir a la carpeta server y luego ejecutar el comando `npm start`

```bash
    cd server
    npm start
```

## Endpoints

| Método | Recurso         | Descripción                                                |
|--------|-----------------|------------------------------------------------------------|
| POST   | /api/auth/login       | Ruta para el login de usuario   |
| GET    | /api/user       | Obten todos los usuarios registrados en la base de datos  |
| POST   | /api/user       |   Creación del usuario en base de datos
| GET    | /api/book       | Obten todos los libros ingresados en la base de datos.    |
| GET    | /api/book/:id       | Obten un libro en específico por medio de su ID   |
| POST   | /api/book       | Creación de un libro en la base de datos   |
| PUT    | /api/book/:id       | Edición de un libro específico con su ID   |
| DELETE | /api/book/:id       | Eliminar un libro de la base de datos con su ID   |
| GET    | /api/favorites/list/:id  | Obten todos los libros favoritos de el usuario conectado |
| POST   | /api/favorites/add/:id  | Agrega a los favoritos del usuario el libro |
| DELETE | /api/favorites/remove/:id  | Elimina un libro agregado a favoritos

## Authors

- [@Leonardo-MT93](https://github.com/Leonardo-MT93)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-2023-nextjs.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonardo-manuel-tolaba/)



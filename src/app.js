/*Importamos express*/
import express from 'express'
/* Instanciamos express */
const app = express();

/* Definimos en que puerto va a correr nuestra app */
const port = process.env.PORT || 3000;

/* Configuramos el middleware para que maneje los datos json */
app.use(express.json());

/* Mostramos mensaje de servidor escuchando */
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
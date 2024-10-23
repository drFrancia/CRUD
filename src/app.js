/*Importamos express*/
import express from 'express';
/* importamos bodyparser para manejar los cuerpos de las solicitudes */
import bodyParser from 'body-parser';
/* Importamos methodoverride para el uso de put y delete en formularios que no permiten estos metodos por defecto*/
import methodOverride from 'method-override';
/* Instanciamos express */
const app = express();

/*Configuramos la aplicacion*/
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('method'));
app.set('view engine', ejs);

/* Definimos en que puerto va a correr nuestra app */
const port = process.env.PORT || 3000;

/* Configuramos el middleware para que maneje los datos json */
app.use(express.json());

/* Mostramos mensaje de servidor escuchando */
app.listen(port, () => {console.log(`Servidor corriendo en el puerto ${port}`);});
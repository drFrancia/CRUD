/*Importamos express*/
import path from 'path'
import express from 'express';
/* importamos bodyparser para manejar los cuerpos de las solicitudes */
import bodyParser from 'body-parser';
/* Importamos methodoverride para el uso de put y delete en formularios que no permiten estos metodos por defecto*/
import methodOverride from 'method-override';
import { deleteATopic, getAllTopics, postTopic, voteATopic } from './controllers/controladorTemas.js';
import { fileURLToPath } from 'url';

/* Instanciamos express */
const app = express();

/* Configuramos el middleware para que maneje los datos json */
app.use(express.json());

/*Configuramos la aplicacion*/
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.set('views', './views');
app.set('view engine', 'ejs');


//Configuración del entorno de vistas de la aplicación
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//Topic controller
app.get('/', getAllTopics);
app.post('/topics', postTopic);
app.post('/topics/:id/votes', voteATopic);
app.delete('/topics/:id', deleteATopic);



/* Definimos en que puerto va a correr nuestra app */
const port = process.env.PORT || 3000;


/* Mostramos mensaje de servidor escuchando */
app.listen(port, () => {console.log(`Servidor corriendo en el puerto http://localhost:${port}`);});
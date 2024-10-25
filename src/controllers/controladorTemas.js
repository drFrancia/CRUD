//importamos models quien es quien contiene las funciones para interactuar con la db
import Topic from '../models/temaModel.js';


export const getAllTopics = async(req, res) => {
    try {
        const topics = await Topic.getTopics();
        console.log(topics)
        res.render('index',{topics});
    } catch (error) {
        console.log("Error al obtener todos los temas." + error);
    }
};

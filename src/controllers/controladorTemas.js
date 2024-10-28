//importamos models quien es quien contiene las funciones para interactuar con la db
import { render } from 'ejs';
import Topic from '../models/temaModel.js';


export const getAllTopics = async(req, res) => {
    try {
        const topics = await Topic.getTopics();
        res.render('index',{topics});
    } catch (error) {
        console.error("Error al obtener todos los temas." + error);
    }
};
//
export const postTopic = async (req, res) => {
    try {
        const { titulo } = req.body;
        await Topic.createTopic(titulo);
        res.redirect('/');
    } catch (error) {
        console.error("Error al crear un nuevo tema: " + error);
    }
};

export const voteATopic = async (req, res) => {
    try{
        const { id } = req.params;
        await Topic.voteTopic(id);
        res.redirect("/");
    }  catch(error) {
        console.log("Error al votar por el tema.");
    };
};
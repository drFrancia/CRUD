//importamos models quien es quien contiene las funciones para interactuar con la db
import temaModel from '../models/temaModel.js';


module.exports = {
    index : async (req, res) => {
        const temas = await models.obtenerTemas()
    }
};

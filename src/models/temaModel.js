//Utilizamos Pool para realizar la configuracion de la base de datos
import { Pool } from "pg";

const pool = new Pool({
    user : 'sebastian',
    host : 'localhost',
    database : 'crud_voting',
    password : '7501095',
    port : '5432'
});

//Hacemos el modelo para interactuar con la base de datos 
//Funciones para el crud
module.exports = {
    obtenerTemas : async () => {
        const res = await pool.query('SELECT * FROM temas ORDER BY votos DESC');
        return res.rows;
    },

    crearTema : async (titulo) => {
        await pool.query('INSERT INTO temas (titulo) values ($1)', [titulo]);
    },

    votarTema : async (id) => {
        await pool.query('UPDATE temas SET votos = votos + 1 WHERE id = $1', [id]);
    },

    eliminarTema : async (id) => {
        await pool.query('DELETE FROM temas WHERE id = $1', [id]);
    }
};
import pool from "../postgresClient.js";
//Hacemos el modelo para interactuar con la base de datos 
//Funciones para el crud
class Topic {
    static async getTopics() {
        const res = await pool.query('SELECT * FROM temas ORDER BY votos DESC');
        return res.rows;
    }

    static async createTopic(titulo) {
        await pool.query('INSERT INTO temas (titulo) VALUES ($1)', [titulo]);
    }

    static async votarTema(id) {
        await pool.query('UPDATE temas SET votos = votos + 1 WHERE id = $1', [id]);
    }

    static async eliminarTema(id) {
        await pool.query('DELETE FROM temas WHERE id = $1', [id]);
    }
}

export default Topic;
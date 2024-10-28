import pool from "../postgresClient.js";
//Hacemos el modelo para interactuar con la base de datos 
//Funciones para el crud
class Topic {
    static async getTopics() {
        const res = await pool.query('SELECT * FROM topics ORDER BY votes DESC');
        return res.rows;
    }

    static async createTopic(title) {
        await pool.query('INSERT INTO topics (title) VALUES ($1)', [title]);
    }

    static async voteTopic(id) {
        await pool.query('UPDATE topics SET votes = votes + 1 WHERE id = $1', [id]);
    }

    static async deleteTopic(id) {
        await pool.query('DELETE FROM topics WHERE id = $1', [id]);
    }
}

export default Topic;
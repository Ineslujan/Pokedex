const client = require('../app/dbClient')

const dataMapper = {
    getAllPokemon: async () => {
        const query = `SELECT * FROM "pokemon";`;
        return (await client.query(query)).rows;
    },
    // getOnePokemon: async (id) => {
    //     const query = `SELECT * FROM "pokemon" WHERE "numero"=$1;`;
    //     const values = [id];
    //     return (await client.query(query, values)).rows[0];
    // },
    getOnePokemonType: async (id) => {
        const query = `SELECT * FROM "pokemon" p JOIN "pokemon_type" pt ON pt.pokemon_numero = p.numero 
        JOIN "type" t ON pt.type_id = t.id
        WHERE p.numero = $1;`;
        const values = [id];
        return (await client.query(query, values)).rows;
    },
    getPokemonType: async (type) => {
        const query = `SELECT * FROM "pokemon" p JOIN "pokemon_type" pt ON pt.pokemon_numero = p.numero 
        JOIN "type" t ON pt.type_id = t.id 
        WHERE t.name = $1;`;
        const values = [type];
        return (await client.query(query, values)).rows;
    },
    getAllType: async () => {
        const query = `SELECT * FROM "type";`;
        return (await client.query(query)).rows;
    },
};

module.exports = dataMapper;
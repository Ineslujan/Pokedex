const dataMapper = require("../dataMapper");

const mainController = {
    sacAVariable: async (request, response, next) => {
        // Je mets dans le "sac a variables" des valeurs que je souhaite utiliser dans toutes les EJS
        // celui-ci sera automatiquement passé à la vue
        const types = await dataMapper.getAllType();


        response.locals.types= types;
        next();
    },
    home: async (request, response, next) => {
        console.log('Render Home');
        try {
            const pokedex = await dataMapper.getAllPokemon();

            response.render('index', {
                pokedex,
            });
        } catch (error) {
            console.error(error)
        }

    },
    details: async (request, response, next) => {
        const id = Number(request.params.id)

        console.log('Render Details');

        try {
            // const pokemon = await dataMapper.getOnePokemon(id);
            const pokemonType = await dataMapper.getOnePokemonType(id);

            // console.log(pokemon, "<");
            console.log(">", pokemonType);
            
            if (id === pokemonType[0].numero) {
                response.render('details', {
                    pokemon : pokemonType[0],
                    pokemonType
                });

            }
        } catch (error) {
            next()
            console.error(error)
        }

    },
    type: async (request, response, next) => {
        const type = request.params.type

        console.log('Render Details');

        try {
            // const pokemon = await dataMapper.getOnePokemon(id);
            const pokemonType = await dataMapper.getPokemonType(type);

            // console.log(pokemon, "<");
            console.log(">", pokemonType);
            
            if (type === pokemonType[0].name) {
                response.render('filtered', {
                    // pokemon : pokemonType[0],
                    pokedex : pokemonType
                });

            }
        } catch (error) {
            next()
            console.error(error)
        }

    },
};

module.exports = mainController;
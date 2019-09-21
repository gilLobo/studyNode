const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');

module.exports = {
    //Listar todos os filmes
    async index(req, res) {
        //Utilizadno desestruturaçao para pegar a quantidade de paginas da requisição
        const { page = 1 } = req.query;
        //Primeiro objeto recebido no paginate são as clausulas where 
        const movies = await Movie.paginate({}, { page, limit: 10 });
        return res.json(movies);
    },
    // Listar filme por id
    async show(req, res) {
        const movie = await Movie.findById(req.params.id);
        return res.json(movie);
    },
    async store(req, res) {
      const movie = await Movie.create(req.body);
      return res.json(movie);  
    },
    //Atualizar filme "new: true" utilizado para retornar objeto atualizado
    async update(req, res) {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(movie);
    },
    //Remover Filme
    async destroy(req, res) {
        await Movie.findByIdAndRemove(req.params.id);
        return res.send();
    }
    
}
// controllers/gameController.js
const Game = require('../models/game');
const { v4: uuidv4 } = require('uuid');

exports.getGames = (req, res) => {
    const games = Game.getAllGames();
    res.render('games', { games: games });
};

exports.addGame = (req, res) => {
    const { name, genre, platform, releaseDate, rating } = req.body;
    const id = uuidv4(); // Gera um ID único usando UUID
    const newGame = new Game(id, name, genre, platform, releaseDate, rating);
    Game.addGame(newGame);
    res.redirect('/games');  // Redireciona para a página que lista todos os jogos
};
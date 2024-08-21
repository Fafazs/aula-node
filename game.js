// models/game.js
class Game {
    constructor(id, name, genre, platform, releaseDate, rating) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.platform = platform;
        this.releaseDate = releaseDate;
        this.rating = rating;
    }

    static getAllGames() {
        return games;
    }

    static addGame(game) {
        games.push(game);
    }
}

// Inicializando alguns jogos de exemplo
const games = [
    new Game(1, "Monster Hunter World", "MMMORPG", "Computador", "20-08-2024", 10)
];

module.exports = Game;
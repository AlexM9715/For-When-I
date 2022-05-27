const forWhenIController = require("./../controllers/forWhenI.controller")
 
module.exports = (app) => {
    app.get("/api/songs", forWhenIController.allSongs)
    app.get("/api/songs/:id", forWhenIController.oneSong)
    app.post("/api/songs", forWhenIController.createSong)
    app.put("/api/songs/:id", forWhenIController.updateSong)
    app.delete("/api/songs/:id", forWhenIController.deleteSong)
    app.get("/api/:category", forWhenIController.oneCategory)
}

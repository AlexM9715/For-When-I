const {Song} = require("./../models/forWhenI.model")

//Get All
module.exports.allSongs = (req, res) => {
    Song.find()
        .then(songs => res.json(songs))
        .catch(err => res.status(400).json(err))
}

//Get One
module.exports.oneSong = (req, res) => {
    Song.findOne({_id : req.params.id})
    .then(song => res.json(song))
        .catch(err => res.status(400).json(err))
}

//Create
module.exports.createSong = (req, res) => {
    Song.create(req.body) //info to create object inside()
        .then(newSong => res.json(newSong))
        .catch(err => res.status(400).json(err))
}

//Update
module.exports.updateSong = (req, res) => {
    Song.findByIdAndUpdate(
        {_id : req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
        .then(song => res.json(song))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id : req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

//Randomize
module.exports.oneCategory = (req, res) => {
    Song.find({category : req.params.category})
    .then(response => res.json(response))
    .catch(err => res.status(400).json(err))
}
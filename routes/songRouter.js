const express = require("express")
const songRouter = express.Router()
const Song = require("../models/song.js")

songRouter.get("/", (req, res, next) => {
    Song.find((err, songs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(songs)
    })
})
songRouter.post("/", (req, res, next) => {
    const savedSong = new Song(req.body)
    savedSong.save((err, pickedSong) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(pickedSong)
    })
})
module.exports = songRouter
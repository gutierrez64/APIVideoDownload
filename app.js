const express = require("express")
const ytdl = require("ytdl-core")
const app = express()
const port = 3000

app.post("/:url", function (req, res) {
    const url = req.query
    res.header("Content-Disposition", 'attachmentt; filename="video.mp4"')
    return ytdl(url).pipe(res)
})

app.listen(port, () => {
    console.log(`App rodando na url: https://localhost:${3000}`)
})
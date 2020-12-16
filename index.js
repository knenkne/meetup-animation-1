const PORT = process.env.PORT || 5000

var express = require("express")

express()
  .get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "dist", "index.html"))
  )

  .listen(PORT, () => console.log(`Listening on ${PORT}`))

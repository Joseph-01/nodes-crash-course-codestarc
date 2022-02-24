const http = require("http")
const fs = require("fs")

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    
    res.setHeader("Content-Type", "text/html")

    let path = "./"
    switch (req.url) {
        case "/":
            res.statusCode = "200"
            path += "index.html"
            break;
        case "/about":
            res.statusCode = "200"
            path += "about.html"
            break
        default:
            res.writeHead(301, {
                location: "/"
            })
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err)
            res.end()
        } else {
            res.end(data)
        }
    })
})
    
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})


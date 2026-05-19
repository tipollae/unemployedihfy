
//importing express
const express = require("express");
const path = require("path");
const { clearInterval } = require("timers");

//new express instance
const app = express();

//serve static files
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});
app.use(express.static("./public"))
//serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public'));
});

//creates an http server using the created express app
const server = require("http").Server(app);
//attaching socket io to http server
const io = require("socket.io")(server);
const port = 3000;

if (!server.listening){

    server.listen(port, "0.0.0.0", ()=>{

        console.log(`Server has been initiated at http://localhost:${port}`)

    })

}

else console.log("Server has already been initiated");

//on connection tasks
io.on("connection", (socket)=>{

    console.log("someone has connected");

})
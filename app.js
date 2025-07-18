const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket){
    socket.on("send-location", (data) => {
        socket.on("send-location", (data) => {
            io.emit("receive-location", {id: socket._id, ...data});
        });
    });
    socket.on("disconnect", () => {
        io.emit("user-disconnect", {id: socket._id});
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(3000);




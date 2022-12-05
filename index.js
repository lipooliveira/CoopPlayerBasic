//imports
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express();
const http = require('http')
const server = http.createServer(app)

//configs
app.use(express.static('public'))
const { Server } = require("socket.io");
const io = new Server(server);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

//routes
app.get('/', function(req, res){
    res.redirect('/login');
})

app.get('/login', function(req, res){
    if(req.session.name){
        res.redirect('/stream')
    }else{
        res.sendFile(__dirname + '/public/login.html')
    }
})

app.post('/login', function(req, res){
    if(req.session.name){
        res.redirect('/stream')
    }else{
        const user = req.body.user
        req.session.name = user
        res.redirect('/stream')
    }
})

app.get('/stream', (req, res) =>{
    if(req.session.name){
        res.sendFile(__dirname + '/public/stream.html')
        
    }else{
        res.redirect('/')
    }
    
});

//Socket recives and response
io.on('connection', (socket) => {
    socket.on('TimeUpdate', (msg) => {
        io.emit('TimeUpdate', msg);
    });
    socket.on('PP', (msg) => {
        io.emit('PP', msg);
    });
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});

//start server
server.listen('8000', () => {
    console.log('Server running port 8000');
})
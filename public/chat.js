var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value){
        socket.emit('message', sessionStorage.getItem('name') + ": " + input.value);
        input.value = "";
    }
})

socket.on('message', function(msg){
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTo(0, messages.scrollHeight);
})
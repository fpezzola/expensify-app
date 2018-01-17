const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','public');

app.use(express.static(publicPath));

//Cuando refresca la pagina en un /create por ejemplo
//tira un 404. Esto permite enviar el index que mapee de nuevo el /create
app.get('*', (request,response) => {
    response.sendFile(path.join(publicPath,'index.html'));
});

app.listen(3000,() =>{
    console.log('Server is up!');
});






const express = require("express");
const server = express();

server
   .use(express.json())
   .use(express.urlencoded({ extended: false}))
   .use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', '*');
     res.header('Access-Control-Allow-Metodes', '*');

     next();
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Servern körs på http://localhost:${PORT}');
});
    
server.get('/users', (req, res) => {
  res.send('');
})
  

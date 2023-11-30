const express = require('express');
const app = express();
const morgan=require('morgan');
const cors = require('cors')
 
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware

app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
app.use('/api/clientes', require('./routes/clientes.routes'))

app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hello world from main branch",
        }
    );
})
 
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const session = require('express-session');

app.use(session({
    secret: 'ikoiyujtrthgrfefdfyguioupumyrnther678o9utyhte', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));



const rutas_rbac = require("./routes/rbac.routes");
app.use('/', rutas_rbac);

const rutas_productos = require("./routes/productos.routes");
app.use('/productos', rutas_productos);

const rutas_compras = require("./routes/compras.routes");
app.use('/compras', rutas_compras);

app.use((requset, response, next) => {
  response.status(404);
  response.render('404');
});


app.listen(3000,()=>{console.log("SERVIDOR INICIADO")});
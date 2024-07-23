const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const session = require('express-session');

app.use(session({
    secret: 'ikoiyujtrthgrfefdfyguioupumyrnther678o9utyhte', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'public/uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, Number(new Date()).toString() + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('imagen')); 



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
const Producto = require("../models/producto.model");

exports.get_productos = (request, response, next) => {

    Producto.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('productos', {
                nombre: request.session.username,
                productos: rows
            });
        }).catch((error) => {console.log(error);})
};

exports.get_producto = (request, response, next) => {
    const id = request.params.id;
    Producto.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('detallesProducto', {
                nombre: request.session.username,
                producto: rows[0]
            }); 
        }).catch((error) => {console.log(error);})
}

exports.get_anadir_producto = (request, response, next) => {
    response.render('añadirProducto', {
        nombre: request.session.username
    })
}

exports.post_anadir_producto = (request, response, next) => {
    const nombre = request.body.nombreProducto;
    const descripcion = request.body.descripcionProducto;
    const cantidad = request.body.cantidadProducto;
    const categoria = request.body.categoriaProducto;
    const precio = request.body.precioProducto;
    const imagen = request.body.imagenProducto;

    const producto = new Producto(categoria, nombre, precio, descripcion, imagen, cantidad);
    producto.save()
        .then(() => {
            response.redirect('/productos')
        }).catch((error) => {console.log(error);})
}

exports.post_carrito = (request, response, next) => {
    const id = request.params.id;
    Producto.fetchOne(id)
        .then(([rows, fieldData]) => {
            const categoria = rows[0].IDcategoria;
            const nombre = rows[0].nombre;
            const precio = rows[0].precio;
            const descripcion = rows[0].descripcion;
            const imagen = rows[0].imagen;
            const cantidad = rows[0].cantidad;

            request.session.carrito.push({
                IDcategoria: categoria,
                nombre: nombre,
                precio: precio,
                descripcion: descripcion,
                imagen: imagen,
                cantidad: cantidad
            })
            response.redirect("/compras/carrito")
        }).catch((error) => {console.log(error);})
}
const Producto = require("../models/producto.model");
const Compra = require("../models/compra.model");

exports.get_productos = (request, response, next) => {
    let compraducto;

    if (request._parsedOriginalUrl.path.startsWith("/productos")) {
        compraducto = false;
    }
    if (request._parsedOriginalUrl.path.startsWith("/compras")) {
        compraducto = true;
    }
    Producto.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('productos', {
                nombre: request.session.username,
                productos: rows,
                permisos: request.session.permisos || [],
                compraducto: compraducto
            });
        }).catch((error) => {console.log(error);})
};

exports.get_producto = (request, response, next) => {
    let compraducto;

    if (request._parsedOriginalUrl.path.startsWith("/productos")) {
        compraducto = false;
    }
    if (request._parsedOriginalUrl.path.startsWith("/compras")) {
        compraducto = true;
    }
    const id = request.params.id;
    Producto.fetchOne(id)
        .then(([rows, fieldData]) => {
            if (rows.length == 0) {
                response.status(404);
                response.render('404');
            }
            else {
                response.render('detallesProducto', {
                    nombre: request.session.username,
                    producto: rows[0],
                    permisos: request.session.permisos || [],
                    compraducto: compraducto
                }); 
            }
        }).catch((error) => {console.log(error);})
}

exports.get_anadir_producto = (request, response, next) => {
    let compraducto;

    if (request._parsedOriginalUrl.path.startsWith("/productos")) {
        compraducto = false;
    }
    if (request._parsedOriginalUrl.path.startsWith("/compras")) {
        compraducto = true;
    }
    response.render('añadirProducto', {
        nombre: request.session.username,
        permisos: request.session.permisos || [],
        compraducto: compraducto
    })
}

exports.post_anadir_producto = (request, response, next) => {
    const nombre = request.body.nombreProducto;
    const descripcion = request.body.descripcionProducto;
    const cantidad = request.body.cantidadProducto;
    const categoria = request.body.categoriaProducto;
    const precio = request.body.precioProducto;
    const imagen = request.file ? '/uploads/' + request.file.filename : '';

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

exports.get_editar_producto = (request, response, next) => {
    let compraducto;

    if (request._parsedOriginalUrl.path.startsWith("/productos")) {
        compraducto = false;
    }
    if (request._parsedOriginalUrl.path.startsWith("/compras")) {
        compraducto = true;
    }
    const id = request.params.id;
    Producto.fetchOne(id)
        .then(([rows, fieldData]) => {
            if (rows.length == 0) {
                response.status(404);
                response.render('404');
            }
            else {
                response.render('editarProducto', {
                    nombre: request.session.username,
                    producto: rows[0],
                    permisos: request.session.permisos || [],
                    compraducto: compraducto
                }); 
            }
        }).catch((error) => {console.log(error);})
}

exports.post_editar_producto = (request, response, next) => {
    const id = request.params.id;
    const nombre = request.body.nombreProducto;
    const descripcion = request.body.descripcionProducto;
    const cantidad = request.body.cantidadProducto;
    const categoria = request.body.categoriaProducto;
    const precio = request.body.precioProducto;
    const imagen = request.file ? '/uploads/' + request.file.filename : request.body.imagenActual;

    Producto.update(id, categoria, nombre, precio, descripcion, imagen, cantidad)
        .then(() => {
            response.redirect(`/productos/${id}`);
        })
        .catch((error) => { console.log(error); });
};

exports.post_eliminar_producto = (request, response, next) => {
    const id = request.params.id;
        // Verificar si el producto está referenciado en comproducto
        Compra.findByProductoId(id)
            .then(([rows, fieldData]) => {
                if (rows.length > 0) {
                    // Si hay referencias, no eliminar el producto
                    response.status(400).json({ message: 'No se puede eliminar el producto porque está referenciado en compras' });
                } else {
                    // Si no hay referencias, eliminar el producto
                    Producto.deleteById(id)
                        .then(() => {
                            response.status(200).json({ message: 'Producto eliminado exitosamente' });
                        });
                }
            })
            .catch((error) => {
                console.log(error);
                response.status(500).json({ message: 'Error eliminando el producto' });
            });
};
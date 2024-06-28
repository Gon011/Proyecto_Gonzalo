const Compra = require("../models/compra.model");
const Producto = require("../models/producto.model");

exports.get_compras = (request, response, next) => {
    response.render('compras', {
        nombre: request.session.username,
    });
    
}

exports.get_carrito = (request, response, next) => {
    response.render("carrito", {
        nombre: request.session.username,
        productos: request.session.carrito
    });    
}

exports.get_graficos = (request, response, next) => {
    response.render("graficos", {
        nombre: request.session.username
    })
}
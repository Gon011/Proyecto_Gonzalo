const Compra = require("../models/compra.model");

exports.get_compras = (request, response, next) => {
    response.render('compras', {
        nombre: request.session.username,
        permisos: request.session.permisos || []
    });   
}

exports.get_carrito = (request, response, next) => {
    response.render("carrito", {
        nombre: request.session.username,
        productos: request.session.carrito,
        permisos: request.session.permisos || []
    });    
}

exports.get_graficos = (request, response, next) => {
    Promise.all([
        Compra.fetchIngresosPorDia(),
        Compra.fetchVentasPorCategoria(),
        Compra.fetchVentasPorDia(),
        Compra.fetchComprasPorEstado(),
        Compra.fetchVentasPorProducto()
    ])
    .then(([
        [ingresosPorDia, ingresosPorDiaFieldData],
        [ventasPorCategoria, ventasPorCategoriaFieldData],
        [ventasPorDia, tendenciaVentasFieldData],
        [comprasPorEstado, ventasPorEstadoFieldData],
        [ventasPorProducto, ventasPorProductoFieldData]
    ]) => {
        response.render("graficos", {
            nombre: request.session.username,
            ingresosPorDia: ingresosPorDia,
            ventasPorCategoria: ventasPorCategoria,
            ventasPorDia: ventasPorDia,
            comprasPorEstado: comprasPorEstado,
            ventasPorProducto: ventasPorProducto,
            permisos: request.session.permisos || []
        });
    })
    .catch((error) => {
        console.log(error);
    });
}
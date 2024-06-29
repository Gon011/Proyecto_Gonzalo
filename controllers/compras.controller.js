const Compra = require("../models/compra.model");

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
    Compra.fetchIngresosPorDia()
        .then(([ingresosPorDia, fieldData]) => {
            Compra.fetchVentasPorDia()
                .then(([ventasPorDia, fieldData]) => {
                    Compra.fetchVentasPorCategoria()
                        .then(([ventasPorCategoria, fieldData]) => {
                            Compra.fetchTendenciaVentas()
                                .then(([tendenciaVentas, fieldData]) => {
                                    Compra.fetchVentasPorEstado()
                                        .then(([ventasPorEstado, fieldData]) => {
                                            Compra.fetchVentasPorProducto()
                                                .then(([ventasPorProducto, fieldData]) => {
                                                    response.render("graficos", {
                                                        nombre: request.session.username,
                                                        ingresosPorDia: ingresosPorDia,
                                                        ventasPorDia: ventasPorDia,
                                                        ventasPorCategoria: ventasPorCategoria,
                                                        tendenciaVentas: tendenciaVentas,
                                                        ventasPorEstado: ventasPorEstado,
                                                        ventasPorProducto: ventasPorProducto
                                                    });
                                                }).catch((error) => {console.log(error)});
                                        }).catch((error) => {console.log(error)})
                                }).catch((error) => {console.log(error)})
                        }).catch((error) => {console.log(error)})
                }).catch((error) => {console.log(error)})
        }).catch((error) => {console.log(error)})
}
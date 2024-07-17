exports.anadir_producto = (request, response, next) => {
    let addProduct = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcionalidad == "registra productos") {
            addProduct = true;
        }
    }
    if (addProduct) {
        next();
    } else {
        return response.redirect("/productos");
    }
}

exports.editar_producto = (request, response, next) => {
    let editProduct = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcionalidad == "modifica productos") {
            editProduct = true;
        }
    }
    if (editProduct) {
        next();
    } else {
        return response.redirect("/productos");
    }
}

exports.eliminar_producto = (request, response, next) => {
    let deleteProduct = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcionalidad == "elimina productos") {
            deleteProduct = true;
        }
    }
    if (deleteProduct) {
        next();
    } else {
        return response.redirect("/productos");
    }
}

exports.realizar_compra = (request, response, next) => {
    let makePurchase = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcionalidad == "realiza compras") {
            makePurchase = true;
        }
    }
    if (makePurchase) {
        next();
    } else {
        return response.redirect("/compras");
    }
}

exports.consultar_graficos = (request, response, next) => {
    let viewCharts = false;
    for (let permiso of request.session.permisos) {
        if (permiso.funcionalidad == "consulta gráficos") {
            viewCharts = true;
        }
    }
    if (viewCharts) {
        next();
    } else {
        return response.redirect("/compras");
    }
}



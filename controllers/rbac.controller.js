const bcrypt = require('bcryptjs');
const Usuario = require("../models/usuario.model");


exports.get_comienzo = (request, response, next) => {
    response.render('comienzo');
};

exports.get_registro = (request, response, next) => {

    const error = request.session.error || '';
    request.session.error = '';

    response.render('registro', {
        error: error
    });
};

exports.post_registro = (request, response, next) => {
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.contra;

    Usuario.fetchOne(username)
        .then(([rows, fieldData]) => {
            if (rows.length < 1) {
                // Si el usuario no existe, hashear la contraseña
                bcrypt.hash(password, 12)
                    .then(hashedPassword => {
                        const usuario = new Usuario(
                            username, 
                            email, 
                            hashedPassword
                        );
                        usuario.save().then(() => {
                            response.redirect('inicia');
                        })
                    })
                    .catch((error) => {console.log(error);});

            } else {
                request.session.error = 'Ese nombre de usuario ya está registrado';
                response.redirect('registro');
            }
        }).catch((error) => {console.log(error);});
};

exports.get_inicia = (request, response, next) => {

    const error = request.session.error || '';
    request.session.error = '';
    
    response.render('inicia', {
        error: error
    });
};

exports.post_inicia = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([rows, fieldData]) => {
            if (rows.length == 1) {
                const storedHashedPassword = rows[0].contrasena;
                bcrypt.compare(request.body.contra, storedHashedPassword)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.username = request.body.username;
                            request.session.carrito = [];
                            response.redirect('productos');
                        } else {
                            request.session.error = 'Usuario y/o contraseña incorrectos';
                            response.redirect('inicia');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        request.session.error = 'Hubo un problema con el inicio de sesión';
                        response.redirect('inicia');
                    });
            } else {
                request.session.error = 'Usuario y/o contraseña incorrectos';
                response.redirect('inicia');
            }
        })
        .catch((error) => {
            console.log(error);
            request.session.error = 'Hubo un problema con el inicio de sesión';
            response.redirect('inicia');
        });
};

exports.get_cierra = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('..')
    })
};

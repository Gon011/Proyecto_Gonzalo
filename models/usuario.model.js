const db = require('../util/database');

module.exports = class Usuario {
    
    constructor(username, email, contra) {
        this.username = username;
        this.email = email;
        this.contra = contra;
    }

    save() {
        return db.execute(
            `INSERT INTO usuario (usuario, correo, contrasena)
            VALUES (?, ?, ?)`,
            [this.username, this.email, this.contra]
        );
    }
    
    static fetchOne(username) {
        return db.execute(
            `SELECT * FROM usuario
            WHERE usuario = ?`,
            [username]
        );
    }
}

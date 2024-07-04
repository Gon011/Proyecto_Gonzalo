const db = require('../util/database');

module.exports = class Usuario {
    
    constructor(username, email, contra) {
        this.username = username;
        this.email = email;
        this.contra = contra;
    }

    save() {
        return db.execute(
            `INSERT INTO usuario (usuario, correo, contrasena) VALUES (?, ?, ?)`,
            [this.username, this.email, this.contra]
        )
        .then(() => {
            return db.execute(
                `INSERT INTO asigna (usuario, IDrol) VALUES (?, 2)`,
                [this.username]
            );
        });
    }
    
    static fetchOne(username) {
        return db.execute(
            `SELECT * FROM usuario
            WHERE usuario = ?`,
            [username]
        );
    }

    static getPermisos(username) {
        return db.execute(
            `SELECT funcionalidad
            FROM privilegio pr, posee po, rol r, asigna a, usuario u
            WHERE u.usuario = ? AND u.usuario = a.usuario AND a.IDrol = r.IDrol
            AND r.IDrol = po.IDrol AND po.IDprivilegio = pr.IDprivilegio`,
            [username]
        );
    }
}

const db = require('../util/database');

module.exports = class Producto {

    constructor(IDcategoria, nombre, precio, descripcion, imagen, cantidad) {
        this.IDcategoria = IDcategoria;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }

    save() {
        return db.execute(
            `INSERT INTO productos (IDcategoria, nombre, precio, descripcion, imagen, cantidad) 
            VALUES (?, ?, ?, ?, ?, ?);`,
            [this.IDcategoria, this.nombre, this.precio, this.descripcion, this.imagen, this.cantidad])
    }


    static fetchAll() {
        return db.execute(`SELECT * FROM productos`)
    }

    static fetchOne(id) {
        return db.execute(
            `SELECT * FROM productos AS p 
            JOIN categoria AS c
            ON p.IDcategoria = c.IDcategoria
            WHERE IDproducto = ?;`,
            [id])
    }

    static fetchCategorias() {
        return db.execute(`SELECT * FROM categoria`)
    }

    static update(id, IDcategoria, nombre, precio, descripcion, imagen, cantidad) {
        return db.execute(
            `UPDATE productos 
            SET IDcategoria = ?, nombre = ?, precio = ?, descripcion = ?, imagen = ?, cantidad = ? 
            WHERE IDproducto = ?`,
            [IDcategoria, nombre, precio, descripcion, imagen, cantidad, id]
        );
    }

    static deleteById(id) {
        return db.execute(`DELETE FROM productos WHERE IDproducto = ?;`, [id]);
    }

}
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

}
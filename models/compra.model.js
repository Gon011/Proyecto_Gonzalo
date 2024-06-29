const db = require('../util/database');

module.exports = class Compra {

    constructor(usuario, estado, fecha) {
    this.usuario = usuario;
    this.estado = estado;
    this.fecha = fecha;
    }

    // Método para guardar una nueva compra en la base de datos
    save() {
    return db.execute(
        'INSERT INTO compra (usuario, estado, fecha) VALUES (?, ?, ?)',
        [this.usuario, this.estado, this.fecha]
    );
    }

    // Método para actualizar el estado de una compra
    static updateEstado(id, nuevoEstado) {
    return db.execute(
        'UPDATE compra SET estado = ? WHERE IDcompra = ?',
        [nuevoEstado, id]
    );
    }

    // Método para obtener todas las compras
    static fetchAll() {
    return db.execute('SELECT * FROM compra');
    }

    // Método para obtener una compra por su ID
    static fetchById(id) {
    return db.execute('SELECT * FROM compra WHERE IDcompra = ?', [id]);
    }

    // Método para obtener todas las compras de un usuario específico
    static fetchByUser(usuario) {
    return db.execute('SELECT * FROM compra WHERE usuario = ?', [usuario]);
    }

    // Método para obtener compras con productos relacionados
    static fetchWithProducts() {
    return db.execute(
        `SELECT c.IDcompra, c.usuario, c.estado, c.fecha, cp.IDproducto, cp.cantidad, cp.precio, p.nombre
        FROM compra c
        JOIN comproducto cp ON c.IDcompra = cp.IDcompra
        JOIN producto p ON cp.IDproducto = p.IDproducto`
    );
    }

    // Método para agregar productos a una compra
    static addProductsToCompra(idCompra, productos) {
    const queries = productos.map(producto => {
        return db.execute(
        'INSERT INTO comproducto (IDcompra, IDproducto, cantidad, precio) VALUES (?, ?, ?, ?)',
        [idCompra, producto.IDproducto, producto.cantidad, producto.precio]
        );
    });
    return Promise.all(queries);
    }

    // Método para realizar una compra (crear compra y agregar productos)
    static realizarCompra(usuario, productos) {
    const estado = 'pendiente';
    const fecha = new Date();
    return db.execute(
        'INSERT INTO compra (usuario, estado, fecha) VALUES (?, ?, ?)',
        [usuario, estado, fecha]
    )
    .then(result => {
        const idCompra = result[0].insertId;
        return this.addProductsToCompra(idCompra, productos);
    });
    }

    static fetchIngresosPorDia() {
        return db.execute(
          `SELECT fecha, SUM(cp.cantidad * cp.precio) as ingresos_totales 
           FROM compra c
           JOIN comproducto cp ON c.IDcompra = cp.IDcompra
           WHERE c.estado = 'terminada'
           GROUP BY fecha`
        );
      }
    
      // Método para obtener ventas por día
      static fetchVentasPorDia() {
        return db.execute(
          `SELECT fecha, COUNT(*) as cantidad_ventas 
           FROM compra 
           WHERE estado = 'terminada' 
           GROUP BY fecha`
        );
      }
    
      // Método para obtener distribución de ventas por categoría de producto
      static fetchVentasPorCategoria() {
        return db.execute(
          `SELECT p.IDcategoria, COUNT(*) as cantidad_ventas 
           FROM compra c
           JOIN comproducto cp ON c.IDcompra = cp.IDcompra
           JOIN productos p ON cp.IDproducto = p.IDproducto
           WHERE c.estado = 'terminada'
           GROUP BY p.IDcategoria`
        );
      }
    
      // Método para obtener tendencia de ventas en el tiempo
      static fetchTendenciaVentas() {
        return db.execute(
          `SELECT fecha, SUM(cp.cantidad) as total_vendido 
           FROM compra c
           JOIN comproducto cp ON c.IDcompra = cp.IDcompra
           WHERE c.estado = 'terminada'
           GROUP BY fecha`
        );
      }
    
      // Método para obtener ventas por estado (pendiente vs. terminada)
      static fetchVentasPorEstado() {
        return db.execute(
          `SELECT fecha, estado, COUNT(*) as cantidad_ventas 
           FROM compra 
           GROUP BY fecha, estado`
        );
      }

      static fetchVentasPorProducto() {
        return db.execute(
          `SELECT p.nombre, SUM(cp.cantidad) as cantidad_vendida 
           FROM compra c
           JOIN comproducto cp ON c.IDcompra = cp.IDcompra
           JOIN productos p ON cp.IDproducto = p.IDproducto
           WHERE c.estado = 'terminada'
           GROUP BY p.nombre`
        );
      }
    
};
    

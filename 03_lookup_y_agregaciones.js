// Tarea 4 - $lookup y agregaciones
// Estudiante: Luis Guillermo Silva Parrado

db = db.getSiblingDB("tiendaTecnologica");

// Productos con categorias
db.productos.aggregate([
  {
    $lookup: {
      from: "categorias",
      localField: "id_categoria",
      foreignField: "id_categoria",
      as: "categoria"
    }
  },
  {$unwind: "$categoria"},
  {
    $project: {
      _id: 0,
      id_producto: 1,
      nombre: 1,
      marca: 1,
      precio: 1,
      categoria: "$categoria.nombre"
    }
  },
  {$limit: 10}
]).forEach(printjson);

// Ventas con clientes
db.ventas.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "id_cliente",
      foreignField: "id_cliente",
      as: "cliente"
    }
  },
  {$unwind: "$cliente"},
  {
    $project: {
      _id: 0,
      id_venta: 1,
      fecha: 1,
      total: 1,
      estado: 1,
      cliente: "$cliente.nombre",
      ciudad: "$cliente.ciudad"
    }
  },
  {$limit: 10}
]).forEach(printjson);

// Conteo de productos por marca
db.productos.aggregate([
  {
    $group: {
      _id: "$marca",
      cantidadProductos: {$sum: 1}
    }
  },
  {$sort: {cantidadProductos: -1}}
]).forEach(printjson);

// Suma total de ventas
db.ventas.aggregate([
  {
    $group: {
      _id: null,
      totalVentas: {$sum: "$total"}
    }
  },
  {$project: {_id: 0, totalVentas: 1}}
]).forEach(printjson);

// Precio promedio de productos
db.productos.aggregate([
  {
    $group: {
      _id: null,
      precioPromedio: {$avg: "$precio"}
    }
  },
  {$project: {_id: 0, precioPromedio: 1}}
]).forEach(printjson);

// Estadisticas de ventas por estado
db.ventas.aggregate([
  {
    $group: {
      _id: "$estado",
      cantidadVentas: {$sum: 1},
      valorTotal: {$sum: "$total"},
      promedioVenta: {$avg: "$total"}
    }
  },
  {$sort: {cantidadVentas: -1}}
]).forEach(printjson);

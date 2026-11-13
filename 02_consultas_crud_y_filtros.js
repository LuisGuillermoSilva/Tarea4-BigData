// Tarea 4 - Consultas CRUD y filtros
// Estudiante: Luis Guillermo Silva Parrado

db = db.getSiblingDB("tiendaTecnologica");

// Insercion
db.productos.insertOne({
  id_producto: 51,
  nombre: "Mouse Logitech M185",
  marca: "Logitech",
  precio: 65000,
  stock: 25,
  id_categoria: 4
});

// Seleccion
db.productos.find(
  {id_producto: 51},
  {_id: 0, id_producto: 1, nombre: 1, marca: 1, precio: 1, stock: 1}
).forEach(printjson);

// Actualizacion
db.productos.updateOne(
  {id_producto: 51},
  {$set: {precio: 70000, stock: 40}}
);

// Verificar actualizacion
db.productos.find(
  {id_producto: 51},
  {_id: 0, id_producto: 1, nombre: 1, precio: 1, stock: 1}
).forEach(printjson);

// Eliminacion
db.productos.deleteOne({id_producto: 51});

// Filtro: precio mayor a 1.000.000
db.productos.find(
  {precio: {$gt: 1000000}},
  {_id: 0, id_producto: 1, nombre: 1, marca: 1, precio: 1}
).limit(10).forEach(printjson);

// Filtro: clientes de Bogota
db.clientes.find(
  {ciudad: "Bogota"},
  {_id: 0, id_cliente: 1, nombre: 1, ciudad: 1, correo: 1}
).forEach(printjson);

// Filtro: clientes entre 25 y 35 anos
db.clientes.find(
  {edad: {$gte: 25, $lte: 35}},
  {_id: 0, nombre: 1, ciudad: 1, edad: 1}
).forEach(printjson);

// Operador $in
db.productos.find(
  {marca: {$in: ["Lenovo", "Samsung"]}},
  {_id: 0, id_producto: 1, nombre: 1, marca: 1, precio: 1}
).limit(10).forEach(printjson);

// Operador $and
db.productos.find(
  {
    $and: [
      {precio: {$gt: 1500000}},
      {stock: {$gt: 10}}
    ]
  },
  {_id: 0, nombre: 1, marca: 1, precio: 1, stock: 1}
).limit(10).forEach(printjson);

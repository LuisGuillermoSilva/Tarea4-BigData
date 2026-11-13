// Tarea 4 - Big Data
// Estudiante: Luis Guillermo Silva Parrado
// Caso de uso: Sistema de gestion de ventas de una tienda tecnologica

db = db.getSiblingDB("tiendaTecnologica");

// Crear colecciones si no existen
["clientes", "categorias", "productos", "ventas"].forEach(function(nombre) {
  if (!db.getCollectionNames().includes(nombre)) {
    db.createCollection(nombre);
  }
});

// 10 categorias
db.categorias.insertMany([
  {id_categoria: 1, nombre: "Computadores", descripcion: "Portatiles y equipos de escritorio"},
  {id_categoria: 2, nombre: "Celulares", descripcion: "Telefonos inteligentes"},
  {id_categoria: 3, nombre: "Tablets", descripcion: "Dispositivos tipo tablet"},
  {id_categoria: 4, nombre: "Accesorios", descripcion: "Accesorios tecnologicos"},
  {id_categoria: 5, nombre: "Monitores", descripcion: "Pantallas para computador"},
  {id_categoria: 6, nombre: "Impresoras", descripcion: "Equipos de impresion"},
  {id_categoria: 7, nombre: "Almacenamiento", descripcion: "Discos y memorias"},
  {id_categoria: 8, nombre: "Audio", descripcion: "Audifonos y parlantes"},
  {id_categoria: 9, nombre: "Redes", descripcion: "Routers y dispositivos de red"},
  {id_categoria: 10, nombre: "Videojuegos", descripcion: "Consolas y accesorios gamer"}
]);

// 20 clientes
db.clientes.insertMany([
  {id_cliente: 1, nombre: "Laura Gomez", ciudad: "Bogota", correo: "laura@gmail.com", edad: 28},
  {id_cliente: 2, nombre: "Carlos Perez", ciudad: "Medellin", correo: "carlos@hotmail.com", edad: 35},
  {id_cliente: 3, nombre: "Andrea Martinez", ciudad: "Cali", correo: "andrea@gmail.com", edad: 31},
  {id_cliente: 4, nombre: "Juan Rodriguez", ciudad: "Bogota", correo: "juan@yahoo.com", edad: 26},
  {id_cliente: 5, nombre: "Maria Lopez", ciudad: "Barranquilla", correo: "maria@gmail.com", edad: 40},
  {id_cliente: 6, nombre: "Felipe Torres", ciudad: "Bucaramanga", correo: "felipe@gmail.com", edad: 29},
  {id_cliente: 7, nombre: "Sandra Ramirez", ciudad: "Pereira", correo: "sandra@hotmail.com", edad: 33},
  {id_cliente: 8, nombre: "Diego Castro", ciudad: "Bogota", correo: "diego@gmail.com", edad: 24},
  {id_cliente: 9, nombre: "Paola Sanchez", ciudad: "Cali", correo: "paola@yahoo.com", edad: 37},
  {id_cliente: 10, nombre: "Jorge Diaz", ciudad: "Medellin", correo: "jorge@gmail.com", edad: 42},
  {id_cliente: 11, nombre: "Camila Ruiz", ciudad: "Bogota", correo: "camila@gmail.com", edad: 22},
  {id_cliente: 12, nombre: "Andres Moreno", ciudad: "Tunja", correo: "andres@hotmail.com", edad: 30},
  {id_cliente: 13, nombre: "Natalia Vargas", ciudad: "Manizales", correo: "natalia@gmail.com", edad: 27},
  {id_cliente: 14, nombre: "Ricardo Rojas", ciudad: "Ibague", correo: "ricardo@yahoo.com", edad: 38},
  {id_cliente: 15, nombre: "Daniela Ortiz", ciudad: "Bogota", correo: "daniela@gmail.com", edad: 25},
  {id_cliente: 16, nombre: "Oscar Herrera", ciudad: "Cali", correo: "oscar@gmail.com", edad: 44},
  {id_cliente: 17, nombre: "Valentina Silva", ciudad: "Medellin", correo: "valentina@gmail.com", edad: 23},
  {id_cliente: 18, nombre: "Sergio Molina", ciudad: "Cartagena", correo: "sergio@hotmail.com", edad: 36},
  {id_cliente: 19, nombre: "Juliana Reyes", ciudad: "Bogota", correo: "juliana@gmail.com", edad: 32},
  {id_cliente: 20, nombre: "Miguel Parra", ciudad: "Neiva", correo: "miguel@yahoo.com", edad: 39}
]);

// 50 productos
for (let i = 1; i <= 50; i++) {
  db.productos.insertOne({
    id_producto: i,
    nombre: "Producto Tecnologico " + i,
    marca: ["Lenovo", "HP", "Samsung", "Logitech", "Asus"][i % 5],
    precio: 100000 + (i * 75000),
    stock: 5 + (i % 30),
    id_categoria: ((i - 1) % 10) + 1
  });
}

// 30 ventas
for (let i = 1; i <= 30; i++) {
  let producto = ((i - 1) % 50) + 1;
  let cantidad = (i % 3) + 1;
  let precio = 100000 + (producto * 75000);

  db.ventas.insertOne({
    id_venta: i,
    id_cliente: ((i - 1) % 20) + 1,
    fecha: new Date(2026, 10, (i % 20) + 1),
    productos: [
      {id_producto: producto, cantidad: cantidad, precio: precio}
    ],
    total: precio * cantidad,
    estado: i % 4 === 0 ? "Pendiente" : "Completada"
  });
}

// Verificacion
print("Categorias:", db.categorias.countDocuments());
print("Clientes:", db.clientes.countDocuments());
print("Productos:", db.productos.countDocuments());
print("Ventas:", db.ventas.countDocuments());

let totalDocumentos =
  db.categorias.countDocuments() +
  db.clientes.countDocuments() +
  db.productos.countDocuments() +
  db.ventas.countDocuments();

print("Total de documentos:", totalDocumentos);

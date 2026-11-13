# Sistema de gestión de ventas de una tienda tecnológica

**Curso:** Big Data  
**Código:** 202016911  
**Estudiante:** Luis Guillermo Silva Parrado  

## Descripción

Este repositorio contiene la implementación en MongoDB de un sistema de gestión de ventas para una tienda tecnológica.

La base de datos utilizada es `tiendaTecnologica` y contiene cuatro colecciones:

- `categorias`
- `clientes`
- `productos`
- `ventas`

La carga inicial contiene 110 documentos:

- 10 categorías
- 20 clientes
- 50 productos
- 30 ventas

## Archivos

### 01_creacion_y_datos.js
Crea las colecciones, inserta los 110 documentos y muestra los conteos finales.

### 02_consultas_crud_y_filtros.js
Incluye inserción, selección, actualización, eliminación y consultas con `$gt`, `$gte`, `$lte`, `$in` y `$and`.

### 03_lookup_y_agregaciones.js
Incluye relaciones entre colecciones mediante `$lookup` y consultas de conteo, suma y promedio.

## Ejecución

Con MongoDB en ejecución:

```bash
mongosh "mongodb://localhost:27017" 01_creacion_y_datos.js
mongosh "mongodb://localhost:27017" 02_consultas_crud_y_filtros.js
mongosh "mongodb://localhost:27017" 03_lookup_y_agregaciones.js
```

También es posible copiar las consultas directamente en la consola `mongosh` de MongoDB Compass.

## Resultados principales

- 110 documentos almacenados inicialmente.
- 10 productos por cada marca registrada.
- Total de ventas: $75.000.000.
- Precio promedio de productos: $2.012.500.
- 23 ventas completadas por $57.400.000.
- 7 ventas pendientes por $17.600.000.

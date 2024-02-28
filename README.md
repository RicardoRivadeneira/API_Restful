# Desarrollo de un API RESTful para un blog personal utilizando NestJS

## Introducción

El objetivo de este proyecto fue desarrollar una aplicación de blog personal utilizando el framework NestJS para el backend, conectado a una base de datos MongoDB. La aplicación debía permitir operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los posts del blog. Para facilitar el despliegue y la configuración del entorno, se utilizó Docker, en particular Docker Compose, para orquestar el contenedor de la aplicación y el contenedor de MongoDB.

## Herramientas y Tecnologías Utilizadas

- **NestJS**: Utilizado para construir la lógica del servidor y manejar las solicitudes y respuestas HTTP.
- **MongoDB**: Elegido como la base de datos para almacenar los datos de los posts debido a su flexibilidad y facilidad de uso con datos no estructurados.
- **Docker**: Utilizado para contenerizar la aplicación y la base de datos, asegurando la consistencia entre diferentes entornos de desarrollo y producción.
- **Docker Compose**: Facilita la configuración y gestión de contenedores múltiples que necesitan interactuar.

## Desarrollo

### Configuración Inicial

El proyecto comenzó con la configuración del entorno de desarrollo utilizando Docker Compose para ejecutar MongoDB. Se creó un archivo `docker-compose.yml` especificando la imagen de MongoDB, las credenciales de acceso, y el volumen para la persistencia de datos.

### Implementación del CRUD

Se implementaron los modelos y controladores necesarios en NestJS para realizar operaciones CRUD en la colección de posts. Se utilizó Mongoose como ODM para facilitar la interacción con MongoDB. Un punto clave fue la personalización del esquema para incluir un `id_post` como identificador único de cada post.

### Conexión a MongoDB mediante Docker

La conexión entre la aplicación NestJS y la instancia de MongoDB orquestada por Docker se configuró en el archivo `app.module.ts` de NestJS, especificando la URL de conexión y las credenciales de acceso.

## Problemas Encontrados y Soluciones

- **Conexión a la Base de Datos Incorrecta**: Inicialmente, los datos se guardaban en la base de datos `test` por defecto de MongoDB. Este problema se resolvió especificando el nombre de la base de datos deseada (`mydatabase`) directamente en la cadena de conexión de Mongoose.
- **Errores de Autenticación al Cambiar la Base de Datos**: Al intentar conectar a `mydatabase`, surgieron errores de autenticación. Este problema fue solucionado asegurándose de que las credenciales proporcionadas en la cadena de conexión coincidieran con las configuradas en el `docker-compose.yml`.

## Observaciones Relevantes

Se destacó la importancia de la correcta configuración de la cadena de conexión y las credenciales para evitar problemas de conexión y autenticación con la base de datos. También se subrayó el valor de Docker Compose para simplificar la configuración y gestión de contenedores.

## Conclusión

Este proyecto demostró cómo desarrollar una aplicación de blog personal con NestJS y MongoDB, enfatizando la configuración de un entorno de desarrollo reproducible con Docker. Los desafíos encontrados y superados en el proceso reforzaron la comprensión de la conexión entre aplicaciones NestJS y bases de datos MongoDB, así como la gestión de contenedores con Docker.

## Pasos para ejecutar la aplicación

1. Descargar el código, las dependencias con `npm install` y en la terminal ingresar `docker-compose up -d`.
2. Se descargará los complementos necesarios para el código, la imagen en la aplicación docker desktop y se pondrá en ejecución el contenedor.
3. Para realizar las peticiones como GET, POST, PUT, DELETE mediante la extensión de Thunder Client, se deberá de colocar en la terminal el comando: `npm start`, con eso se realizará una conexión a la base de mongo.
4. Para corroborar que los datos se guarden correctamente dentro de la base de mongo, podemos ingresar en la interfaz gráfica de Mongo Compass y realizar conexión con nuestra base de datos, mediante las credenciales especificadas en el archivo `.yml`.
5. Una vez dentro se verán los datos correctamente guardados.

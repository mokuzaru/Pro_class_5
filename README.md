# Clase Backend + DB

## Instalaciones

-   [XAMPP](https://www.apachefriends.org/es/index.html)
-   [Node JS](https://nodejs.org/es)
-   [git](https://www.youtube.com/watch?v=9uKPY7V_ai8)
-   [VScode](https://code.visualstudio.com/)

## Crear BD en phpMyAdmin

- Inicializar XAMPP
- Activar MySQL
- Ir a la Pagina (localhost/phpmyadmin)

- Click a Nueva (barra izquierda)
- Nombrar la nueva db y asignar un encode (Recomendado: utf8_spanish_ci)

- Click a crear

## Crear una tabla

- Nombrar la tabla y asignar numero de variables
- Nombrar variables y tiparlas (id: Check A_I)(fecha:  predeterminado:"CURRENT_TIME")
- Click Guardar
- Click Examinar (para ver los valores)

# Crear Backend

## Iniciar proyecto

- Crear una carpeta para el proyecto
- abrir la carpeta con git bash
- en git bash usar el comando 

        code .

- abrir terminal con " Ctrl+ñ"

## Inicializar Node Js

- Iniciar node


        npm init --yes


- Crear carpeta src
- Dentro de src crear archivo "index.js"
- Utilizamos linea de comando para instalar express en el proyecto

        npm i express

- Instanciar express en una constante de nombre app.

- usar el metodo "listen" en un puerto libre
- Levantamos el servidor con el comando

        node src/

- En "package.json" en "scripts" añadir despues de una coma el script "start"

        "start":"node src/"

por lo cual se puede iniciar el server con el siguiente comando

        npm start

- Instalar paquete mysql

        npm i mysql

- Instalar paquete sesiones sql express

        npm i express-mysql-session

- Instanciar path
- Instanciar MySQLStore
- Crear archivo "database.js" dentro de "src"
- Crear archivo "keys.js" dentro de "src"
- Dentro de database.js instanciar 
    - Promisify
    - mysql
    - database
- Dentro de "keys.js" crear y exportar objeto "database"
- Dentro de "database.js" manejo de errores y convertir las peticiones en promesas para exportar.
- instalar express-session

        npm i express-session

- Instancias session en "index.js"
- Instancias database en "index.js"
- crear variable sessionStore
- Midleware session y configuracion default
- añadir midleware de lectura de formato json
- Crear carpeta "rutas" dentro de "src"
- crear archivo index.js dentro de "src"

- crear archivo ".gitignore" al mismo nivel de "package.json"
- El archivo ".gitignore" contiene
    - node_module
    - package-lock.json
- Crear rutas con base de datos






# Lista de comando de git

-       git status 
(Verificar si existen diferencias entre local y cloud)
-       git add "nombre file" 
(crear commit y asignar los files)
-       git commit -m "nombre del commit" 
(nombrar el commit)
-       git push origin -u "rama" 
(enviar cambios de local a la rama cloud)


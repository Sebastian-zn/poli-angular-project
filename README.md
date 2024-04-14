# Plataforma de Gestión de Usuarios y Servicios

Este es un proyecto Angular para dar respuesta a las actividades propuestas para el trabajo colaborativo de desarrollo front-end
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Requisitos previos

Antes de comenzar a trabajar en este proyecto, asegúrate de tener instalado Node.js y npm en tu sistema. Si aún no los tienes instalados, puedes descargarlos e instalarlos desde [Node.js Official Website](https://nodejs.org/).

Además, necesitarás tener Angular CLI instalado globalmente en tu máquina. Si aún no lo tienes, puedes instalarlo ejecutando el siguiente comando:

```bash
npm install -g @angular/cli
```

## Instalación

Una vez que hayas clonado este repositorio en tu máquina local, puedes instalar todas las dependencias del proyecto utilizando npm. Ve al directorio raíz del proyecto y ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias que se encuentran en el archivo `package.json`.

## Inicialización

Una vez que todas las dependencias se hayan instalado correctamente, puedes iniciar el servidor de desarrollo ejecutando el siguiente comando:

```bash
ng serve
```

Esto iniciará el servidor de desarrollo de Angular en tu máquina local. Luego, podrás acceder a la aplicación en tu navegador web visitando [http://localhost:4200](http://localhost:4200).

¡Ahora estás listo para comenzar a trabajar en el proyecto! Si tienes alguna pregunta o problema, escribe al chat de grupo.

## Build

Para compilar el proyecto y generar los archivos listos para producción, puedes ejecutar el siguiente comando:

```bash
ng build
```

Este comando generará una carpeta `dist/` en el directorio raíz del proyecto, que contiene los archivos optimizados para producción

## Ejecución de Pruebas Unitarias

Si deseas ejecutar las pruebas unitarias del proyecto, puedes usar el siguiente comando:

```bash
ng test
```

Este comando ejecutará las pruebas unitarias via [Karma](https://karma-runner.github.io) y mostrará los resultados en la terminal.

Además, puedes generar un informe de cobertura de las pruebas con el siguiente comando:

```bash
ng test --code-coverage
```

Esto generará un informe detallado de cobertura de código en la carpeta coverage/ del directorio raíz del proyecto.

## Pruebas End-to-End (E2E)

Para ejecutar pruebas end-to-end en el proyecto, primero asegúrate de tener el servidor de desarrollo en ejecución.

Para ejecutar las pruebas end-to-end a través de una plataforma de tu elección, primero necesitas agregar un paquete que implemente capacidades de pruebas end-to-end

Cuando el servidor esté en funcionamiento y tengas un paquete de pruebas E2E instalado, puedes ejecutar las pruebas con el siguiente comando:

```bash
ng e2e
```

## Help

Para más ayuda con el Angular CLI ejecute:

```bash
ng help
```

También puedes consultar mas información en la pagina de documentación oficial [Angular CLI](https://angular.dev/tools/cli).

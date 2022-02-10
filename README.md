# Prueba técnica React

## Instalación y puesta en marcha

Para crear este proyecto he usado create-react-app.
Para poner en marcha el proyecto debemos ejecutar `yarn` para instalar las dependencias y luego `yarn start` para ponerlo en marcha.

## Estructura y funcionamiento

### Rutas

En el archivo App.js he definido las rutas de la aplicación, usando React Router.

### Organización

He metido cada archivo `index.js` dentro de una carpeta con el nombre del componente/página junto con su archivo de estilos `styles.module.scss`, he añadido sass a la aplicación para la maquetación.

### Carpetas y componentes

Como carpetas principales he creado Pages y Components.
En la carpeta Pages están la Home, dónde se hace la llamada a la API y se renderiza el listado de personajes y la página de Character dónde se hace la llamada y se renderizan los detalles de cada personaje y una frase random dicha por el mismo. Esta frase cambia cada vez que se hace click en el botón de `Other quote` o que se recarga la página. Si el personaje solo tiene una frase no se muestra el botón. Y si no tiene ninguna frase aparece la frase *"This character didn't say anything interesting."*
En la carpeta Components he añadido CharacterCard que es la tarjeta que utilzo en el listado de personajes, esta es clickable y nos redirige a la página de detalle del personaje elegido, y un componente Loading para mostrar cuando está cargando la información de las llamadas a la API. El Loading lo he sacado de https://loading.io/css/. 

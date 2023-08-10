# Desafío 4

> **Aclaración**: a fin de evitar conflictos y eliminar la necesidad de instalación de dependencias, opté por el camino de que las respuestas fueran visualizadas a través del navegador. Luego de clonar este repositorio, posicionados en cada archivo **index.html**, correspondiente a cada ejercicio, al hacer click derecho sobre el mismo, seleccionar la opcion _abrir con_ y elegir el navegador.
> Pueden consultar este [video](https://www.youtube.com/watch?v=C47KhW5ljxQ&ab_channel=divcode) en caso de necesitar ayuda adicional sobre este paso (ver el primer minuto).

Ambos ejercicios fueron desarrollados en el lenguaje Javascript.

## Ejercicio 1

En este ejercicio, a fin de cumplir con el requerimiento, hice uso del método **indexOf**, el cual se encarga de buscar en una lista brindada (en nuestro caso, la lista `arr`) el número brindado (a quien llamé `blanco`) en su primer aparación. Si lo encuentra, el valor almacenado en la variable `valorBuscado` será el índice o posición en la lista. Caso contrario, será **-1**.

Nos guardamos el resultado de ejecutar esta función en una variable llamada `valor`, el cual será pasado a nuestro elemento _p_ del documento html, para luego ser mostrado por el navegador.

## Ejercicio 2

Para este ejercicio, cree una lista de objetos, donde cada objeto representa un país con su capital:

Ejemplo: `{ pais: "Argentina", capital: "Buenos Aires" } `

Según la documentación de [openWeather](https://openweathermap.org/current#multi), en la petición a la API, es posible recibir los resultados `name` y `description` (nombre de la ciudad y descripción correlativamente) en español colocando en la url el parametro `lang=es`. Puntualmente, para el caso de la capital de Haití, que es Puerto Principe, la API sólo recibe "Port-au-Prince", por lo cual estoy controlando el dato que se envía (a traves de un [ternario](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)) para que la API brinde la respuesta correcta.

La función `obtenerDatosClimaticos` recibe una ciudad, la cual considere como ciudad válida a las ciudades capitales de los paises latinoamericanos. La ciudad recibida se busca dentro de la lista `paisesLatam`, comparando esa ciudad con la propiedad `capital` de cada objeto de dicha lista. Para esto hice uso del método [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) para listas de Javascript. Si la encontramos, mappeando la lista `paisesLatam`, ejecutamos la función `fetchClimaData`, la cual recibe la capital de país latinoamericano. Caso contrario, en la consola del navegador se imprimirá el mensaje: _La ciudad que has ingresado no es de Latinoamerica, intenta de nuevo_.

La función `fetchClimaData` hace la petición a la API a traves del método `fetch()`, el cual retorna una promesa de respuesta por parte del servidor. Esta peticion es ejecutada de forma asincrónica. En caso de que haya un error en nuestra petición o la información no se pueda obtener, la consola del navegador nos mostrará el mensaje: _"Error fetching weather data:"_ y qué tipo de error es. Si nuestra petición es correcta y obtenemos la respuesta desde la API, se ejecuta el llamado a la función `mostrarData`.

La función `mostrarData` recibe la respuesta de la API, con la cual trabaja para insertar en el documento html los datos: Nombre de capital, País, Sensación Térmica, Humedad, Presión, Temp. max, Temp. min, Descripción.
Apliqué desestructuración del objeto `data` en la linea 44 y en la línea 45 del objeto main, anidado dentro del objeto data.
Debido a que la respuesta brindada por ciudad no contempla el país, dentro de la variable `encontrarPais` almacenamos el valor de realizar una búsqueda en la lista de paises cuando el `name` del objeto `data` coincida con la capital del objeto de la lista. Si lo encuentra, almaceno ese valor en `pais`, que luego se suma a lo que es mostrado con el resto de la información obtenida en el documento HTML.

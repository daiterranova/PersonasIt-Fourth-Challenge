let apiKey = "30e1712feed1eca7596e4709ed161623";

let paisesLatam = [
  { pais: "Argentina", capital: "Buenos Aires" },
  { pais: "Bolivia", capital: "Sucre" },
  { pais: "Brasil", capital: "Brasilia" },
  { pais: "Chile", capital: "Santiago de Chile" },
  { pais: "Colombia", capital: "Bogota" },
  { pais: "Costa Rica", capital: "San Jose" },
  { pais: "Cuba", capital: "La Habana" },
  { pais: "Ecuador", capital: "Quito" },
  { pais: "El Salvador", capital: "San Salvador" },
  { pais: "Guatemala", capital: "Ciudad de Guatemala" },
  { pais: "Haiti", capital: "Puerto Principe" },
  { pais: "Honduras", capital: "Tegucigalpa" },
  { pais: "México", capital: "Ciudad de Mexico" },
  { pais: "Nicaragua", capital: "Managua" },
  { pais: "Panama", capital: "Panama" },
  { pais: "Paraguay", capital: "Asuncion" },
  { pais: "Peru", capital: "Lima" },
  { pais: "Republica Dominicana", capital: "Santo Domingo" },
  { pais: "Uruguay", capital: "Montevideo" },
  { pais: "Venezuela", capital: "Caracas" },
];

const fetchClimaData = async (ciudad) => {
  const lang = "es";
  const units = "metric";
  //para el caso de Haiti, la respuesta de la API recibe a Port-au-Prince
  ciudad === "Puerto Principe" ? (ciudad = "Port-au-Prince") : ciudad;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=${units}&lang=${lang}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    mostrarData(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const mostrarData = (data) => {
  let description;
  let pais;
  const { name, main, weather } = data;
  const { feels_like, humidity, pressure, temp_max, temp_min } = main;
  if (weather && weather.length > 0) {
    description = weather[0].description;
  }
  const encontrarPais = paisesLatam.find((pais) => pais.capital === name);
  if (encontrarPais) {
    pais = encontrarPais.pais;
  }
  let containerResults = document.querySelector("#container");
  let ciudadData = document.createElement("span");
  ciudadData.textContent = `Nombre de capital: ${name}, Pais: ${pais}, Sensacion Termica: ${feels_like}, Humedad: ${humidity}, Presion: ${pressure}, Temp. max: ${temp_max}, Temp. min: ${temp_min}, Descripcion: ${description}. `;
  containerResults.append(ciudadData);
};

const obtenerDatosClimaticos = (capital) => {
  const foundpais = paisesLatam.find((pais) => pais.capital === capital);
  if (foundpais) {
    paisesLatam.map((e) => fetchClimaData(e.capital));
  } else {
    console.log(
      "La ciudad que has ingresado no es de Latinoamerica, intenta de nuevo"
    );
  }
};
//llama a la funcion con el nombre de la ciudad que buscas
obtenerDatosClimaticos("Buenos Aires");

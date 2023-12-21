const axios = require('axios');
const mongoose = require('mongoose');

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/DDBB-Countries.Countries', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Definir un modelo para los países
const Country = mongoose.model('Countries', {
  name: String,
  code: String,
  
});

// Función para obtener datos de la API y guardarlos en MongoDB
async function fetchDataAndSaveToMongo() {
  try {
    // Hacer una solicitud a la API de countries.trevorblades
    const response = await axios.post('https://countries.trevorblades.com/', {
      query: `
        {
          countries {
            name
            code
            
          }
        }
      `,
    });

    // Extraer datos de la respuesta
    const countries = response.data.data.countries;

    // Guardar datos en MongoDB
    await Country.insertMany(countries);

    console.log('Datos guardados en MongoDB con éxito.');
  } catch (error) {
    console.error('Error al obtener o guardar datos:', error.message);
  } finally {
    // Cerrar la conexión a la base de datos al finalizar
    db.close();
  }
}

// Ejecutar la función para obtener datos y guardarlos
fetchDataAndSaveToMongo();
const { MongoClient } = require('mongodb');


const uri = "mongodb://localhost:27017";

// Función principal
async function insertDocuments() {
  // Crear una nueva instancia del cliente MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Conectar al servidor MongoDB
    await client.connect();

    console.log("Conectado a MongoDB");

    // Seleccionar la base de datos y la colección
    const db = client.db('Club_Video');
    const collection = db.collection('movies');

    // Insertar documentos en la colección
    const result = await collection.insertMany([
      {
        titulo: "Fight Club",
        escritor: "Chuck Palahniuk",
        year: 1999,
        actores: ["Brad Pitt", "Edward Norton"]
      },
      {
        titulo: "Pulp Fiction",
        escritor: "Quentin Tarantino",
        year: 1994,
        actores: ["John Travolta", "Uma Thurman"]
      },
      {
        titulo: "Inglorious Basterds",
        escritor: "Quentin Tarantino",
        year: 2009,
        actores: ["Brad Pitt", "Diane Kruger", "Eli Roth"]
      },
      {
        titulo: "The Hobbit: An Unexpected Journey",
        escritor: "J.R.R. Tolkien",
        year: 2012,
        franquicia: "The Hobbit"
      },
      {
        titulo: "The Hobbit: The Desolation of Smaug",
        escritor: "J.R.R. Tolkien",
        year: 2013,
        franquicia: "The Hobbit"
      },
      {
        titulo: "The Hobbit: The Battle of the Five Armies",
        escritor: "J.R.R. Tolkien",
        year: 2014,
        franquicia: "The Hobbit",
        sinopsis: "Bilbo and his company must face a war against various opponents to prevent the Lonely Mountain from falling into darkness."
      },
      {
        titulo: "Pee Wee Herman’s Big Adventure"
      },
      {
        titulo: "Avatar"
      }
    ]);
    console.log(`${result.insertedCount} documentos insertados`);

  } catch (error) {
    console.error("Error en la ejecución:", error);
  } finally {
    // Cerrar la conexión
    await client.close();
    console.log("Conexión cerrada");
  }
}

// Ejecutar la función principal
insertDocuments().catch(console.error);

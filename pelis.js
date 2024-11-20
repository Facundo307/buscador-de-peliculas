const fs = require("fs");

function todasLasPeliculas() {
  const archivo = fs.readFileSync("pelis.json");
  const archivoEnTexto = archivo.toString();
  const peliculasEnArray = JSON.parse(archivoEnTexto);
  console.table(peliculasEnArray);
}

function ordenarPorTitulo() {
  const archivo = fs.readFileSync("pelis.json");

  const peliculas = JSON.parse(archivo);

  peliculas.sort((a, b) => {
    const tituloA = a.title.toLowerCase();
    const tituloB = b.title.toLowerCase();

    if (tituloA < tituloB) {
      return -1;
    }
    if (tituloA > tituloB) {
      return 1;
    }
    return 0;
  });

  console.table(peliculas);
}

function encontrarPeliculas(arg) {
  const nombreDePelicula = arg;

  const archivo = fs.readFileSync("pelis.json");

  const peliculas = JSON.parse(archivo);

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const titulo = pelicula.title.toLowerCase();
    return titulo.includes(nombreDePelicula.toLowerCase());
  });

  console.table(peliculasFiltradas);
}

function encontrarPeliculasPorTag(arg) {
  const palabraClave = arg;

  const archivo = fs.readFileSync("pelis.json");

  const peliculas = JSON.parse(archivo);

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const tags = pelicula.tags.map((tag) => tag.toLowerCase());
    return tags.includes(palabraClave.toLowerCase());
  });

  console.table(peliculasFiltradas);
}

module.exports = {
  todasLasPeliculas,
  ordenarPorTitulo,
  encontrarPeliculas,
  encontrarPeliculasPorTag,
};

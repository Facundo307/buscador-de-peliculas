const {
  todasLasPeliculas,
  ordenarPorTitulo,
  encontrarPeliculas,
  encontrarPeliculasPorTag,
} = require("./pelis.js");

function main() {
  const args = process.argv.slice(2);
  const palabraClaveParaMain = args[0];
  if (palabraClaveParaMain == "--sort") {
    ordenarPorTitulo();
  } else if (palabraClaveParaMain == "--search") {
    encontrarPeliculas(args[1]);
  } else if (palabraClaveParaMain == "--tag") {
    encontrarPeliculasPorTag(args[1]);
  } else {
    todasLasPeliculas();
  }
}
main();

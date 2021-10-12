fs = require('fs');
const FICHIER_ENTREES = "entrees.txt";

// On crée le générateur pour lire le fichier
let reader = fileReader(FICHIER_ENTREES);

// Générateur pour lire une par une les lignes du fichier des entrées
function* fileReader(cheminFichier) {
  const lignes = fs.readFileSync(cheminFichier, { encoding: 'utf8' }).split('\n');
  for (ligne of lignes) {
    yield ligne;
  }
}

function readline() {
  return reader.next().value;
}

module.exports = readline;
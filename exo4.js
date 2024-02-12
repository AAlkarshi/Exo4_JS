// Fonction pour générer une couleur aléatoire
function genererCouleurAleatoire() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/* keydown signifie que la fonction fournie sera exécutée chaque fois qu'une touche est pressée*/
document.addEventListener('keydown', function(event) {

    //40 est le code de la touche du bas
    if (event.keyCode === 40) {
    const gridContainer = document.getElementById('gridContainer');

    // Crée un élément div   
        const nouvelleCase = document.createElement('div');

    // L'ajouter avec les attributs CSS
        nouvelleCase.classList.add('Case');

    // Integrer comme élement Enfant
        gridContainer.appendChild(nouvelleCase);

    // générer une STR représentant une couleur aléatoire
        let nouvelleCouleur = genererCouleurAleatoire();
        nouvelleCase.style.backgroundColor = nouvelleCouleur;

    // Click sur une case et devient NOIR
        nouvelleCase.addEventListener('click' , function() {
            nouvelleCase.style.backgroundColor = "black";
        })
    }

    //38 est le code de la fleche du HAUT
    if (event.keyCode === 38) {
        if (gridContainer.lastElementChild) { 
            //remove permet de supp un élement ici , le dernier
            gridContainer.lastElementChild.remove();
        }
    }

   

});


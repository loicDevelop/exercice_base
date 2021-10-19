var read = require("readline-sync");

var premierJoueur
var lastJoueur

function rouletteRusse(){
    console.log('________________________________ BEGIN  ________________________________\n');
    let barrilet =[7]
    let ramdom = Math.random();
    joueur1 = read.question('Quelle le pseudo du premier joueur ?' + "\n");
    joueur2 = read.question('Quelle le pseudo du deuxieme joueur ?' + "\n");

    valideData = false;
    while(!valideData) {
        nbBalle = read.questionInt('Combien de balles dans le barrilet ?' + "\n");
        if( nbBalle < 0 || nbBalle > 8){
            console.log('Vous etes saoule ? saisisez un nombre de balles entre 1 et 7')
        }else{
            for(let i = 0; i < nbBalle ; i++) {
                let index = Math.floor(Math.random()*(nbBalle))+ 1;
                if(barrilet[index] == 1) {
                    i--;
                }else {
                    barrilet[index] = 1;
                    i++;
                }
            }
            valideData = true;
        }
    }
    console.log('Barrilet Chargé');
    console.log('Lancer de pièce...');
 
    console.log(barrilet)
    if(ramdom == 1) {
        premierJoueur = joueur1
        lastJoueur = joueur2
    }else {
        premierJoueur = joueur1
        lastJoueur = joueur2
    }
    console.log(premierJoueur +' commence !');
    
    for(let i = 0; i < barrilet.length ; i++ ) {
        console.log("Balle num "+(i+1)+", ");
        if(i % 2 == 0) {
            console.log(premierJoueur + " : je tente ma chance ! click ");
            if(barrilet[i] == 1) {
                console.log("BOOM , " + premierJoueur + " is dead");
                console.log("La chance vous a sourie " + lastJoueur);
                return;
            }
        }else {
           console.log(lastJoueur + " : je tente ma chance ! click ");
            if(barrilet[i] == 1) {					
                console.log("BOOM , " + lastJoueur + " is dead");
                console.log("La chance vous a sourie " + premierJoueur);
                return;
            }
        }
    }
}

rouletteRusse();
console.log('________________________________  END  ________________________________');

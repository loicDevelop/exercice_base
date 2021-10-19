var read = require("readline-sync");

main();

/* 
Le Juste Prix contre l’ordinateur en 2 manches.
Manche 1 : L’ordinateur choisit un nombre, l’utilisateur le devine.

Manche 2 : L’utilisateur choisit un nombre, l’ordinateur le devine.
*/
function main(){
    console.log('________________________________ BEGIN  ________________________________\n');
    let max = askNumber('Quelle est le valeur Max de votre lot a faire gagne ?')
    justePrix(max);
    console.log('________________________________  END  ________________________________');
}

function askNumber(question){
    let res = read.questionInt(question + "\n");
    if(isNaN(res) == true) {
	    aff('ERROR '+ res +' isn\'t a number');
    }
    return parseInt(res);
}

function justePrix(max){
    const MIN = 1;
    const MAX = max;
    let tentaHumain = 0;
    let tentaPC = 0;
    let nbfind = Math.floor(Math.random()*(MAX-MIN + 1))+ MIN;
    let saisie;
    let minPC;
    let maxPC;
    let trouverHumain = false
    let trouverMachin = false

    console.log('Manche 1 : L’ordinateur choisit un nombre, l’utilisateur le devine')
    console.log('L\'ordinateur à choisie son nombre ...');
    while(! trouverHumain) {
        saisie = askNumber("Entrer un nombre entre "+ MIN +" et " + MAX +" -> ");
        tentaHumain++;
        if( saisie == nbfind) {
            console.log("Bien joué, vous avez trouvé le nombre " + nbfind + " en " + tentaHumain + " tentative !!")
            trouverHumain =true;
        }else {
            if(saisie > nbfind) {
                console.log("C'est plus petit !");
            }else {
                console.log("C'est plus grand !");
            }            
        }
    }

    console.log("Manche 2 : L’utilisateur choisit un nombre, l’ordinateur le devine.")
    nbfind = askNumber("Entrer votre nombre entre "+ MIN +" et " + MAX +" -> ");
    while( nbfind > MAX || nbfind < MIN){
        tentaPC--;
        console.log(" Ne tricher pas !, une tentative de moins pour l'odinateur !");
        nbfind = askNumber("Entrer votre nombre entre "+ MIN +" et " + MAX +" -> ");
    }
    let mid = MAX - MIN
    maxPC = MAX
    minPC = MIN
    while(! trouverMachin){
        mid = parseInt((maxPC+minPC)/2)
        console.log('l\'ordi proprose le numéro '+ mid)
        tentaPC++;
        if( mid == nbfind){
            console.log("Wow, le nombre " + nbfind + "a été trouvé en " + tentaPC + " tentative par le PC !!")
            trouverMachin = true
        }else{
            if(mid > nbfind) {
                maxPC = mid
                console.log("Oups, le nombre cherché est plus petit !");
            }else {
                minPC = mid
                console.log("Oups, le nombre cherché est plus grand !");
            }            
        }
    }
    
    console.log("\n")
    if(tentaPC == tentaHumain){
        console.log("L'humain restera suppérieur aux machines, R.I.P IA")
    }else{
        if( tentaPC > tentaHumain) {
            console.log("L'humain restera suppérieur aux machines, R.I.P IA")
        }else {
            console.log("La machine remplacera t-elle l'humain ?")

        }
    }
}
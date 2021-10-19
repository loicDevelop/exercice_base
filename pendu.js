var read = require("readline-sync");



/* 
Le celèbre jeu du pendu.
*/
var joueurQuestion
var joueurReponse
var mot
var nbChance
var motCache
var lettresDemande = [];

function main(){
    console.log('________________________________ BEGIN  ________________________________\n');
    pendu();
    console.log('________________________________  END  ________________________________');
}

function pendu(){
    let ramdom = Math.random();
    joueur1 = read.question('Quelle le pseudo du premier joueur ?' + "\n");
    joueur2 = read.question('Quelle le pseudo du deuxième joueur ?' + "\n");
    console.log('tirage au sort ...');
 
    if(ramdom == 1) {
        joueurQuestion = joueur1
        joueurReponse = joueur2
    }else {
        joueurQuestion = joueur1
        joueurReponse = joueur2
    }
    mot = read.question(joueurQuestion +', quelle mot souhaitez-vous faire devine ?' + "\n");
    nbChance = read.questionInt(joueurQuestion +', combien de chances laissez-vous a '+joueurReponse+' ?' + "\n");

    mot = mot.toLowerCase();
    motCache = mot.split('');
    for(let i=0; i < motCache.length ; i++ ){
        motCache[i] = '_';
    }

    affichage();
    do{
        demander()
        affichage();
    } while(verification());
}

function affichage() {
    process.stdout.write('\n');
    process.stdout.write('Mot a trouver : ')
    for(let index in motCache){
        process.stdout.write(motCache[index] + ' ');
    }
    process.stdout.write('\n Il vous reste -> ' + nbChance + ' chance(s) \n');
    process.stdout.write('Lettre demande -> \n' );
    for(let index in lettresDemande){
        process.stdout.write(lettresDemande[index] + ' ');
    } 
    process.stdout.write('\n' );
}

function demander() {
    let lettre = read.question(joueurReponse +', Demander une lettre -> \n');
    lettre = lettre.toLowerCase();
    let correctReponse = true;
    let trouver = false;

    for(let index in lettresDemande){
        if( lettresDemande[index] == lettre){
            console.log('idiot, tu as déjà demander la lettre '+ lettre);
            correctReponse = false;
            break;
        }   
    }

    if(correctReponse){
        for(let i in mot) {
            if( lettre == mot[i]){
                motCache[i] = lettre;
                trouver = true;
            }            
        }
        lettresDemande.unshift(lettre);
    } 
    if(!trouver){
        nbChance--;
        if(correctReponse){
            console.log('Dommage '+joueurReponse+ ', '+lettre+' , n\'est pas dans le mot');
        }
    }else{
        console.log('Bien joué '+joueurReponse+ ', lettre '+lettre+' trouvée');
    }
}

function verification(){
    if(nbChance <= 0){
        console.log("\n---------------- \n  FIN DU JEU\n----------------");
        console.log("Joueur "+ joueurReponse+" a perdu !");
        console.log("Joueur "+ joueurQuestion+" WINNER");
        return false;
    }
    if(mot != motCache.join('')){
        return true;
    }
    console.log("\n---------------- \n  FIN DU JEU\n----------------");
    console.log("Joueur "+ joueurQuestion+" a perdu !");
    console.log("Joueur "+ joueurReponse+" WINNER");
    return false;

}

main();
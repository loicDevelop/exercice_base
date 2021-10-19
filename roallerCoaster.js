var read = require("readline-sync");

main();

/* 
Le RoallerCoaster contre l’ordinateur en 2 manches.
Manche 1 : L’ordinateur choisit un nombre, l’utilisateur le devine.

Manche 2 : L’utilisateur choisit un nombre, l’ordinateur le devine.
*/
function main(){
    console.log('________________________________ BEGIN  ________________________________\n');
    let prix = askNumber('Combien coute votre manege par personne en Euro ?');
    let place = askNumber('Combien de places possede votre manege ?');
    let tour = askNumber('Combien de tours fera votre manege ?');
    start(prix,place,tour)
    console.log('________________________________  END  ________________________________');
}

function askNumber(question){
    let res = read.questionInt(question + "\n");
    if(isNaN(res) == true) {
	    aff('ERROR '+ res +' isn\'t a number');
    }
    return parseInt(res);
}

function toString(places, tours, files) {
    return "RollerCoaster (places -> " + places + ", tours ->" + tours + ", files =>" + files + ")";
}

function start(prix, place, tour) {
    let files = [2,3,5,1,4,2];
    let gain = 0;
    console.log(toString(place,tour,prix))
    let nbtours = 1;
    while(tour >= nbtours) {
       console.log("Tour "+ nbtours+":");
        let placesActuel = place;
        let nbGroupe = 0;
        for( let x = 0; x < files.length ; x++) {
            if(files[x] <= placesActuel) {
                console.log(" GRP "+(x+1)+" rentre,");
                placesActuel -= files[x];
                gain += files[x];
                nbGroupe++;
                if(x < files.length-1 && files[x+1] > placesActuel) {
                    break;
                }
            }
        }
        files = actualiserFile(nbGroupe,files);
        nbtours++;
    }
    console.log("\nProfits -> "+ gain + " Euro");
}

function actualiserFile(nbGroupe,files) {
    let tmp;
    for(let i = 0; i < nbGroupe ; i++ ) {
        tmp = files[0];	
        for(let y = 0; y <files.length ; y++) {
            if(y == files.length-1) {
                files[files.length-1]= tmp;
            }else {
                files[y] = files[y+1];
            }
        }			
    }
    process.stdout.write(" (Etat de la files : [");
    for(let u = 0; u < files.length ; u++ ) {
        process.stdout.write(files[u].toString());
        if(u < files.length-1) {
            process.stdout.write(",");
        }
    }
    process.stdout.write("]) \n");
    return files;
}


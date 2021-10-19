var read = require("readline-sync");

main();

function main(){
    aff('________________________________ BEGIN  ________________________________\n');
    //simple();
    //addition();
    //profitOrPerte();
    //plusGrand();
    //commentaryNote();
    calculatrice();
    aff('________________________________  END  ________________________________');
    // ALt + Maj + fleche bas
}


var aff = console.log

/**
 * Alias of console.log( any )
 * @param {*} x 
 */
function aff(x){
    console.log(x);
}

function jump(){
    console.log('\n');
}

/**
 * Return a number by asking client
 */
function askNumber(question){
    let res = read.questionInt(question + "\n");
    if(isNaN(res) == true) {
	    aff('ERROR '+ res +' isn\'t a number');
    }
    return parseInt(res);
}

/**
 * Write an message of welcome 
 */
function simple(){
    aff('Exercice n°01 : Bienvenue');
    var name = 'loic';
    aff(`Bienvenue à vous -> ${name} !`);
    jump();
}
/**
 * Addition of two number
 */
function addition(){
    aff('Exercice n°02 : Addition');
    let x,y;
    x = askNumber('Saisissez le 1er Chifre');
    y = askNumber('Saisissez le 2eme Chifre');
    aff(x + '+' + y + '=' + (x+y));
    jump();
}
/**
 * 
 */
function profitOrPerte(){
    aff('Exercice n°03 : Profit ou Perte')
    let x,y;
    x = askNumber('Saisissez le prix de fabrication');
    y = askNumber('Saisissez le prix de vente');
    if( x <= y ){
        aff('Profit de ' + (y-x) +' €')
    }else{
        aff('Perte de ' + (x-y) +' €')
    }
    jump();
}

function plusGrand(){
    aff('Exercice n°04 : Qui est le plus grand ?')
    let x,y,z;
    x = askNumber('Saisissez le 1er nombre');
    y = askNumber('Saisissez le 2eme nombre');
    z = askNumber('Saisissez le 3eme nombre');
    if(x > y){
        if(x > z){ aff('Le plus grand nombre est : '+ x +' entre [ '+x+' , '+y+' , '+z+' ]')}
        else{  aff('Le plus grand nombre est : '+ z+' entre [ '+x+' , '+y+' , '+z+' ]')}
    }else{
        if(y > z){aff('Le plus grand nombre est : '+ y+' entre [ '+x+' , '+y+' , '+z+' ]')}
        else{ aff('Le plus grand nombre est : '+ z+' entre [ '+x+' , '+y+' , '+z+' ]')}       
    }
    jump();
}

function commentaryNote(){
    aff('Exercice n°05 : Le prof')
    let nbNote = askNumber('Combien de note avez vous ?');
    var notes = [];
    var comment = [];
    let i = 0;
    while( i < nbNote){
        let x = askNumber('Saisissez la note num '+(i+1));
        if(x>=0 && x<=4){
            notes.push(x);
            comment.push('Catastrophique, il faut tout revoir');
        }              
        if(x>=5 && x<=10){
            notes.push(x);
            comment.push('Insuffisant');
        }
        if(x>=11 && x<=14){                    
            notes.push(x);
            comment.push('Peut mieux faire');
        }        
        if (x>=15 && x<=17){
            notes.push(x);
            comment.push('Bien');
        }
        if (x>=18 && x<=20){
            notes.push(x);
            comment.push('Excellent, bon travail');
        }      
        i++;
    }
    aff(notes);
    aff(comment);
    jump();
  }

function calculatrice(){
    aff('Exercice n°06 : Calculatrice');
    aff('use word \'end\' for exit')
    let end = false;
    let nombre = askNumber('Chiffre ?');
    let final = nombre;
    while(end != true){
        aff( 'RESULT : '+final)
        let operateur = read.question('operante ( + , - , * , / ) ' + "\n");
        switch (operateur) {
            case ('+'):
                final = final + askNumber('Chiffre ?')                
                break;
            case ('-'):
                final = final - askNumber('Chiffre ?')                
                break;
            case ('*'):
                final = final * askNumber('Chiffre ?')                
                break;
            case ('/'):
                final = final / askNumber('Chiffre ?')                
                break;
            case ('end'):
                end = true;
                break;
            default:
                aff('erreur de  saisie')
                break;
        }
    }
}

function askNumberCalculatrice(){
    return askNumber('Chiffre ?\n');
}

aff('Exercice n°07 : Somme');
aff('Exercice n°08 : Escalier');
aff('Exercice n°09 : Drôle de pyramide');
aff('Exercice n°10 : Une vraie pyramide');


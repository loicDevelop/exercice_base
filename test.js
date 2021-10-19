var aff = console.log
var read = require("readline-sync");

function askNumber(question){
  let res = read.questionInt(question + "\n");
  if(isNaN(res) == true) {
    aff('ERROR '+ res +' isn\'t a number');
  }
  return parseInt(res);
}

commentaryNote();


main();

function main(){
    console.log('________________________________ BEGIN  ________________________________\n');
    fizzBuzz();
    console.log('________________________________  END  ________________________________');
}

function fizzBuzz(){
    for(let i = 1; i < 100 ;i++) {
        if(i%15 == 0) {
            process.stdout.write('FizzBuzz');
        }else {
            if(i%3 == 0) { process.stdout.write('Fizz'); }            
            else {
                if(i%5 == 0) { process.stdout.write('Buzz'); }                
                else{  process.stdout.write(i.toString()); }
            }
        }        
        if( i % 10 == 9) {
            process.stdout.write('\n');
        }        
    }
}


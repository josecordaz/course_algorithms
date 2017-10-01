var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let num;
rl.on('line', function(line){
    num = parseInt(line);
    console.log(changingMoney(num));
    process.exit();
});

let changes = [10,5,1];

changingMoney = (total) => {
  let coins = 0;
  for(let i = 0; i < changes.length; i++){
    let sub = Math.floor(total / changes[i]);
    if( sub > 0 ){
      coins += sub;
      total -= sub * changes[i];
    }
  }
  return coins;
};

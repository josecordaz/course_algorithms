var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let num;
rl.on('line', function(line){
    let nums = line.split(' ');
    console.log(gcd(parseInt(nums[0]),parseInt(nums[1])));
    process.exit();
});

gcd = (num1,num2) => {
  let res = num1 % num2;
  if(res !== 0){
      return gcd(num2, res);
  } else {
      return num2;
  }
};
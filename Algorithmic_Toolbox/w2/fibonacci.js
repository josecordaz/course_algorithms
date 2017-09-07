var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let num;
rl.on('line', function(line){
    num = parseInt(line);
    console.log(fibonacci2(num));
    process.exit();
});

fibonacci = (num) => {
  if(num <= 1){
    return num;
  } else {
    return fibonacci(num-1)+fibonacci(num-2);
  }
};

fibonacci2 = (num) => {
  let arr= new Array(num);
  arr[0]=0;
  arr[1]=1;
  for(let i=2; i<=num; i++){
    arr[i] = arr[i-2] + arr [i-1];
  }
  return arr[num];
}

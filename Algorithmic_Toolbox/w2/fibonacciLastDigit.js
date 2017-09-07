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
   arr[0] = '0';
   arr[1] = '1';
   for(let i=2; i<=num; i++){
     arr[i] = sum(arr[i-2], arr[i-1]);
   }
   return arr[num].substr(arr[num].length-1,1);
}

sum = (num1, num2) =>{
  if(num1.length > num2.length){
    num2 = Array(num1.length-num2.length+1).join("0")+num2;
    size = num1.length;
  } else {
    num1 = Array(num2.length-num1.length+1).join("0")+num1;
    size = num2.length;
  }
  let res = '';
  let count = 0;
  for(let i = size - 1; i >= 0; i--){
    let parse1;
    let parse2;
    if(num1.substr(i,1)){
      parse1 = parseInt(num1.substr(i,1));
    } else {
      parse1 = 0;
    }
    if(num2.substr(i,1)){
      parse2 = parseInt(num2.substr(i,1));
    } else {
      parse2 = 0;
    }
    let partialSum = parse1 + parse2 + count;
    if(partialSum > 9){
      count = 1;
    } else {
      count = 0;
    }
    res = (''+partialSum).substr((''+partialSum).length - 1,1) + res;
  }
  return res;
}
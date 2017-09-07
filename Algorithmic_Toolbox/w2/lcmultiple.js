var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let num;
rl.on('line', function(line){
    let nums = line.split(' ');
    let a = nums[0];
    let b = nums[1];
    console.log(multiply(a,b));
    //console.log(a*b/gcd(a, b));
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

multiply = (num1, num2) => {
    let size;
    if(num1.length > num2.length){
        size = num1.length;
        num2 = Array(size - num2.length + 1).join('0') + num2;
    } else {
        size = num2.length;
        num1 = Array(size - num1.length + 1).join('0') + num1;
    }
    // console.log('num1 => '+num1);
    // console.log('num2 => '+num2);
    let iterations = size * 2 - 1 ;
    // console.log('iterations => ' + iterations);
    let res = '';
    let count = 0;
    for(let x = 0; x < iterations; x++){
        let y = x + 1 - ( x - ( size - 1) ) * ( Math.floor( x / size ) * 2 );;
        // console.log('y => ' + y);
        let mul = 0;
        for(let m = 0; m <= y - 1; m++ ){
            let index2, index1
            if(x >= size){
                index2 = y - 1 - m;
            } else {
                index2 = size - m - 1;
            }
            if(x >= size){
                index1 = m;
            } else {
                index1 = size - y + m;
            }
            // console.log(index2+', '+index1);
            let p2 = parseInt(num2.substr(index2,1));
            let p1 = parseInt(num1.substr(index1,1));
            mul += p2 * p1 ;
            // console.log(' mul => ' + mul);
        }
        // console.log(' F mul => ' + mul);
        mul += count;
        mul = ''+mul;
        if(mul !== '0'){
            if (mul.length >= 2) {
                res = mul.substr(mul.length-1,1) + res;
                count = parseInt(mul.substr(0,mul.length-1));
            } else {
                res = mul + res;
                count = 0;
            }
        }
        //console.log('res => '+res);
        //console.log('count => '+count);
    }
    if(count){
        return count+res;
    } else {
        return res;
    }
};

division = (num1, num2) => {
    return num1/num2;
}
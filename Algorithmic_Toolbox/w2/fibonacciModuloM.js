var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let num;
rl.on('line', function(line){
    let nums = line.split(' ');
    let n = nums[0];
    let m = nums[1];
    let fibo = fibonacci2(nums[0]);
    console.log( divisionResiduo(fibo, m) );
    process.exit();
});

fibonacci2 = (num) => {
    let num1 = '0';
    let num2 = '1';
    if(num === '0')
        return '0';
    else if(num === '1')
        return '1';
    else {
        for(let i = 2; i <= num; i++){
            let tmp = new String(num2);
            // console.log('num1 => '+num1);
            // console.log('num2 => '+num2);
            num2 = sum(num1,num2);
            num1 = tmp;
            // console.log('    num2 => ' + num2);
        }
    }
    return num2;
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
    //console.log('parse1 ' + parse1);
    if(num2.substr(i,1)){
      parse2 = parseInt(num2.substr(i,1));
    } else {
      parse2 = 0;
    }
    //console.log('parse2 ' + parse2);
    let partialSum = parse1 + parse2 + count;
    //console.log('partialSum ' + partialSum);
    if(partialSum > 9){
      count = 1;
    } else {
      count = 0;
    }
    res = (''+partialSum).substr((''+partialSum).length - 1,1) + res;
  }
  if(count){
      return ''+count+res;
  }
  return res;
}

divisionResiduo = (num1, num2) => {
    let res = '';
    let count = '';
    for(let i = 0; i < num1.length; i++){
        //console.log('try dividing '+count+num1.substr(i,1)+'/'+num2);
        res += ''+Math.floor((count+num1.substr(i,1))/num2);
        //console.log('res => '+res);
        count = ''+(parseInt(count+num1.substr(i,1)) % num2);
        //console.log('count => '+count);
    }
    return count;
}

// console.log(sum('8','5'));
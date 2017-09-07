var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let one;
let numsLine;
rl.on('line', function(line){
  if(one){
    numsLine = line;
    solveProblem();
    process.exit();
  } else {
    one = true;
  }
});

solveProblem = () => {
  let pairs = numsLine.split(" ").map( item => parseInt(item));
  let max1 = maxNumber(pairs);
  let max2 = maxNumber(pairs);
  console.log(max1 * max2);
}

maxNumber = (nums) => {
  let max = nums[0];
  let respI = 0;
  for (var i = 0; i < nums.length; i++) {
    if(nums[i]> max){
      max = nums[i];
      respI = i;
    }
  }
  nums = nums.splice(respI, 1);
  return max;
};

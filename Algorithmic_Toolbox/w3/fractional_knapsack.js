var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let itemsAvailable;
let weight;
let itemsCount = -1;
let array;
let values_weight;
rl.on('line', function(line){
    if(itemsCount === -1){
      let nums = line.split(' ');
      itemsAvailable = parseInt(nums[0]);
      array = new Array(itemsAvailable);
      values_weight = new Array(itemsAvailable);
      weight = parseInt(nums[1]);
      itemsCount++;
    } else {
      // save items values/weigths
      array[itemsCount] = line;
      values_weight[itemsCount] = parseInt(line.split(' ')[0]) / parseInt(line.split(' ')[1]);
      itemsCount++;
    }
    if(itemsCount === itemsAvailable){
      console.log(knapsack());
      process.exit();
    }
});

var knapsack = function(){
  let valueTotal = 0;
  let times = itemsCount;
  while(weight !== 0 && times > 0){
    let maxInd = maxValue_Weight_Ind();
    if(array[maxInd].split(' ')[1] > weight){
      valueTotal += array[maxInd].split(' ')[0] / (array[maxInd].split(' ')[1] / weight);
      weight -= weight; 
    } else {
      weight -= parseInt(array[maxInd].split(' ')[1]);
      array[maxInd] = array[maxInd].split(' ')[0] + ' 0';
      valueTotal += parseInt(array[maxInd].split(' ')[0]);
      values_weight[maxInd] = 0;
    }
    times --;
  }
  let before = Number((valueTotal).toFixed(4))+'';
  let pointPosition = ''+before.indexOf('.');
  if(pointPosition > -1){
    if(before.length - pointPosition < 4){
      let falta = before.length - pointPosition;
      before += Array(falta+1).join('0');
    }
  } else {
    before += '.0000';
  }
  return before;
}

var maxValue_Weight_Ind = function() {
  let maxInd = 0; 
  for(let i = 0; i < values_weight.length; i++){
    if(values_weight[i]>values_weight[maxInd]){
      maxInd = i;
    }
  }
  return maxInd;
}
'use strict';

function getResult(x,y){
  let result = x ** y;

  let num = String(result).split('').map(function(e){return parseInt(e)}).reduce(function(a,b){return a+b});

  console.log(num);

  return result;
}

console.log(getResult(4, 8));
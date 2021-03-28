"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

// function doubleAges(arr){
//   return arr.map(element=> element.age*2);
// }

function doubleAges(arr){
 
  let resu= arr.map(item=>({name:item.name, age:item.age*2}))
  return resu
 }
 

function filterEven(arr){
return arr.filter(num=>num%2===0);
}

function filterOver10(arr) {
  return arr.filter(element=> element.age>10);

}

function findEvenNum(arr){

return arr.find(element=>element%2===0);

}

function findEvenAge(arr){
 return arr.find(element=>element.age%2==0)
}

function includesEvenNum(arr){
  return arr.include(element=>element%2===0)
}

function includesEvenAge(arr) {
  let even = arr.map(user => user.age % 2 === 0 ? true : false);
  
  return even.includes(true);
  }
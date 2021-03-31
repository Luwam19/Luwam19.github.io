"use strict"
 //module.exports = { oddValue, myMap, myreduce,myFilter,multiplyAll,sumValue, };

/**
 * 
 * @param {number} num 
 * @returns{numner}number; 
 */

 function sum(num){
     if(num===1){
         return num;
     }
     else{
         return num+sum(num-1)
     }
 }
/**
 * 
 * @param {number} num 
 * @returns {number};
 */
function factorial(num){
    if(num===0){
        return num;
    }
    else{
        return num * factorial(num-1)
    }
}
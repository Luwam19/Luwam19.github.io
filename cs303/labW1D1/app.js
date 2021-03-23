"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */ 
//module.exports = {maxOfThree, sum, multiply };  //add all of your function names here that you need for the node 
//exports.maxOfThree = maxOfThree;


/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if (a > b && b > c) {return a;}
    if (a > c && c > b) {return a;}
    if (b > a && b > c) {return b;}
    if (b > c && b > c) {return b;}
    if (c > a && a > b) {return c;}
    if (c > b && b > a) {return c;}

}
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const element of arr){
        tot += element;
    }

    return tot;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for (const number of arr){
        tot *= number;
    }
    return tot;

}
 /**
  * 
  * @param {string} arr of names
  * @returns {string} longest name;
  */
function findLongestWord(arr){
    let longest=0;
    let longname ="";

    for(let long of arr){
        if(long.length > longest){
        longest=long.length;
        longname=long;
        }
    }
    return longname;
}

/**
 * 
 * @param {array} arr to be reversed 
 * @returns {array}after reversed;
 */
function reverseArray(arr){
    let newarr=[];
    let len = arr.length
    for(let i= len;i>0;i--){
        newarr.push(arr.pop(i))
    }
    return newarr;
}

/**
 * 
 * @param {array} arr to be revesed 
 * @returns {array} after reversed;
 */
 function reverseArrayInPlace(array){
    let l=array.length;
    for (let i = 0; i <l/2 ; i++) {
    let temp=array[i];
    array[i]=array[l-1-i];
    array[l-1-i]=temp;
     
     }
    return array;
    }


/**
 * 
 * @param {array} studentAnswer 
 * @param {array} correctAnswers ;
 * @returns 
 */
function scoreExams(studentAnswer,correctAnswers){
    let score=[]
    for(let eachAnswer of studentAnswer ){
    let answer=0
    for(let i=0;i<eachAnswer.length;i++){
    if(eachAnswer[i]===correctAnswers[i])
    answer++; 
    }
    score.push(answer)
    }
    return score;
   }
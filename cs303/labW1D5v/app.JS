"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator,copyAndSort,sortByAge,getAverage,getAverageAge }; //add all of your function names here that you need for the node mocha tests

// /**
//  * 
//  * @param {array}arr  is the array that we pass
//  * @param {number}a the staring number
//  * @param {number}b the ending number;
//  * @returns {array} the result;
//  */
// function filterRange(arr, a, b) { 
//     return arr.filter(item => (item >= a && item <= b));
//   }

//  /**
//   * 
//   * @param {array}arr that we pass;
//   * @param {number}a number of index
//   * @param {number} b number of index
//   * @returns{array} the result;
//   */
//   function filterRangeInPlace(arr, a, b) {
//     for(let i=0;i<arr.length;i++){
//     if(a <= arr[i]&&arr[i]>=b){
//     arr.splice(i,1);
//     i--;
//     }
//     }
    
//     }

/**
 *  calculator
 */
  function Calculator() {

        this.methods = {
          "-": (a, b) => a - b,
          "+": (a, b) => a + b
        };
      
        this.calculate = function(str) {
      
          let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
      
          if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }
      
          return this.methods[op](a, b);
        };
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
      }
  
/**
 * 
 * @param {array} we pass the array; 
 * @returns{array} expecting new array with the value of unique;
 */
function unique(arr) {
let newarr=[];
for(let element of arr){
   if(newarr.includes(element)){
       continue;
   }
   else {
       newarr.push(element);
   }

    }
    return newarr;
}
  

/**
 * 
 * @param {array}array about object; 
 * @returns{object}  returned sorted array by id
 */
  function groupById(array) {
        return array.reduce((obj, value) => {
          obj[value.id] = value;
          return obj;
        }, {})
      }

     /*
       * 
       * @param arr an array 
       * @returns{arr};
       */
      function copyAndSort(arr){
          let sliced = arr.slice();
      
          return sliced.sort((a,b)=>a-b);
      }
/**
 * 
 * @param {array}arr  
 * @returns{array} sorrted array by age 
 */
    function sortByAge(arr){
       return arr.sort((a,b)=> a.age - b.age) ;
    }  

/**
 * 
 * @param {array}arr
 * @returns {number} number;
 */
    function getAverage(arr){
        let sum=0;
        
        for(let element of arr){
            sum+=element.age
            
        }
        return sum/arr.length;
    }
/**
 * 
 * @param {array}users 
 * @returns {number}number;
 */
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
      }
      
//"use strict"
// const assert = require("assert");  //always need this with node
// const myExports = require("./myRecursion.js");
// const sum = myExports.sum;
// const factorial = myExports.factorial;
// const fibonacchi = myExports.fibonacchi;

  
describe("numbers using recursion",function(){
it("get a sum number",function (){
    assert.equal(sum(5),15)
})

it("get a factor of a number",function (){
    assert.equal(factorial(5),120)
})

it("fibonacchi of a number",function (){
    assert.equal(fibonacchi(8),21)
})


})






// describe("higher oder practice", function () {
//     // beforeEach(function () {
//     //     numArray = [1, 2, 3, 4, 5];
//     // })
//     it("multiply each element", function () {
//         assert.deepEqual(myMap([1, 2, 3, 4, 5], multiplyAll), [1, 4, 9, 16, 25])
//         assert.deepEqual(myMap([0, 2, 5, 4, 1], multiplyAll), [0, 4, 25, 16, 1])
 
//     })
 
//     it("it filters odd elements", function () {
 
//         assert.deepEqual(myFilter([1, 2, 3, 4, 5], oddValue), [1, 3, 5])
//         assert.deepEqual(myFilter([11, 1, 71, 4, 5], oddValue), [11,1, 71, 5])
//     })
 
//     it("it sums values", function () {
 
//         assert.strictEqual(myreduce([1, 2, 3, 4, 5], sumValue), 15)
//         assert.strictEqual(myreduce([11, 9, 20, 10, 5], sumValue), 55)
//     })
 
// })
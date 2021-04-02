//"use strict"
// const assert = require("assert"); 
// const myExports = require("./recursiveLinkied.js");
// const printListReverse=myExports.printListReverse;
// const printList=myExports.printList;

let list;
describe("Recursion print of linked list", function () {
    it("print Linked list of names", function () {

        list = {
            name: "luwam",
            next: {
                name: "Chala",
                next: {
                    name: "Luwam",
                    next: {
                        name: "Mesay",
                        next: null,
                    }
                }
            }
        };
        assert.deepEqual(printList(list), "luwamChalaLuwamMesay")
    })

    it("Reverse name ", function () {
        assert.deepEqual(printListReverse(list), "MesayLuwamChalaluwam")
    })
});
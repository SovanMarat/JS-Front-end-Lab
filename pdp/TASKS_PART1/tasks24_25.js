"use strict";

// Циклы в JS #24
console.log('Циклы в JS #24');

const iterationAPI = {

    initialProps: {
        limitNum:20,
        startNum:2
    },

    getEvenNumbers: () => {
        console.log('getEven');
        // for (let i = 2; i < 11; i += 2) {  // v1
        //     console.log(i);
        // }
        for (let i = 2; i < 11; i++) {  // v2
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    },

    replacesFor: () => {
        console.log('replacesFor');
        let i = 0;
        while (i < 3) {
            console.log(i);
            i++;
        }
    },
    getEnterMoreHundred: () => {
        console.log('getEnterMoreHundred');
        let i = 0;
        do {
            i = prompt("Введите число более 100", 0);
        }
        while (i <= 100 && i);
    },

    getPrimeNumbers: function(n=this.initialProps.limitNum, startNum=this.initialProps.startNum) {
        console.log('getPrimeNumbers');

        for (let i = startNum; i < n; i++) {
            let count = 0;
            for (let j = startNum; j < i; j++) {
                if (i % j === 0) {
                    count += 1;
                }
            }
            if (count === 0) {
                console.log(i);
            }
        }
    },
}

iterationAPI.getEvenNumbers();
iterationAPI.replacesFor();
iterationAPI.getEnterMoreHundred();
iterationAPI.getPrimeNumbers(10);


// [Object/Fn] Write custom fn clone #25
console.log('[Object/Fn] Write custom fn clone #25');

let animal = {
    name: "animal",
    age: 10,
    childs: ["child 1", "child 2"]
    };
    
    let cat = clone(animal);
    cat.name = "cat";
    cat.age = 5;
    cat.childs.push("child 3");

    
    console.log(cat.name, cat.age); // cat 5
    console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]
    
    console.log(animal.name, animal.age); // cat 5
    console.log(animal.childs); // [ 'child 1', 'child 2', 'child 3' ]
    
    function clone(obj) {
    // return obj;

    // return Object.assign({}, obj); // неглубокая копия 
   
    // let dst = {};
    // for (let prop in obj) {
    //   if (obj.hasOwnProperty(prop)) {
    //     dst[prop] = obj[prop];
    //   }
    // }
    // return dst; // неглубокая копия 
    // return {...obj}; // неглубокая копия 

    return JSON.parse(JSON.stringify(obj)); // глубокая копия
    }
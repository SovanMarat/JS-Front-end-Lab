"use strict";

// [cycle] #27 

// v1
for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++ ) {
        if(i===5 && j===5) {
           i=10;
           j=10;
        continue;
        }
        console.log(i,j)
    }
}
// v2
metka: for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++ ) {
        if(i===5 && j===5) {
            break metka;
        }
        console.log(i,j)
    }
}

// [object] - work with key-value pairs #28 
const addName = (a,b,c)=> {
a[b]=c;
return a;
}
console.log(addName({'fort': 100}, "Brutus", 300));


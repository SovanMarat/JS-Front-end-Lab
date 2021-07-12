"use strict";

// [Object] - Make a Circle with OOP #29

class Circle {
    constructor(r) {
        this.r=r;
    }
    getArea (){
        return Math.PI*this.r**2;
    }
    getPerimetr (){
        return 2*Math.PI*this.r;
    }
}
let circy = new Circle(4.44);
console.log(circy.getArea());
console.log(circy.getPerimetr());

// [Object] - Get Sum of People's Budget #30

const getBudgets = (data) => {
    return data.reduce((prev, current)=> prev+current.budget, 0)};
    
    console.log( getBudgets([{name: 'James', age: 22, budget: 23000},
        {name: 'Steve', age: 32, budget: 40000},
        {name: 'Martin', age: 16, budget: 2700}]
    ));
    
    console.log( getBudgets([{name: 'James', age: 22, budget: 29000},
        {name: 'Steve', age: 32, budget: 32000},
        {name: 'Martin', age: 16, budget: 1600}]
    ));

    
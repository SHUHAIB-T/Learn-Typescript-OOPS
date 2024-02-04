"use strict";
/**
 * classes and objects
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
let person1 = new Person("amarnath", 20);
const person2 = new Person("Aswin ", 24);
person1.greeting();
person2.greeting();
class Student extends Person {
    constructor(name, age, std) {
        super(name, age);
        this.std = std;
    }
    sayStd() {
        console.log(`${this.name} is studiying in ${this.std}th standard`);
    }
}
const student1 = new Student("Hisham", 20, 10);
student1.greeting();
student1.sayStd();

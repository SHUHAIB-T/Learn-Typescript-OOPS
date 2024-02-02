/**
 * classes and objects
 */

class Person {
  age: number;
  name: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greeting(): void {
    console.log(`Hello ${this.name}`);
  }
}

let person1 = new Person("amarnath", 20);
const person2 = new Person("Aswin ", 24);
person1.greeting();
person2.greeting();

class Student extends Person {
  std: number;

  constructor(name: string, age: number, std: number) {
    super(name, age);
    this.std = std;
  }

  sayStd(): void {
    console.log(`${this.name} is studiying in ${this.std}th standard`);
  }
}

const student1 = new Student("Hisham", 20, 10);

student1.greeting();
student1.sayStd();

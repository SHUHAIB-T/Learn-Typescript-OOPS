/**
 * Example for encapsulation
 */

class BankAccount {
  private balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }

  public checkBalance(): number {
    return this.balance;
  }
}

let account = new BankAccount(1000);
console.log(account.checkBalance());

// decorators in typescript Logging
function logMethod(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`method ${name} is calling with argumets ${args}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class MyClass {
  @logMethod
  sayHello(message: string) {
    console.log(message);
  }
}

const myInstance = new MyClass();
myInstance.sayHello("Hello world!");

// example for getter and setter method
class Foo {
  private _bar: boolean;

  constructor(bar: boolean) {
    this._bar = bar;
  }

  get bar(): boolean {
    return this._bar;
  }

  set bar(newBar : boolean){
    this.bar = newBar;
  }
}

const myFoo = new Foo(true)
const myBar = myFoo.bar //return the value of the property _bar
console.log(myBar); 
myFoo.bar = false; //settig new value


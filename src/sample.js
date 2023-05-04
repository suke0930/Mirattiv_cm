// sample.js ファイル
export const name = 'John';
export function sayHello() {
    console.log(`Hello, ${name}!`);
}
export class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(`My name is ${this.name}.`);
    }
}
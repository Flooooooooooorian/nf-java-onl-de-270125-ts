import {Product} from "./Product.ts";
import {ProductDto} from "./Product.ts";


console.log("Hello World");

let name: string = "florian";

console.log(name)

name = "dominic";

console.log(name)

let age: number = 755885;

console.log(age + 48165);

let isCoach: boolean = true;

console.log(isCoach)

let myObject: { name: string, age: number } = {age: 28, name: "Florian"}

console.log(myObject)
console.log(myObject.name)

let myArray: string[] = ["Florian", "Dominic"]

console.log(myArray)
console.log(myArray[0])

const constant: string = "nf-java-onl-de-270125"

console.log(constant)


console.log("---------------")

if (age === 10) {
    console.log("Age is lower that 10")
} else {
    console.log("Age is higher that 10")
}

if (0 == false) {
    console.log("TRUE")
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}


let myValue1: null = null;
let myValue2: undefined = undefined;

console.log(myValue1)
console.log(myValue2)


//truthy & falsy


if (1) {
    console.log("truthy")
} else {
    console.log(`falsy ${name} test`)
    console.log(`falsy ` + name + ` test`)
}

console.log(5 / 0)

let myValue3: any = 123

console.log("---------------")

function myFunction(myNumber: number, myString: string): string {
    console.log(myString)
    console.log(myNumber)
    return myString + myNumber
}

const result: string = myFunction(13, "MyFunction")
console.log(result)

const myOtherFunction = (myNumber: number, myString: string): string => {
    console.log(myString)
    console.log(myNumber)
    return myString + myNumber
}

console.log(myOtherFunction(15, "MyOtherFunction"))


const names: string[] = ["Florian", "Dominic", "", "Martin"]

const removedElement = names.pop()

console.log(removedElement)

if (removedElement !== undefined) {
    console.log(names)
}

const newNames = names.filter(element => element)
    .map(element => element.toLocaleLowerCase())
    .map(element => element.charAt(0))
    .some(element => element === 'f')

console.log(newNames)

console.log("--------------")

function myFunction2(myNumber: number, myString: string): string {
    console.log(myString)
    console.log(myNumber)
    return myString + myNumber
}

function myFunction45(myNumber: number, myString: string): string {
    console.log("GANZ ANDERS")
    return myString + myNumber
}

// const function2: (myNumber: number, myString: string) => string = myFunction2;

type MyFunctionType = (myNumber: number, myString: string) => string

function a(functionParameter: MyFunctionType) {
    console.log(functionParameter(1, "f"));
}

a(myFunction2)
a(myFunction45)

const product1: Product = {id: "123", name: "Apple", price: 1.5, description: "Lecker roter Apfel", amount: 10}
const product2: Product = {id: 123, name: "Apple", price: 1.5, amount: 10}

const productToSave: ProductDto = {name: "Banana", price: 0.9, description: "Gelb", amount: 5}

function saveProduct(product: ProductDto) {
    // console.log(product.id)
    console.log(product)
}

saveProduct(product1);

function updateProduct(product: Product) {
    console.log(product)
}

// console.log(JSON.stringify(product1))




console.log("Hello World");

let name: string = "florian";

console.log(name)

name = "dominic";

console.log(name)

let age: number = 755885;

console.log(age + 48165);

let isCoach: boolean = true;

console.log(isCoach)

let myObject: {name: string, age: number} = {age: 28, name: "Florian"}

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
}
else {
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
}
else {
    console.log("falsy")
}

console.log(5 / 0)

let myValue3: any = 123



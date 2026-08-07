const greet1 = (): void => {
    console.log("Welcome to TypeScript");
};

greet1();

const add1 = (a: number, b: number): number => {
    return a + b;
};
console.log("Addition:", add1(10, 20));

const square1 = (num: number): number => {
    return num * num;
};

console.log("Square:", square1(5));

//Default Parameters
const welcome1 = (name: string = "Guest"): void => {
    console.log("Hello", name);
};

welcome1("Priya");
welcome1();

//Optional Parameters
const student1 = (name: string, age?: number): void => {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    } else {
        console.log("Age not provided");
    }
};

student1("Sai", 20);
student1("Priya");

//Rest Parameter
const total1 = (...marks: number[]): number => {
    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }

    return sum;
};

console.log("Total:", total1(90, 80, 95));
console.log("Total:", total1(50, 60));
//shorthand arrow function
const roomno = (room:number) : number=> room;
console.log(roomno(313));

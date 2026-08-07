
// Arrow Function

const greet1 = (): void => {
    console.log("Welcome to TypeScript");
};

greet1();

// Arrow Function with Parameters

const add1 = (a: number, b: number): number => {
    return a + b;
};
console.log("Addition:", add1(10, 20));

// Arrow Function with One Parameter

const square1 = (num: number): number => {
    return num * num;
};

console.log("Square:", square1(5));

// Arrow Function with Default Parameter

const welcome1 = (name: string = "Guest"): void => {
    console.log("Hello", name);
};

welcome1("Lahari");
welcome1();

// Arrow Function with Optional Parameter

const student1 = (name: string, age?: number): void => {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    } else {
        console.log("Age not provided");
    }
};

student1("Sai", 20);
student1("Lahari");

// Arrow Function with Rest Parameters

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
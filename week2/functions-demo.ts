
function add(a: number, b: number): number {
    return a + b;
}

console.log("Addition:", add(10, 20));


function square(num: number): number {
    return num * num;
}

console.log("Square:", square(5));

function greet(name: string = "Guest"): void {
    console.log("Welcome", name);
}

greet("Lahari");
greet();


function student(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    } else {
        console.log("Age not provided");
    }
}

student("Sai", 20);
student("Lahari");


function total(...marks: number[]): number {
    let sum: number = 0;

    for (let mark of marks) {
        sum += mark;
    }

    return sum;
}

console.log("Total:", total(90, 85, 95));
console.log("Total:", total(70, 80));
console.log("Total:", total());

console.log(add(5, 10));
console.log(square(8));

greet("AIML");
greet();

student("Ravi", 22);
student("Priya");

console.log(total(10, 20, 30, 40));
console.log(total(100));

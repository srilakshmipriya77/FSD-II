const greet1 = (): void => {
    console.log("Welcome to TypeScript!");
};
greet1();

const add1=(a:number , b:number): number =>{
    return a+b;
}
console.log("Addition of 5 and 10: "+add1(5,10));

const greet2=(name:string = "Guest"): void=>{
    console.log(`Hello, ${name}! Welcome to Week 2 of FSD lab.`);
}
greet2("Priya");
greet2();

const studentDetails=(name: String, age?:number) : void =>{
    console.log(`Student Name: ${name}`);
    if(age !== undefined){
        console.log(`Student Age: ${age}`);
    }
    else{
        console.log("Age not provided.")
    }
}
studentDetails("Priya", 21);
studentDetails("Ravi");

const averageMarks = (...marks: number[]): number => {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum / marks.length;
};
console.log("Average Marks:", averageMarks(85, 90, 78, 92, 88));

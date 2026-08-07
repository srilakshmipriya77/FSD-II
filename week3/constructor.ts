class Employee{
    name: string;
    salary: number;
    department: string;
    constructor(name:string);
    constructor(name: string, salary: number, department:string);
    constructor(name: string, salary?: number, department?: string){
        this.name= name;
        this.salary= salary ?? 20000;
        this.department= department ?? "Trainee";
    }

    display():void{
        console.log("-------------------------");
        console.log("Name: "+this.name);
        console.log("Salary: "+this.salary);
        console.log("Department: "+this.department);
        console.log("-------------------------");
    }
}

const emp1=new Employee("Priya");
const emp2=new Employee("Ravi", 45000, "Full Stack Development");

emp1.display();
emp2.display();

console.log("After updating salary and department for emp1...");
emp1.salary=100000;
emp1.department="AIML";
emp1.display();

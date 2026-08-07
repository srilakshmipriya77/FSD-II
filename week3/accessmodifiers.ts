
class Employee1 {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

const emp = new Employee1("Lahari", 50000, "AIML");

// Public member
console.log(emp.name);

// Public method
emp.display();

// Private member
// console.log(emp.salary);      // ❌ Error

// Protected member
// console.log(emp.department);  // ❌ Error
let userName:string = "John"; //string: Represents textual data.
let userAge:number = 25; //number: Represents numeric values.
let isMember:boolean = true; //boolean: Represents a logical values, true or false.
console.log(`Datatype of userName is --> ${typeof userName}`);
console.log(`Datatype of userAge is --> ${typeof userAge}`);
console.log(`Datatype of isMember is --> ${typeof isMember}`);

function displayUserProfile(name: string, age: number, isMember: boolean){
    console.log(`User Name: ${name}`);
    console.log(`User Age: ${age}`);
    console.log(`Is Member: ${(isMember)? "Active":"Inactive"}`);
}

displayUserProfile(userName, userAge, isMember);
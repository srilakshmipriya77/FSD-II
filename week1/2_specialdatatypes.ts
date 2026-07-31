let anyVar : any = "Hello, World!";
console.log(`Datatype of anyVar after the first assignment --> ${typeof anyVar}`);
anyVar= 10;
console.log(`Datatype of anyVar after the second assignment --> ${typeof anyVar}`);

let unknownVar : unknown = "Hello, unknown!";
// console.log(unknownVar.length);  Error: Object is of type 'unknown'.
if(typeof unknownVar === "string"){
    console.log(`Length of unknownVar is --> ${unknownVar.length}`);
}
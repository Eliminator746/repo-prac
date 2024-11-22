//---------------------------TYPE CASTING + ARRAY + W3 EXERCISES ----------------------------------

let name1 : string="23";
let name2=parseInt(name1)
console.log(typeof name2)


type obj={
    name:string;
    age:number;
  }
  
   const Employee :obj ={
    name:"hary potter",
    age:21
  }
  
  console.log(Employee.name)

//---------------------ARRAY-----------------------
// Declare an array of strings
const colors: string[] = ["Red", "Green", "Blue", "Orange"];
// Add elements to the array
colors.push("White");
colors.push("Pink");
// Remove elements from the array
colors.pop(); // Removes the last element ("Orange")

//---------------------------------------------------

// Declare a variable 'isNull' and assign it null
let isNull: null = null;

// Declare a variable 'isUndefined' and assign it undefined
let isUndefined: undefined = undefined;

// Print the values of the variables
console.log("isNull:", isNull);
console.log("isUndefined:", isUndefined);

//---------------------------------------------------

//https://www.w3resource.com/typescript-exercises/typescript_advance_types_exercises.php

//---------------------------------------------------
//1.

type StringNumber=string|number;
let result : StringNumber ="10";

function funtoos(x :StringNumber | boolean ) : void{
    console.log(typeof x);
    console.log(typeof result);
}

funtoos(true)

//---------------------------------------------------
//2.

function fun2(param1 : boolean , param2: number) : boolean | number{
    const y=false;
    return y
}

console.log(fun2(true,13));

//---------------------------------------------------
//3.

interface Car {
    make : string;
    model: string;
}

//Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number.
type Bus= Car & {
    payloadCapacity : number;
}

// Create a type 'Vehicle' that represents either a 'Car' or a 'Bus' using a union type
type Vehicle = Car | Bus;

// Create instances of 'Car' and 'Bus'
const car: Car = { make: "Audi", model: "A4" };
const bus: Bus = { make: "Vovo", model: "XC60", payloadCapacity: 20 };

// Create an array of 'Vehicle' type
const vehicles: Vehicle[] = [car, bus];

// Iterate through the 'vehicles' array and print details
vehicles.forEach((vehicle) => {
  console.log(`Make: ${vehicle.make}`);
  console.log(`Model: ${vehicle.model}`);
  if ("payloadCapacity" in vehicle) {
    console.log(`Payload Capacity: ${vehicle.payloadCapacity}`);
  }
  console.log("--------");
});

//---------------------------------------------------
//5.


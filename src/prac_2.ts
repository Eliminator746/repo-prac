type UserX = {
    firstName: string;
    lastName: string;
    age: number
}

// interface UserX {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }


//.................. UNION ............
//Either a String or a number

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202


//.................. INTERSECTION ............
//A type that has every prop. of Employee and Manager

type Employee = {
    name: string;
    startDate: Date;
};

interface Manager {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};

//---------------------------------------------

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));

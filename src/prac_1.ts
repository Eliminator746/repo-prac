const user = {
	firstName: "harkirat",
	lastName: "singh",
	// email: "email@gmail.com",
	age: 21
}

interface User{
    firstName:string;
    lastName:string;
    email?:string;
    //means you can give email as an input or not , No problem
    age:number;
}

function isLegal1(user: User){

    if(user.age >18){
        return true
    }
    return false;
}

console.log(isLegal1(user));


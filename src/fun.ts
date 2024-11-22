//param : type
function fun(firstName : String){
    console.log( "Hello " + firstName);
    return 1;
}
fun("Natshin")

function sum(x:number , y:number){
    console.log("sum : "+ (x+y));
}
sum(10,20)


//type inference 
// function isLegal(age:number){
//     if(age>18)
//        return "Legal"
//     else
//         return "Not Legal" 
// }

//Return type 
function isLegal(age:number) : String{
    if(age>18)
       return "Legal"
    else
        return "Not Legal" 
}
console.log(isLegal(19));

//Function type
//fn : ()=> number
function loader(fn : ()=> void){
     setTimeout(fn,2000)

}

loader(()=>{console.log("Calling from another function")})


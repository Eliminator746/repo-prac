//----------------------ENUM + GENERIC ----------------


enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
    // do something.

    console.log(Direction.Up);
    console.log(Direction.Down);

}

doSomething(Direction.Up)

//--------------------Uses Cases of enum --------------------------------
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })


//---------------------GENERIC-------------------------------
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.


function fun3(arr: (number | string)[]) {
    return arr[0]
}

const el = fun3([1, 2, 3]);
const el2 = fun3(["harkirat", "singh"]); //harkirat

// console.log(el2.toUpperCase()); 
//--> el2 is returning string but we are not able to perform task in string. and why is that?
//Because el2 returns string|number. Even though el2 value came as string but TS is not able to infer that.

//This can be solved by GENERIC



//T : means anything i.e can be of any type
function fun4<T>(arr: T[]){
    return arr[0]
}

const el3 = fun4([1, 2, 3]);
const el4 = fun4(["harkirat", "singh"]); //harkirat
const el5 = fun4(["harkirat", "singh",1,2]); //string | number

console.log(el4.toUpperCase());
// console.log(el5.toLowerCase()) --> it is wrong as el5 is having string and number 

//--------------------

interface user {
    name:String;
}

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el6 = getFirstElement<user>([{name:"Tanjiro"},{ name: "ramanSingh"}]);
console.log(el6.name.toLowerCase())

const el7=getFirstElement([1,2,3])
const el8=getFirstElement([true,false])
console.log(el7);
















// enum Direction {
//     Up="up",
//     Down="down",
//     Left="left",
//     Right="right"
// }
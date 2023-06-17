//1 function defination

// function name are alwa written in camleCase
function myFunctionA(n) { // n is formal argument
    //function body
    console.log('hello ' + n + 'Everyone How are you');

    //function return something
    return n;
}

//2 function Calling

let x = myFunctionA('Ankit Tanwar'); //Ankit Tanwar is a actual argument



//function defination 

let myFunctionB = (name1) => {
    //function body
    console.log('hello' + name1 + ' for new way')

}

// function calling
myFunctionB(" name1");





// Array
// spread/ copy Operator

let a = ['Ankit', 'Tanwar', "Pravenn", `Abhi`, "lokesh"];
console.log(a);

let b = [...a, "kartik", 'Avi', 'Avinash', "arraow"];
console.log(b);


// An arrow function expression is a compact alternative is a traditional

let x1 = ["An", 'Arrow'];
let x2 = [...x1, 'function', "expression"];
let x3 = [...x2, "is", `a`, "compact", "alternative"];
let x4 = [...x3, "is", 'a', "traditional"];

console.log(x4);




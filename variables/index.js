//loosly-typed we dont need to mention type of variable

//var let const


var a = 3
var a = 4

console.log(a) // 4 as var variables can be redeclared + updated

let b = 3
let b = 4

console.log(b) // Syntax Error as let variables cannot be redeclared

// If we just do, it will work because it can be updated
b = 4 

const c = 3
const c = 4

console.log(c) // Syntax Error as const variables cannot be redeclared or updated

const d

// Will this throw an error? Go through the table and try to find the answer.

//Yes missing initialiser in const declaration
let a = 4;
const b =6;
var c= 'abc'

const array = [a,b,c]



const words = ['react', 'script', 'interview', 'style', 'javascript']


//Map------------------------------------
let result = array.map((arr,i)=>{
// console.log(arr)
// console.log(i)
    return arr
})

//Filter --------------------------------


let filtered = words.filter((word)=>{
    if(word.length > 6){
        return word
    }
})

// console.log(['a', 'bb', 'ccc'].filter(str => str.length))

// console.log(['one', 'two', 'three'].filter(() => true));

// console.log(['hello', '', 'world', '', '!'].filter(Boolean))

// console.log([10, 20, 30].filter((num, index) => index))

// console.log([1, 2, 3].map(parseInt));


// let arr = [1, 2, 3];
// let result1 = arr.map((num) => {
//   if (num > 1) return num;
// });
// console.log(result1);

// undefined , 2 , 3



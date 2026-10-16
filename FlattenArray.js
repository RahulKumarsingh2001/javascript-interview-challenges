// 1. Flatten a Nested Array

// Convert a deeply nested array into a single-level array without using .flat(Infinity).
// const arr = [1, [2, [3, 4]], [5, [6]]];
// // Expected: [1, 2, 3, 4, 5, 6]



const arr = [1, [2, [3, 4]], [5, [6]]];


// using method call 
result = arr.flat(Infinity);
console.log(result);



// using recurssion
function flattenArray(arr){
    let result = [];
    for(let elem of arr){
        if(Array.isArray(elem)){
            result = result.concat(flattenArray(elem))
            // console.log(result)
        }else{
            result.push(elem)
        }
    }
    return result
}
console.log(flattenArray(arr));



// using reduce()
function flattenArrayReduce(arr){
    return arr.reduce((result, element) => {
        if(Array.isArray(element)) {
            return result.concat(flattenArrayReduce(element));
        }
        return result.concat(element)
    }, [])
}
console.log(flattenArrayReduce(arr))
// Implement a Deep Equality Checker

// Write deepEqual(a, b) to check whether two nested objects have the same structure and values.
// deepEqual(
//   { a: 1, b: { c: 2 } },
//   { a: 1, b: { c: 2 } }
// ); // true

// deepEqual({ a: 1 }, { a: 2 }); // false
// Challenge: Don't use JSON.stringify(). Consider nested arrays and null.







a = { a: 1, b: { c: 2 } };
b = { a: 1, b: { c: 2 } };




// JSON.stringify() method
function deepEqual(a,b){
    return JSON.stringify(a) === JSON.stringify(b);
}
console.log(deepEqual(a,b));




/**
 * 
 * Time complexity: O(n)
 */
// Recursive solution
function deepEquals(a,b){
    if(Object.is(a,b)){
        return true;
    }
    if( a === null || b === null || typeof a !== 'object' || typeof b !== 'object'){
        return false
    }
    if(Array.isArray(a) !== Array.isArray(b)){
        return false
    }
    const keyA = Object.keys(a);
    const keyB = Object.keys(b);
    if(keyA.length !== keyB.length){
        return false;
    }

    for(let key of keyA){
        if(!Object.hasOwn(b, key) || !deepEquals(a[key],b[key])){
            return false
        }
    }
    return true;
}
console.log(deepEquals(a,b));

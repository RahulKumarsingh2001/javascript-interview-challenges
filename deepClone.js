// Deep Clone an Object

// Create a deep copy of a nested object without using JSON.parse(JSON.stringify(obj)) or structuredClone().
// const user = {
//   name: "Rahul",
//   address: { city: "Bengaluru" },
//   skills: ["JS", "Node.js"]
// };

 // Changing the clone's address or skills
 // must not change the original object.



/**
* Cloning:- it means create a copy of an existing object    
* 
* Your challenge is we copy every thing so that if we change a copy data
* original data will not change.
*/ 




// it contain string, nested object, nested array
const user = {
    name: "Rahul",
    address: {
        city: "Bengaluru"
    },
    skills: ["JS", "Node.js"]
};


/**
 * Time complexity: O(n)
 * Space complexity: 0(n)
 */
// Deep clone using recursion
function deepClone(obj){
    // Return primitive values directly
    if(obj === null || typeof obj !== 'object'){
        return obj
    }

    // Create an array or an object
    const clone = Array.isArray(obj) ? [] : {};

    // Copy each property recursively
    for(let key in obj){
        if(Object.hasOwn(obj,key)){
            clone[key] = deepClone(obj[key])
        }
    }
    return clone;
}

const clonedUser = deepClone(user);

clonedUser.address.city = "Mumbai";
clonedUser.skills.push("React");

console.log(clonedUser.address.city); 
console.log(user.address.city);       

console.log(clonedUser.skills); 
console.log(user.skills);      
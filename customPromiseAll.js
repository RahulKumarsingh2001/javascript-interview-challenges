// Implement a Custom Promise.all()
// Promises · Async JS

// Implement your own version of Promise.all() without calling the built-in method.
// const result = await myPromiseAll([
//   Promise.resolve(10),
//   20,
//   Promise.resolve(30)
// ]);

 // Expected: [10, 20, 30]



const result = await Promise.all([
    Promise.resolve(10),
    20,
    Promise.resolve(30)
]);
console.log(result);



function myPromiseAll(promise){
    return new Promise((resolve, reject) => {
        const result = [];
        let completed = 0;
        const items = Array.from(promise);
        if(items.length === 0){
            resolve(result);
            return;
        } 
        items.forEach((item, index) => {
            Promise.resolve(item)
            .then((value) => {
                result[index] = value;
                completed++;

                if(completed === items.length){
                    resolve(result);
                }
            })
            .catch(reject);
        })    
    })
}

async function test(){
    const result = await myPromiseAll([Promise.resolve(10), 20, Promise.resolve(30)]);
    console.log(result);
}
test();
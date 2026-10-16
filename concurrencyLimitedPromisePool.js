// Implement a Limited-Concurrency Promise Pool
// Advanced Async · Concurrency

// You have 10 asynchronous tasks, but only 3 may run at the same time. Implement a function that 
// executes all tasks while respecting that limit.
// const tasks = [
//   () => fetchData(1),
//   () => fetchData(2),
//   () => fetchData(3),
//   () => fetchData(4),
//   // ... more tasks
// ];

// const results = await promisePool(tasks, 3);


// Requirements: never exceed 3 concurrent tasks, preserve result order, and handle task failures consistently.


/**
- Suppose you have 10 asynchronous tasks, but you only want 3 running at the same time.
- Start tasks 1, 2, and 3.
- Whenever one finishes, start the next task.
- Store each result in its original position.
- If a task fails, handle that failure consistently.
Important distinction: Concurrency means how many tasks are running at the same time, not how many tasks exist in total.
 */






/** 
For n tasks and a concurrency limit of k:
- Time complexity: O(n) scheduling overhead, excluding task execution time.
- Result storage: O(n).
- Worker overhead: O(k).
- Maximum concurrent tasks: k.
 */
async function promisePool(task, limit){
    if(!Number.isInteger(limit) || limit<1){
        throw new RangeError('limit should be positive integer')
    }
    let result = new Array(task.length);
    let nextIndex = 0;
    let hasError = false;
    let firstError;

    async function worker(){
        while(true){
            if(hasError) return;
            let index = nextIndex++;
            if(index >= task.length) return
            try{
                result[index] = await task[index]();
            }catch(error){
                if(!hasError){
                    hasError = true;
                    firstError = error
                }
                return;
            }
        }
    }
    const workerCount = Math.min(limit, task.length);
    await Promise.all(Array.from({length: workerCount}, () => worker()));
    if(hasError) throw firstError;
    return result;
}





const tasks = Array.from({ length: 10 }, (_, i) => {
    return async () => {
        console.log("Started:", i + 1);

        await new Promise(resolve =>
            setTimeout(resolve, 1000)
        );

        console.log("Finished:", i + 1);

        return (i + 1) * 10;
    };
});

async function main() {
    const results = await promisePool(tasks, 3);
    console.log("Results:", results);
}

main();

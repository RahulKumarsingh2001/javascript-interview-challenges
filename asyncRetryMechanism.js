// Implement a Retry Mechanism for an Async Function
// Async/Await · Error Handling



// Write retry(fn, attempts, delay) that retries a failing asynchronous function until it succeeds or runs out of attempts.
// const result = await retry(fetchData, 3, 1000);


// Requirements: wait 1 second between retries, propagate the final error, and never exceed three total attempts.


function wait(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function retry(fn, attempts, delay){
    if(!Number.isInteger(attempts) || attempts<1){
        throw new RangeError('Attempt must be positive integer...')
    }
    for(let attempt=1; attempt<=attempts; attempt++){
        try {
            return await fn();
        } catch (error) {
            if(attempt === attempts){
                throw error;
            }
            await wait(delay);
        }
    }
}


async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}

async function main() {
    try {
        const result = await retry(fetchData, 3, 1000);
        console.log(result);
    } catch (error) {
        console.error("All attempts failed:", error.message);
    }
}

main();


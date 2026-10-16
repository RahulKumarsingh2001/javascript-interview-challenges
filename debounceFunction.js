// Implement a Debounce Function
// Closures · Timers

// Implement debounce(fn, delay) so the function executes only after calls have stopped for the specified delay.
// function debounce(fn, delay) {
//   // Your implementation
// }

 // Example: search input handler
 // Only execute after 300ms without a new call.




/**
 * 
 * 
 * 
 * 
* What is debouncing?
* it delay a function execution until special amount of time has passed..



setTimeout():- schedules a function to run after a specified delay.
setTimeout(() => {
    console.log("Hello!");
}, 1000);

* After 1 second output will comes.



clearTimeout():- cancels a scheduled timeout that has not executed yet.
const timer = setTimeout(() => {
    console.log("Hello!");
}, 300);
clearTimeout(timer);

* The message will not be printed because the timeout was cancelled before execution.



Closures:- A closure allows a function to retain access to variables from the scope 
          where it was created, even after that outer function has returned.

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3   

*The inner function remembers count between calls.



In a debounce function, the returned function remembers the timer ID 
so it can cancel the previous timeout whenever a new call occurs.
*/ 





//Implement the debounce function
function debounce(fn, delay){
    let timmer;
    return function(...args){
        clearTimeout(timmer);
        timmer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

function search(query){
    console.log('searching...',query);
}

const debounceSearch= debounce(search, 3000);

debounceSearch("j")
debounceSearch("java")
debounceSearch("javascript");
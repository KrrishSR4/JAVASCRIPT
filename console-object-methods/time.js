// console.time() :- used to measure how long a block of code takes to execute.

console.time("forloop")//starts measuring time

for(let i=0; i<10; i++) {
    console.log(233)
}

console.timeEnd("forloop")//stops measuring time and loggs the recorded time
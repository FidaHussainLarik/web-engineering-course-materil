console.log("\n\n_______________WARM UP______________\n\n")

/*

## Warm-up (5 min)

        In a new file `warmup.js`, without looking anything up, write and run:

        1. A `const` for your name and a `let` for a score starting at `0`
        2. A function `double(n)` that returns `n * 2`
        3. An array of three skill strings; `console.log` the second one

*/

const name = "Fida Hussain Larik"
let score = 0

function double(n){
    return n * 2
}

skills = ["Python", "Java", "MySQL","C++", "Machine Learning"]
for (const [index,skill] of skills.entries()){
    console.log("Skill number ",index+1,": ",skill)
}

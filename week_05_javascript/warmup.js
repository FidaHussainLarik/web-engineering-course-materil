console.log("Hello, World!");


const name = "Fida Hussain";
// cannot be reassigned — your default
let score = 90;
// var old = "avoid";    // legacy — never use

console.log("Name:", name);
console.log("Score:", score);





typeof "text";   // "string"
typeof 42;       // "number"
typeof null;     // "object"  ← permanent language bug
Array.isArray([]); // true — correct array check

5 === "5";   // false — always use ===
5 ==  "5";   // true  — type coercion. Never rely on this.
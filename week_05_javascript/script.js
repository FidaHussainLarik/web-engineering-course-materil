// var name = "Fida Hussain"
// var name = "Gada"
// var name = "Zafar"
// var name = "Ghulam ALi"

// var can be redeclared , reassigned , that is why it is confusing.
// console.log("Name: ",name)


// That is why we use LET
// let fullName = "Fida"
// console.log("Initially assigned: ",fullName)

// We can reassign a new value to let variables but can not re-declare them.
// let fullName = "Hussain"

// fullName = "Gada Hussain Larik"
// console.log("Full Name: ",fullName)
let name = "Fida Hussain"
const CMS = "023-24-0157"
const SECTION = "E"
const PROGRAM = "Computer Science"


function intro(name, cms, section, program){
  console.log("******************************************************")
  console.log("\n\n___________________INTRODUCTION_________________________\n")
  console.log("Name: ",name)
  console.log("CMS: ", cms)
  console.log("Section: ",section)
  console.log("Program: ", program)
  console.log("\n******************************************************\n\n")
}


// intro(name,CMS,SECTION,PROGRAM)

// We can declare variable with let and assign it a value latter. But constant must be intialized at the time of declaration
// let num;
// console.log("Undefined variable: ",num)

// var age;
// console.log("Age: ",age)


// const date_of_birth = 2004
// console.log("We must have to assign value to constant variables: ",date_of_birth)


// We can redifine let variables in BLOCKS 
// {
//   console.log("Block A")
//   let fatherName = "Muhammad Hashim"
//   console.log("Baba: ",fatherName)
// }

// {
//   console.log("Block B")
//   let fatherName = "M. Hashim"
//   console.log("Baba: ",fatherName)
// }


/*

DATA TYPE IN JAVASCRIPTS

*/

// let age = 23
// let weight = 60.1
// let married = false
// console.log("Type of married: ",typeof(married))
// console.log("Type of Weight: ",typeof(weight))
// console.log("Type of AGE: ",typeof(age))
// console.log("Type of Name: ",typeof(name))
// console.log("Type of cms: ",typeof(CMS))
// console.log("Type of section: ",typeof(SECTION))
// console.log("Type of program: ",typeof(PROGRAM))




/* 

OBJECTS IN JAVASCRIPTS

*/ 


const student = {
  fullName: "Fida Hussain Larik",
  cms: "023-24-0157",
  cgpa: 3.11,
  age: 23
}

function profile(obj){
  console.log("Name: ",obj.fullName)
  console.log("CMS: ",obj.cms)
  console.log("CGPA: ",obj.cgpa)
  console.log("Age: ",obj.age)
}
profile(student)


console.log("OBJECTS ARE SIMILLAR TO PYTHON DICTIONARIES: ",student.fullName)


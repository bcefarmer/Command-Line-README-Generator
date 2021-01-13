const inquirer = require("inquirer");

const questions = [{
    type: "input",
    name: "title", 
    message: "What is the title of this project?"
 },
 {
   type: "input",
   name: "description",
   message: "Write a short description of this project."
 },
 {
     type: "input",
     name: "installInstructions",
     message: "Write a short paragraph detailing installation instructions."
 },

 {
    type: "input",
    name: "useInfo",
    message: "What does the end user need to know to use this application?"
 },

 {
    type: "list",
    name: "license",
    message: "What open-source license do you want for this project?",
    choices: [ "MIT", new inquirer.Separator(), 
               "GPLv2", new inquirer.Separator(), 
               "Apache" ]

 },
 {
   type: "input",
   name: "directQuestions",
   message: "What is your email address?"
}
]





 module.exports = {questions};
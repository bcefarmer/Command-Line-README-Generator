/* lib.js contains actual text of README.md file.  Sections to be
substituted by user input are prefixed with "$$". Variables "lib"/"fileText".

questions.js is a file contain a large object containing the questions for this 
application.  Variable "qPrompts".

licenses.js contains license text in a large object.  Variables "licenses" and "licenseInfo"
*/

const lib = require("./lib");
const readMeQuestions = require("./questions");
const licenses = require("./licenses");
const licenseInfo = licenses.c_licenses;
const qPrompts = readMeQuestions.questions;
const fileText = lib.docInfo;
const inquirer = require("inquirer");
const fs = require("fs"); // File System.
const util = require("util");
var icon = "";


const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt(
        qPrompts
)
};

const init = async () =>{
    try{ // Below, answer 'placeholders' are substituted with actual user input.
        const answers = await questions();
        
        // Grab license text based on user choice.
        const licenseContent = function(){
            switch (answers.license) {
                // User has selected MIT license.
                case "MIT":
                icon = "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
                return licenseInfo[0].MIT;
                break;
               
                // User has selected GPLv2 license.
                case "GPLv2":
                icon = "![License](https://img.shields.io/badge/License-GPL%20v2-red.svg)";
                return licenseInfo[0].GPLv2;
                break;

                case "Apache":
                    icon = "![License](https://img.shields.io/badge/License-Apache%202.0-red.svg')";
                    return licenseInfo[0].Apache;
                    break;

                default:
                    "No license" 
                  return ;
              }
              
        }

        console.log(licenseContent);


        const readme_Content =(answers)=> {return fileText.replace("$$_title", answers.title)
                                          .replace("$$_description", answers.description)
                                          .replace("$$_installInstructions", answers.installInstructions)
                                          .replace("$$_useInfo",answers.useInfo)
                                          .replace("$$_license",licenseContent )
                                          .replace("$$_icon", icon)
                                          .replace("$$_questions", answers.directQuestions);
                                        }

        await writeFileAsync("README.md", readme_Content(answers) );
    }catch(error){
        console.log(error);
    }
}

init();



var fs = require("fs");
var inquirer = require("inquirer");


// array of questions for user
const questions = [
    {
        type: "input",
        message:"Enter a Title/Name for your READme",
        name:"title"
    },
    {
        type: "input",
        message: "Enter a discription for your READme",
        name:"discription"
    },
    {
        type:"input",
        message: "Enter you installation instructions",
        name:"installation"
    },
    {
        type: "input",
        messgae: "Enter the usage of your application",
        name: "usage"
    },
    {
        type:"input",
        message: "Enter the contributor to our application",
        name: "contributors"
    },
    {
        type:"checkbox",
        message: "Enter a description for your READme",
        choices: [
            "MIT",
            "Appache",
            "GNU GPLv3",
            "ISC"
        ],
        name:"licence"
    },
    {
        type: "input",
        message: "Enter Github username",
        name: "username"
    },
    {
        type:"input",
        message: "Enter your email adress",
        name: "email"
    },
];






// function to write README file
function writeReadme(response) {
    return `
    # ${response.title}

    # Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Licence](#licence)
    - [Questions](#questions)

    ## Description: 
        ${response.description}
    ## Installation:
        ${response.instalation}
    ## Usage:
        ${response.usage}
    ## Contributions:
        ${response.contributors}
    ## License:
        ${response.licence}
    ## Questions:
        ${response.email}
        ${response.username}
    
    `;
};

// function to initialize program
function init(questions) {
    inquirer.prompt(questions).then( response => {
        try{
            const readme = writeReadme(response);
            fs.writeFileSync("README.md", readme);
            console.log("It works");
        }catch(err){
            console.log(err)
        }
    });
};
// function call to initialize program
init(questions);

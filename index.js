// importing shape constructors from shapes.js, along with inquirer and fs packages
const { Circle, Triangle, Square } = require('./lib/shapes')
const inquirer = require('inquirer')
const fs = require('fs')

// array of questions to be prompted
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please provide the text for your logo (maximum 3 characters).'
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Please provide a text color.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo.',
        choices: [
            'circle',
            'triangle',
            'square',
        ]
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Please provide a shape color.'
    },
]

// function to run inquirer and take input data to write svg file
function init() {

    inquirer
        .prompt(questions)
        .then((data) => {
            const { text, text_color, shape, shape_color } = data
            let shapeInput

            switch (shape) {
                case 'circle':
                    shapeInput = new Circle(shape_color)
                    break;
                case 'triangle':
                    shapeInput = new Triangle(shape_color)
                    break;
                case 'square':
                    shapeInput = new Square(shape_color)
                    break;
                default:
                    console.log('Invalid shape selection')
                    return;
            }

            const svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeInput.draw()}<text x="150" y="100" text-anchor="middle" fill="${text_color}">${text}</text></svg>`
    
            fs.writeFile('./examples/logo.svg', svgLogo, err => {
                if (err) {
                    console.error('error occurred while creating SVG file')
                } else {
                    console.log('generated logo.svg')
                }
            })

            console.log('Generated logo.svg')
        })
        .catch(error => {
            console.log('error has occurred:', error)
        })
}

init()
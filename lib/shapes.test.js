const { Circle, Triangle, Square } = require('./shapes')

describe('Circle', () => {
    describe('draw', () => {
        it('should return a valid SVG circle element', () => {
            const circle = new Circle('purple')
            const expSVG = '<circle cx="150" cy="100" r="50" fill="purple" />'
            expect(circle.draw()).toBe(expSVG)
        })
    })
}),

describe('Triangle', () => {
    describe('draw', () => {
        it('should return a valid SVG triangle element', () => {
            const triangle = new Triangle('green')
            const expSVG = '<polygon points="150,56.69872981077807 100,143.30127018922192 200,143.30127018922192" fill="green" />'
            expect(triangle.draw()).toBe(expSVG)
        })
    })
}),

describe('Square', () => {
    describe('draw', () => {
        it('should return a valid SVG square element', () => {
            const square = new Square('red')
            const expSVG = '<rect x="100" y="50" width="100" height="100" fill="red" />'
            expect(square.draw()).toBe(expSVG)
        })
    })
})
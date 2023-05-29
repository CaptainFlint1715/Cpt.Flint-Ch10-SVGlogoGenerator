class Shape {
    constructor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
        this.radius = 50;
    }
    draw() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
        this.sideLength = 100;

    }

    draw() {
        const height = (Math.sqrt(3) / 2) * this.sideLength;
        const points = [
            { x: 150, y: 100 - height / 2 },
            { x: 150 - this.sideLength / 2, y: 100 + height / 2 },
            { x: 150 + this.sideLength / 2, y: 100 + height / 2 }
        ];

        const pointsString = points.map(point => `${point.x},${point.y}`).join(' ');

        return `<polygon points="${pointsString}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
        this.sideLength = 100;
    }

    draw() {
        const x = 150 - this.sideLength / 2;
        const y = 100 - this.sideLength / 2;

        return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};
class Rectange{

    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    area() {
        return this.length*this.breadth;
    }
}

class Triange{

    constructor(base, height){
        this.base = base;
        this.height = height;
    }

    area(){
        return 0.5*this.base*this.height;
    }
}

let obj1 = new Rectange(10,20)

console.log(obj1.area());

let obj2 = new Triange(10,20)
console.log(obj2.area());

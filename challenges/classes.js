// 1. Copy and paste your prototype in here anTask 3: Prototypesd refactor into class syntax.


/*
function CuboidMaker(values) {
  this.length = values.length;
  this.width = values.width;
  this.height = values.height;
};
CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
};
CuboidMaker.prototype.surfaceArea = function () {
  return  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};
*/


class CuboidMaker {
  constructor(values) {
    this.length = values.length;
    this.width = values.width;
    this.height = values.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return  2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
};



let cuboid = new CuboidMaker(
  {
    length: 4,
    width: 5,
    height: 5,
  }
);




// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
//Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(values) {
    super(values);
  }
}; // the math is the same just all the sides are the same

let cube = new CubeMaker(
  {
    length: 5,
    width: 5,
    height: 5,
  }
);
console.log(cube);
console.log(cube.volume());
console.log(cube.surfaceArea());

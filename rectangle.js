// part 1

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

// Part 2
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     if (!!height) {
//       this.height = height;
//     } else {
//       this.height = width;
//     }
//   }
// }
//
// Part 3

class Rectangle {
  constructor(width, height) {
    this.width = width;
    if (!!height) {
      this.height = height;
    } else {
      this.height = width;
    }
  }
  area() {
    return this.width * this.height;
  }
}

// function Man() {
//   this.type = 'Man';
//   this.walk = function() {
//     console.log(`${this.type} walking...`);
//   }
//   this.eat = function () {
//     console.log(`${this.type} eating...`);
//   }
//   this.drink = function () {
//     console.log(`${this.type} drinking...`);
//   }
// }
//
// function Soldier() {
//   this.type = 'Soldier';
//   this.shoot = function () {
//     console.log(`${this.type} shoot!`);
//   }
// }
//
// function Doctor() {
//   this.type = 'Doc';
//   this.cure = function () {
//     console.log(`${this.type} healing...`);
//   }
// }
//
// Soldier.prototype = new Man();
// Doctor.prototype = new Man();

//--ES6--

class Man {
  constructor(type) {
    this.type = type;
  }
  walk(){
    console.log(`${this.type} walking...`);
  }
  eat(){
    console.log(`${this.type} eating...`);
  }
  drink(){
    console.log(`${this.type} drinking...`);
  }
}

class Soldier extends Man {
  constructor(type) {
    super(type);
  }
  shoot(){
    console.log(`${this.type} shoot!`);
  }
}

class Doctor extends Man {
  constructor(type) {
    super(type);
  }
  cure(){
    console.log(`${this.type} healing...`);
  }
}

//-----------------------------------------

// function Medic() {
//   this.type = 'Medic';
//   this.walk = function() {
//     console.log(`${this.type} walking...`);
//   }
//   this.eat = function () {
//     console.log(`${this.type} eating...`);
//   }
//   this.drink = function () {
//     console.log(`${this.type} drinking...`);
//   }
//   this.cure = function () {
//     console.log(`${this.type} healing...`);
//   }
// }
//
// function Dentist() {
//   this.type = 'Dentist';
//   this.cure = function () {
//     console.log(`${this.type} repearing teeth...`);
//   }
// }
//
// function Suregon() {
//   this.type = 'Suregon';
//   this.cure = function () {
//     console.log(`${this.type} operation...`);
//   }
// }
//
// Suregon.prototype = new Medic();
// Dentist.prototype = new Medic();

//--ES6--

class Medic {
  constructor(type) {
    this.type = type;
  }
  walk(){
    console.log(`${this.type} walking...`);
  }
  eat(){
    console.log(`${this.type} eating...`);
  }
  drink(){
    console.log(`${this.type} drinking...`);
  }
  cure(){
    console.log(`${this.type} healing...`);
  }
}

class Dentist extends Medic {
  constructor(type) {
    super(type);
  }
  cure(){
    console.log(`${this.type} repearing teeth...!`);
  }
}

class Suregon extends Medic {
  constructor(type) {
    super(type);
  }
  cure(){
    console.log(`${this.type} operation...`);
  }
}

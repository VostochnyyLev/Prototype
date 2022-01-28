function Organism() {}
Organism.prototype.isAlive = function () {
  return this.age <= 110 ? true : false;
};

function Creature() {}
Creature.prototype = Object.create(Organism.prototype);
Creature.prototype.constructor = Creature;
Creature.prototype.getAge = function () {
  return this.age;
};

function Person() {}
Person.prototype = Object.create(Creature.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayHi = function () {
  return `Hello, ${this.name}`;
};

function Boy(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Boy.prototype = Object.create(Person.prototype);
Boy.prototype.constructor = Boy;
Boy.prototype.getFavoriteColor = function () {
  return this.color;
};

function Girl(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}
Girl.prototype = Object.create(Person.prototype);
Girl.prototype.constructor = Girl;
Girl.prototype.getFavoriteColor = function () {
  return this.color;
};

const john = new Boy("John", 33, "Blue");
console.log(john.getAge()); // Вернет число возраста: 33
console.log(john.sayHi()); // Вернет текст приветсвия: "Hello, John"
console.log(john.isAlive()); // Вернет жив или нет boolean. В зависимости от возраста. Если больше 110 лет, то ответ: false
console.log(john.getFavoriteColor()); // текст: Blue;
console.log(john);

const mary = new Girl("Maryna", 111, "Pink");

console.log(mary.getAge());
console.log(mary.sayHi());
console.log(mary.isAlive());
console.log(mary.getFavoriteColor());
console.log(mary);

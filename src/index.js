class Organism {
  isAlive() {
    return this.age <= 110 ? true : false;
  }
}


class Creature extends Organism {
  getAge() {
    return this.age;
  }
}


class Person extends Creature {
  sayHi() {
    return `Hello, ${this.name}`;
  }
}


class Boy extends Person {
  constructor(name, age, color) {
    super();
    this.name = name;
    this.age = age;
    this.color = color;
  }
  getFavoriteColor() {
    return this.color;
  }
}


class Girl extends Boy {
  constructor(name, age) {
    super(name, age, 'pink');
  }
  getFavoriteColor() {
    return this.color;
  };
}


const john = new Boy('John', 33, 'Blue');
console.log(john.getAge()); // Вернет число возраста: 33
console.log(john.sayHi()); // Вернет текст приветсвия: "Hello, John"
console.log(john.isAlive()); // Вернет жив или нет boolean. В зависимости от возраста. Если больше 110 лет, то ответ: false
console.log(john.getFavoriteColor()); // текст: Blue;
console.log(john);


const mary = new Girl('Maryna', 111);


console.log(mary.getAge());
console.log(mary.sayHi());
console.log(mary.isAlive());
console.log(mary.getFavoriteColor());
console.log(mary);

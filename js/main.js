'use strict';

class First {
  hello () {
    console.log('Привет я метод родителя!');
  }
}

class Second extends First {
  constructor() {
    super();
    this.fromSecond();
  }
  
  fromSecond() {
    this.hello();
    console.log('А я наследуемый метод!');
  }
}

new Second();
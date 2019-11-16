class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
  }

  let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485,4948')
  let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')

  sonny.greet(jordan)
  jordan.greet(sonny)

  function printContactSonny(){
      console.log(sonny.email, sonny.phone)
  }

  printContactSonny()


  function printContactJordan(){
    console.log(jordan.email, jordan.phone)
}

printContactJordan()

class Card {
    constructor(point, suite){
        this.point = point,
        this.suite = suite
    }
}

let myCard = new Card(5, 'diamonds')

console.log(myCard, '**********', myCard.suite)
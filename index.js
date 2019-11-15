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
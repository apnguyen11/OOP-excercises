// import { deflateRaw } from "zlib";

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
    getImageUrl(url){
        return 'images' + url + '.png'
    }
}

let myCard = new Card(5, 'diamonds')

class Hand {
    constructor(){
        this.cards = []
    }
    addCard(card){
        this.cards.push(card)
    }
    getPoints(){
        let total = 0;
        this.cards.map((card) => {
            total += card.point
        })
        console.log('you scored ' + total + " points")
    }
}

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()

class Deck{
    constructor() {
        this.deck = [
            {point:1, suit:"hearts"},
            {point:2, suit:"hearts"},
            {point:3, suit:"hearts"},
            {point:4, suit:"hearts"},
            {point:5, suit:"hearts"},
            {point:6, suit:"hearts"},
            {point:7, suit:"hearts"},
            {point:8, suit:"hearts"},
            {point:9, suit:"hearts"},
            {point:10, suit:"hearts"},
            {point:11, suit:"hearts"},
            {point:12, suit:"hearts"},
            {point:13, suit:"hearts"},
            {point:1, suit:"diamonds"},
            {point:2, suit:"diamonds"},
            {point:3, suit:"diamonds"},
            {point:4, suit:"diamonds"},
            {point:5, suit:"diamonds"},
            {point:6, suit:"diamonds"},
            {point:7, suit:"diamonds"},
            {point:8, suit:"diamonds"},
            {point:9, suit:"diamonds"},
            {point:10, suit:"diamonds"},
            {point:11, suit:"diamonds"},
            {point:12, suit:"diamonds"},
            {point:13, suit:"diamonds"},
            {point:1, suit:"clubs"},
            {point:2, suit:"clubs"},
            {point:3, suit:"clubs"},
            {point:4, suit:"clubs"},
            {point:5, suit:"clubs"},
            {point:6, suit:"clubs"},
            {point:7, suit:"clubs"},
            {point:8, suit:"clubs"},
            {point:9, suit:"clubs"},
            {point:10, suit:"clubs"},
            {point:11, suit:"clubs"},
            {point:12, suit:"clubs"},
            {point:13, suit:"clubs"},
            {point:1, suit:"spades"},
            {point:2, suit:"spades"},
            {point:3, suit:"spades"},
            {point:4, suit:"spades"},
            {point:5, suit:"spades"},
            {point:6, suit:"spades"},
            {point:7, suit:"spades"},
            {point:8, suit:"spades"},
            {point:9, suit:"spades"},
            {point:10, suit:"spades"},
            {point:11, suit:"spades"},
            {point:12, suit:"spades"},
            {point:13, suit:"spades"},
        ]
    }
    draw (){
        let random = (max) =>{return (Math.floor(Math.random() * max))}
        let index = random(this.deck.length);
        console.log(new Card(this.deck[index].point, this.deck[index].suit))
        this.deck = this.deck.splice(index, 1)
    }
    shuffle() {

        var currentIndex = this.deck.length;
        var temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = temporaryValue;
        }
    
    };
    numCardsLeft() {
        return this.deck.length;
    }
    
}

var myDeck = new Deck;

myDeck.draw()
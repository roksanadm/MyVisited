let mouse = {
    name: "Мишка",
    color: `grey`,
    age: 1
};

let dog = {
    name: "Джеся",
    color: `black`,
    age: 12
};
colorChange(dog);
colorChange(dog); colorChange(mouse);



function colorChange(animals) {
    animals.color = `red`;
    console.log(animals.name + " " + animals.color);
}



/*1.1 обьект, конкретный человек в этом случае */
let hater = {
    firstName: "Билл", /* свойства*/
    lastName: "Гейтс", /*свойства */
  /*функция */  getName() {     /*метод *//*get - с англ вернуть */
        return `${this.firstName} ${this.lastName}`;/*вернуть */
    }
}
console.log(hater.getName());


let hater2 = {
    firstName: "Дональд", /* свойства*/
    lastName: "Трамп", /*свойства */
  /*функция */  getName() {     /*метод *//*get - с англ вернуть */
        return `${this.firstName} ${this.lastName}`;/*вернуть */
    }
}
console.log(hater2.getName());  /*однотипные обьекты , нарушение правила "не повторяйся "  а можно создать класы см.ниже+ класы начинаются с большой буквы*/

/*пример с классаим и конструктором */

class Dog1 {
    constructor(nameDog, breedDog) {
        this.nameDog = nameDog;
        this.breedDog = breedDog;
    }
    showName() {
        console.log(`Наша собака: ${this.nameDog} ${this.breedDog}`);
    }
}

let dog2 = new Dog1(`Герман`, `питбуль`);
dog2.showName();

let dog3 = new Dog1(`Джек`, `овчарка`);
dog3.showName();

/*1.1 */
/*
let admin="Джон";
let name="Джон";
alert(admin);*/
/*
let admin, name;
admin = "Джон";
name = admin;
alert(admin);


let planet = ' ';
let userName = ' ';*/

document.getElementById('out').innerHTML = 'Hello';/*innerHTML метод присвоения или изменения в хтмл документе */
let change = document.querySelector('#out'); /*или использовать querySelector  вместо getElementById  */
change.innerHTML = 'Hello2'; /*короткая  запись изменения содержимого через переменную. */

let o = document.querySelector('.h4classA');
o.innerHTML = 'SoftServe';  /*изменения в head  */





// Task 1 Создайте объект ноутбука 
// 1 Серийный номер 3V5E7EA
// 2 Модель HP 255 G8
// 3 Экран:
// Тип экрана IPS
// Разрешение 1920x1080
// 4 Процессор Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)
// 5 Оперативная память 8 ГБ
// 6 Накопители данных:
// Объём HDD 256 ГБ SSD
// Видеокарта AMD Radeon Graphics
// 7 Корпус: 
// Цвет Серебристый
// Вес 1,7
// Габариты (Ш х Г х В) 358 x 242 x 19


const laptop = {
    serialNum: '3V5E7EA',
    model: 'HP 255 G8',
    display: {
        type: 'IPS',
        resolution: [1920,1080],
    },
    CPU: 'Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)',
    RAM: '8GB',
    dataStorage: {
        volume: 'HDD 256 ГБ SSD',
        videoCard: 'AMD Radeon Graphics',
    },
    frame: {
        color: 'silver',
        weight: 1.7,
        dimensions: [358,242,19],
    },
}

// Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. 
// Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)
class User {
    constructor(login,password){
        this.login = login;
        this.password = password;
    }
}
const user1 = new User('login1', 'qwerty1');
const user2 = new User('login2', 'qwerty2');
const user3 = new User('login3', 'qwerty3');
const user4 = new User('login4', 'qwerty4');

const users = [user1,user2,user3,user4];
let usersArray = Object.values(users);
console.log(usersArray);

// Task 3 Из полученого массива в задании 2 сделайте карту (map). 
//в качестве ключа используйте логин

let userMap = new Map();
userMap.set(users.login, users.password);

for(let i=0; i<users.length; i++){
    userMap.set(users[i].login, users[i].password);
}
console.log(userMap);


// Task 4* разными способами решите вопрос соединения двух массивов без повторов
let a = [1,2,3,4,5];
let b = [10,20,30,40,50];

// ...
let c1 = [...a, ...b]
console.log(c1);

//concat
let c2 = [].concat(a,b);
console.log(c2);

//push
let c3 = a.push(...b);
console.log(a);

//unshift
a = [1,2,3,4,5];
b = [10,20,30,40,50];
let c4 = b.unshift(...a);
console.log(b);

//splice
b = [10,20,30,40,50];
const a5 = [1,2,3,4,5];
a5.splice(5, 0, ...b);
console.log(a5);

//join + split
a = [1,2,3,4,5];
b = [,10,20,30,40,50];
let c6 = (a.join(',') + b.join(',')).split(',')
console.log(c6);






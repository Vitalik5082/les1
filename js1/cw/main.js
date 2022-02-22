let tenNumber = [1,2,3,4,5,6,7,8,9,10]
console.log(tenNumber)
let result = (tenNumber[0]+tenNumber[1]+tenNumber[2]+tenNumber[3]+tenNumber[4]+tenNumber[5]+tenNumber[6]+tenNumber[7]+tenNumber[8]+tenNumber[9])
console.log(result)
//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
const book = {
    bookName: "tестирование dOT COM",
    page: 311,
    genre:  "IT history",
}
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
const book2 = {
    bookName: "Історія України",
    page: 381,
    genre:  "history",
    author: 'Henrih II'
}
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let books = [`${book}`,  `${book2}` ]
// console.log(books[0])
// console.log(books[1])

let books = [{
    bookName: "tестирование dOT COM",
    page: 311,
    genre:  "IT history",
    author: 'noname'
},
    {bookName: "Історія України",
        page: 381,
        genre:  "history",
        author: 'Henrih II'}]
console.log(books)

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23
let width = 10
let S = (height*width)
console.log(S)


//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let heightC = 10
let dC = 4
let v = (heightC*dC)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3
let m = 4
let k = ((3**2)+(4**2) )
console.log(k)


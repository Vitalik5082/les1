let time = +prompt("Скільки зараз хвилин?(0-59)")
let minute = time
// console.log(minute)
if (time <= 15 && time >= 0){
    console.log("1")}
if (time >=16 && 30 >= time){
console.log("2")}
if (time >=31 && 45 >= time){
    console.log("3")}
if (time >=46 && 59 >= time){
    console.log("4")}
else (null)
//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("day 1-31")
if (day <= 10 && day >= 0){
    console.log("1")}
if (day >=11 && 20 >= day){
    console.log("2")}
if (day >=21 && 31 >= day){
    console.log("3")}
else (null)
//У нас є змінна test яка дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     //     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt("test")
test = ("test")
if (test === true){
    console.log ("bingo")}
    else { false }{
console.log("worning")}
    //Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt("wrine number")
if (a !==0)
{console.log("good")}
else
{
    console.log("bad")
}

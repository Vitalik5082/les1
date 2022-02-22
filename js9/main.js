//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let newDiv = document.createElement(`div`)
newDiv.classList.add(`wrap`)
newDiv.classList.add(`collapse`)
newDiv.classList.add(`alpha`)
newDiv.classList.add(`beta`)
newDiv.style.background = `red`
newDiv.style.color =    `blue`
newDiv.style.fontSize = `32px`
document.body.appendChild(newDiv)
document.body.appendChild(div.cloneNode(true))

//- Є масив:
//    ['Main','Products','About us','Contacts']
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.

let masuv = ['Main','Products','About us','Contacts']
for (const masuvs of masuv) {
    let div = document.createElement(`div`)
    div.classList.add(`menu`)
    div.appendChild(`li`)
   li.element.innerText = `${masuv}`
    document.body.appendChild(div)
    console.log(masuv)
}


//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

for (const  course of coursesAndDurationArray) {
    let divElement = document.createElement(`div`)
div.element.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(divElement)
}
//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
  //  Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let div = document.createElement(`div`)
    div.classList.add(`item`)
    let h1 = document.createElement(`h1`)
    div.appendChild(h1)
    h1.innerText = div.title
    h1.classList.add(`heading`)
    let p = document.createElement(`p`)
    div.appendChild(p)
    p.classList.add(`description`)
    p.innerText = ${course.monthDuration}
    document.body.appendChild(div)
}

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let number = [100, 200, 300, 400, 500]
let writeNumber = ['sto', 'dvisti', 'trusta', 'choturusta', 'pyatsot']
let mixNumberBulian = [false, true, 100, 'dvisti', 300]
console.log(number)
console.log(writeNumber)
console.log(mixNumberBulian)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty = []
        empty[0] = 1,
        empty[1] = 2,
        empty[2] = 3,
        console.log(empty)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 for (let x = 0; x < 10; x++)
document.write(`<div>XXX</div>`)

for (let x = 0; x < 10; x++)
document.write(`<div>${x} - YYY </div>`)

let y = 0
while (y < 20){document.write(`<div><h1>Довільний текст</h1></div>`)
y++}

let n = 0
while (n < 20){document.write(`<div><h1>${n} - Текст з індексом</h1></div>`)
n++}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.


let tenElements = [1,2,3,4,5,6,7,8,9,0]
for (r=0; r< tenElements.length; r++)
console.log(tenElements[r])

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let stringElements = ['pepsi', 'coca-cola','bonakva', 'sandora', 'mirinda', 'rich', 'sadochok', 'fanta','sprite','shveppes']
for (r=0; r< stringElements.length; r++)
    console.log(stringElements[r])

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let allElements = [false, true, 1,2,3,4,5,6,'pepsi','rich']
for (r=0; r< allElements.length; r++)
    console.log(allElements[r])


// - Створити масив з   10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let allElementsBull = [false, true, 1,2,3,4,5,6,'pepsi','rich']
for (q=0; q < allElementsBull.length; q++)
    if(typeof allElementsBull[q]=== 'boolean') {
        console.log(allElementsBull[q])
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let itemAll = [false, true, 1,2,3,4,5,6,'pepsi','rich']
for (q=0; q < itemAll.length; q++)
    if(typeof itemAll[q] === 'number') {
        console.log(itemAll[q])}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let stringAll = [false, true, 1,2,3,4,5,6,'pepsi','rich']
for (q=0; q < stringAll.length; q++)
    if(typeof stringAll[q] === 'string') {
        console.log(stringAll[q])}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let masuv = []
masuv[0]=1,
    masuv[1]=2,
    masuv[2]= false,
    masuv[3]= true,
    masuv[4]= 'milion',
masuv[5]= 'dranuku',
    masuv[6]= 'drakula',
    masuv[7]= false,
    masuv[8]=9,
    masuv[9]=true
for(z=0; z<masuv.length; z++) {
    console.log(masuv[z])
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let cola = 0 ;cola < 10 ; cola++)
console.log(cola)
document.write(cola)

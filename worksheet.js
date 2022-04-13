//Days of the Week
var dayOfWeek= 'Monday'
console.log(dayOfWeek)

var dayOfWeek='Friday'
console.log(`I can't wait for ${dayOfWeek}`)

//User Input
let animalInput= prompt('What is your favorite animal?')

let colorInput=prompt('What is your favorite color?')

console.log(`I've never seen a ${colorInput} ${animalInput}!`)

//Conditionals - Meals
//Breakfast- Chilaquiles Lunch- Kale Rice Dinner- Posole Verde
let timeOfDay= 1200


if (timeOfDay < 1200) {
    console.log(myMeal=myBreakfast='Chilaquiles');
}

if (timeOfDay >= 1200 && timeOfDay <= 1700) {
    console.log(myMeal=myLunch= 'Kale Rice');
}

if (timeOfDay > 1700){
    console.log(myMeal=myDinner='Posole Verde');
}

//Random Numbers
let randomNumber= Math.floor(Math.random() *11);

if (randomNumber>= 0 && randomNumber <= 2){
    console.log('Beatles')
}

if (randomNumber>= 3 && randomNumber <= 5){
    console.log('Stones')
}

if (randomNumber>= 6 && randomNumber <= 8){
    console.log('Floyd')
}

if (randomNumber== 9 || randomNumber== 10){
    console.log('Hendrix')
}
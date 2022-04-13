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

//For Loop
for(let i=0; i < 7; i++){
    console.log("JavaScript is cool!")
}


for(let number= 0; number < 10; number++){
    console.log(number)
}  

for (let secondNumber=1; secondNumber < 11; secondNumber++){
    if (secondNumber== 1 || secondNumber== 3 || secondNumber==5 || secondNumber==7 || secondNumber==9 || secondNumber==11){
        console.log('hello')
    }

    else if (secondNumber== 2 || secondNumber == 4 || secondNumber== 6 || secondNumber== 8 || secondNumber==10){
        console.log('goodbye')
    }
}

//Functions
function printMovieName(){
    myFavoriteMovie= 'Coraline'
    console.log(myFavoriteMovie) 
}

printMovieName()

function usersFavoriteBand(){
    usersBand= prompt("Who is your favorite band?")
    return usersBand
}

console.log(result=usersFavoriteBand())

function concertDisplay(musicalAct){
    myStreet= prompt("What is the name of your street?")
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
}

concertDisplay(usersBand)


// Acesta este un cod comentat
//
/**
 *
 * sadlhasd
 * sadk;jsad
 * j;asdlj
 */

// ldahf
// sdafkjlasdkfj4

// Primitives : Number, String, Boolean, Undefined, Symbol
// References: Objects: Array, functions, null

// Numbers

const myNumber = 5;
let secondNumber = 2;
let result;
// console.log(result);
result = myNumber % secondNumber;
// console.log(result);
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber + secondNumber;

// console.log(result);

// Strings

let myString = "Acesta este un mesaj" + result + "2 + 2" + 2 + 2;
myString = "O'heary";
myString = "";
myString = `Acesta este un mesaj ${result} 2 + 2 ${2 + 2}
afdsasfd
adsfsdaf
dasfsadf`;
// console.log(myString);
myString = "";
myString = myString + result;
// console.log(myString);
// console.log(typeof myString);

// Booleans

let lightsOn = false;

if (lightsOn === true) {
  // console.log('Luminile sunt aprinse');
} else {
  // console.log('Luminile sunt stinse');
  // console.log('Aprinde o lumanare');
}

// Arrays

const myArray = [5, "test", true, [3, "53"], null, undefined];

// console.log(myArray[0]);
myArray[0] = 3;
// console.log(myArray);

// Objects

const burgerType = "burger";

const myObject = {
  burger: "Big Mac",
  juice: "Cola",
  "french fries": "With Salt",
  address: {
    street: "Street",
    number: 1,
  },
  sauce: ["Ketchup", "Mayo"],
};

// console.log(myObject["french fries"]);
// console.log(myObject['burger']);
// console.log(myObject[burgerType]);
// console.log(myObject.address.street);

// Loops

let marksOf10Lei = 0;
// marksOf10Lei += 1;
// marksOf10Lei++;
// ++marksOf10Lei;
// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei = marksOf10Lei + 1;

let total = 10;

while (marksOf10Lei < total) {
  marksOf10Lei = marksOf10Lei + 1;
}

// console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);

let roomTemperature = 18;
let desiredTemperature = 24;

// While Loop

while (roomTemperature < desiredTemperature) {
  // console.log('Inca mi-e frig');
  roomTemperature += 1;
}
// console.log('Acum imi este bine');

do {
  //   console.log("Ceva");
} while (false);

// For Loop

let marksOf5Lei = 0;
total = 10;

for (let index = 0; index < total; index++) {
  marksOf5Lei += 1;
}

let timeToCowntdown = 12;

for (let index = timeToCowntdown; index >= 0; index--) {
//   console.log(index);
}

// If else

let var1 = 5;
let var2 = "5";

if (var1 === var2) {
  //   console.log("Variabilele sunt egale");
} else {
  //   console.log("Variabilele nu sunt egale");
}

if (var1 !== var2) {
  //   console.log("Variabilele nu sunt egale");
} else {
  //   console.log("Variabilele sunt egale");
}

let temperature = -4;
let comfortTemperature = 25;

if (temperature <= comfortTemperature) {
  //   console.log("E frig si urat afara");
} else {
  //   console.log("Este placut afara");
}

// A nu se folosi vreodata intr-o bucla o conditie mereu adevarata

// while (temperature < comfortTemperature) {
//     temperature -= 2;
// }

// Logical operators
// and && -- at least one is false, everything is false
// or || -- at least one is true, everything is true

let pizzaPrice = 40;
let hasGorgonzola = true;
if (pizzaPrice <= 30 && hasGorgonzola === true) {
    // console.log("Pizza isi merita banii");
} else {
    // console.log("Pizza nu isi merita banii");
}

// Functions

function logSomething() {
    // console.log('Functia a fost apelata');
}

logSomething();
logSomething();
logSomething();

addTwo(3);
// addTwoVar(5);

function addTwo(number) {
    // console.log(`Rezultatul functiei addTwo este: ${number + 2}`);
}

let addTwoVar = function (number) {
    // console.log(`Rezultatul functiei addTwo este: ${number + 2}`);
}
addTwo(3);
addTwoVar(5);

function sendEmail(firstName, lastName, proffesion, result, exam) {
    if(proffesion) {
        console.log(`Ai profesia`);
    }
    console.log(`Salutare ${lastName},
    Ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe, ${firstName}`);
}

function sendEmail2(firstName, lastName, proffesion, result, exam) {
    if(proffesion) {
        console.log(`Ai profesia ${proffesion}`);
    }
    if (firstName) {
        console.log(`Ai numele ${firstName}`);
    }
    if (result) {
        console.log(`Ai rezultatul ${result}`);
    }
}

// sendEmail('sergiu', 'savin', 'lord', 10, 'olimpiada');
// sendEmail('brad', 'pitt', 10, 'movie star');
// sendEmail();

sendEmail2(3);
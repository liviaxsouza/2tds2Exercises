// Executa até acabarem todos os itens do Array.

// Example 1
const companies = ["Apple", "Google", "Facebook"];

companies.forEach(company => {
    console.log(`Hey, ${company}!`);
});

// Code separation
console.log("--------------");

// Example 2
const names = ["Lívia", "Ana Júlia", "Ana Lívia", "Sophia"];

names.forEach(name => {
    console.log(`Hi ${name}!`);
}); 

// Code separation
console.log("--------------");

// Exercise 1 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number, index) => {
  if (number % 2 == 0) {
    console.log(`O número ${number} pertence à posição ${index} do Array.`);
  }  
});

// Code separation
console.log("--------------");

// Exercise 2 - Cars

const cars = [
{
    marca: "Ford",
    modelo: "Focus"
},
{
    marca: "BMW",
    modelo: "BMW Z4"
},
{
    marca: "Fiat",
    modelo: "Palio"
},
{
    marca: "Audi",
    modelo: "A3"
},
];

cars.forEach(car => {
    console.log(`Marca: ${car.marca}`);
    console.log(`Modelo: ${car.modelo}`);
    console.log(" ");
});

// Adicionando modelos e marcas através de um Input.

class Car {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class CarsList {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
    this.cars.push(car);
}
}

const carsList = new CarsList();

function createCar() {
    const marca = document.getElementById("inputMarca").value;
    const modelo = document.getElementById("inputModelo").value;

    const car = new Car(marca, modelo);

    carsList.addCar(car);

    document.getElementById("inputMarca").value = "";
    document.getElementById("inputModelo").value = "";

    carsList.cars.forEach(car => {
        console.log(`Marca: ${car.marca}`);
        console.log(`Modelo: ${car.modelo}`);
    });
}
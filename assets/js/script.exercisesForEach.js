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
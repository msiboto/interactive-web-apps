
const salary = 4000;
const lodging = 'apartment'
const size = 'large'

/*
// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    [734]: '3%',
    [234]: '20%',
    [913]: '12%',
    [415]: '38%',
    [502]: '42%',
}

const rent = {
    none: 0,
    'smallroom': 200,
    'largeroom': 300,
    'smallapartment': 400,
    'largeapartment': 800,
    'smallhouse': 1200,
    'largehouse': 2400,
}

// You can change below however you want

const taxAsDecimal = (parseFloat(tax[913]))/ '100'
const startingAfterTax = salary *(1 - taxAsDecimal)
const type = size + lodging
const balance = startingAfterTax - expenses.transport - expenses.food - rent.largeapartment 
console.log(balance.toFixed(2))

*/

//MY OTHER SOLUTION

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    [734]: '3%',
    [234]: '20%',
    913: '12%',
    [415]: '38%',
    [502]: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

const taxAsDecimal = parseFloat(tax[913])/ 100
const startingAfterTax = salary * (1- taxAsDecimal)
const type = `${size}-${lodging}`
const balance = startingAfterTax - (expenses['transport'] + expenses['food'] + rent[type]) 
console.log(balance.toFixed(2))

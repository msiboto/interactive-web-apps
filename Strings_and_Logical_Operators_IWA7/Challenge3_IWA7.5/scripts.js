const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = 'R ' +  leoBalance  + sarahBalance  + '\n'
const leo = leoName + ' ' +  leoSurname + ' ' + '(Owed: '+ 'R ' + leoBalance * -1  + ')' + '\n'
const sarah = sarahName + ' ' + sarahSurname +  ' ' + '(Owed: ' + 'R ' + sarahBalance * -1 + ')' + '\n' + '\n'
const total = '\n' + ' Total amount owed:'
const result = leo + sarah + divider + total + owed + divider

console.log(result)

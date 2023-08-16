const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = 'R ' + parseFloat(leoBalance * -1  + sarahBalance * -1).toFixed(2)  + '\n'
const leo = leoName + ' ' +  leoSurname.trim() + ' ' + '(Owed: '+ 'R ' + leoBalance * -1  + ')' + '\n'
const sarah = sarahName.trim() + ' ' + sarahSurname +  ' ' + '(Owed: ' + 'R ' + sarahBalance * -1 + ')' + '\n' + '\n'
const total = '\n' + ' Total amount owed:'
const result = leo + sarah + divider + total + `${owed.substring(0,4)} ${owed.substring(4,10)}`+ '\n' + divider

console.log(result)

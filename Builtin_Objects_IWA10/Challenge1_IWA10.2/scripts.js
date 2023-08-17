const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(futureId.name || 'ID ' + futureId + ' not created yet')

let copied = {
    name: 'X-mas Day',
    date: new Date,
}
correctDate = copied.date
correctDate.getHours(0,0);
console.log(correctDate)


isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)

if (isEarlier == true) 
    holidays[6].date = correctDate
    holidays[6].name = 'X-mas Day'
    console.log(`ID change: ${holidays[6].id}` != copied.id || copied.id)
    console.log(`Name change: ${holidays[6].name}`) 
    console.log(`Date change: ${(holidays[6].date).toLocaleDateString('en-GB')}`)

const firstHolidayTimestamp = Math.min(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
)

console.log(firstHolidayTimestamp)
console.log(lastHolidayTimestamp)
    
const firstDate = new Date (firstHolidayTimestamp)
console.log(firstDate)
const firstDay = (firstDate.getDate()).toString().padStart(2,0)
const firstMonth = (firstDate.getMonth() + 1).toString().padStart(2,0)

const lastDate = new Date (lastHolidayTimestamp)
console.log(lastDate)


const lastDay = lastDate.getDate()
const lastMonth = (lastDate.getMonth()) + 1

console.log(firstDay + '/' + firstMonth + '/' + currentYear)
console.log(lastDay + '/' + lastMonth + '/' + currentYear)

const randomNumber = Math.round(Math.random()*9)
console.log(randomNumber)
const randomHoliday = new Date(holidays[randomNumber].date)
const randomDay = (randomHoliday.getDate()).toString().padStart(2,0)
const randomMonth = (randomHoliday.getMonth()+ 1).toString().padStart(2,0)

console.log(randomDay)
console.log(randomMonth)

console.log(randomDay + '/' + randomMonth + '/' + currentYear)





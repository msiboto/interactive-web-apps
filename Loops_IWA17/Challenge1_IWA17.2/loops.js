// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let  i = 0 ; i < length; i++) {
        result.push(i)
    }
    return result
}

const createData = () => {
    current.setDate(1) 
        
    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(6)
    const days = createArray(7)
    let value = null

    let day = 0 - startDay

    for (const weekIndex  = 0; weekIndex <= weeks.length - 1; weekIndex++){
        value = {
            week: weekIndex + 1,
            days: []
        }

        for (const dayIndex = 0; dayIndex <= days.length - 1; dayIndex++) {
        value = dayIndex - startDay
        const isValid = day > 0 && day <= daysInMonth

         
        value.days.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            })
        }
        result.push(value)
    }

    return result
}

const addCell = (existing, classString, value) => {
    const result = /* html */ 
        `
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>

        ${existing}
    `
    return result
}

const createHtml = (data) => {
    const result = ''

    for( let week of data){
        const inner = "";   
    
            for (const day of week.days){
            const classString = "table__cell";
            const isToday = new Date().getDate() === day.value;
            const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
            const isAlternate = week.week % 2 === 0;

            if (isToday) classString = `${classString} table__cell_today`;
            if (isWeekend) classString = `${classString} table__cell_weekend`;
            if (isAlternate) classString = `${classString} table__cell_alternative`;
            
            inner = addCell(inner, classString, day.value);
        }

        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
    
        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)

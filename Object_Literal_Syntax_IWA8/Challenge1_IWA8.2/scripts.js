const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
	balance: leoBalance,
	access_Id: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
    postal_code: leoPostal,
    address: {
		number: leoNumber,
		street: leoStreet,
			}
       
}

const sarah = {
	name: sarahName + sarahSurname,
	balance: sarahBalance,
	access_Id: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
    age: 62,
    postal_code: sarahPostal,
	address: {
		number: sarahNumber,
		street: sarahStreet,
			}
    
}

console.log(leo.address, leo.postal_code)
console.log(sarah.address, sarah.postal_code)
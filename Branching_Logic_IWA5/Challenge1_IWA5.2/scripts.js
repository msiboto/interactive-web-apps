const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
const customers = 1
let country = "RSA"
let currency = null

if (location === "RSA") { 
	shipping = 400;
	currency = "R";
}else if (country === "NAM"){
	shipping = 600
	currency = "$"
}else{
	shipping = 800
	currency = "$"
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const totalCost = shoes + toys + batteries + pens + shirts;

console.log(totalCost); 870
	
if (totalCost >= 1000 && country === "RSA" && customers ===1) {
	shipping = 0;
} else {
		console.log(FREE_WARNING)
	}
if (country === "NK") {
console.log(BANNED_WARNING) }


FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

if (location = RSA) { shipping === 400 && currency === 'R' }

if (location = NAM)
(shipping = 600) 
else (shipping = 800)

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries = 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000) {
	if (location = NAM, RSA && customers < 1) {
		shipping = 0 || calcShipping
		}
	}


if (shipping === 0 && customers !== 1) { console.log(WARNING) }

if (location = NK) console.log(BANNED_WARNING) 

customers = '1'
const location = 'RSA'
currency = null
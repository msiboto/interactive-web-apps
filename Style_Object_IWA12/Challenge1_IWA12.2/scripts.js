// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const oneRoot = document.getElementById('book1') 
const oneStatus = oneRoot.getElementsByClassName('status')[0]
const oneReserve = oneRoot.getElementsByClassName('reserve')[0] 
const oneCheckout = oneRoot.getElementsByClassName('checkout')[0]
const oneCheckin = oneRoot.getElementsByClassName('checkin')[0]

const twoRoot = document.getElementById('book2') 
const twoStatus = twoRoot.getElementsByClassName('status')[0]
const twoReserve = twoRoot.getElementsByClassName('reserve')[0] 
const twoCheckout = twoRoot.getElementsByClassName('checkout')[0]
const twoCheckin = twoRoot.getElementsByClassName('checkin')[0]

const threeRoot = document.getElementById('book3') 
const threeStatus = threeRoot.getElementsByClassName('status')[0]
const threeReserve = threeRoot.getElementsByClassName('reserve')[0] 
const threeCheckout = threeRoot.getElementsByClassName('checkout')[0]
const threeCheckin = threeRoot.getElementsByClassName('checkin')[0]

 
oneCheckin.style.color = ''
oneStatus.style.color = STATUS_MAP.overdue.color 
oneReserve.disabled = !STATUS_MAP.overdue.canReserve
oneCheckout.disabled = !STATUS_MAP.overdue.canCheckout 
oneCheckin.enabled = STATUS_MAP.overdue.canCheckIn

twoCheckin.style.color = ''
twoStatus.style.color = STATUS_MAP.reserved.color
twoReserve.disabled = !STATUS_MAP.reserved.canReserve
twoCheckout.enabled = STATUS_MAP.reserved.canCheckout 
twoCheckin.disabled = !STATUS_MAP.reserved.canCheckIn 

threeCheckin.style.color = ''
threeStatus.style.color = STATUS_MAP.shelf.color
threeReserve.enabled = STATUS_MAP.shelf.canReserve 
threeCheckout.enabled= STATUS_MAP.shelf.canCheckout 
threeCheckin.disabled = !STATUS_MAP.shelf.canCheckIn 
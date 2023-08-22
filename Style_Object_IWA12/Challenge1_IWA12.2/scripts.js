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
const twoStatus = twoRoot.getElementsByClassName('status')[1]
const twoReserve = twoRoot.getElementsByClassName('reserve')[1] 
const twoCheckout = twoRoot.getElementsByClassName('checkout')[1]
const twoCheckin = twoRoot.getElementsByClassName('checkin')[1]

const threeRoot = document.getElementById('book3') 
const threeStatus = threeRoot.getElementsByClassName('status')[2]
const threeReserve = threeRoot.getElementsByClassName('reserve')[2] 
const threeCheckout = threeRoot.getElementsByClassName('checkout')[2]
const threeCheckin = threeRoot.getElementsByClassName('checkin')[2]


oneCheckin.style.color = ''
oneStatus.style.color = STATUS_MAP.status.color
oneReserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
oneCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
oneCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

twoCheckin.style.color = ''
twoStatus.style.color = STATUS_MAP.status.color
twoReserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
twoCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
twoCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

threeCheckin.style.color = ''
threeStatus.style.color = STATUS_MAP.status.color
threeReserve = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
threeCheckout = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
threeCheckin = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

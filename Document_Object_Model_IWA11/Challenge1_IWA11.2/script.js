// script.js

const one = {
    oneRoot: document.querySelector('[data-key="order1"]'),
    oneBiscuits: document.querySelector('[data-biscuits="10"]'),
    oneDonuts: document.querySelector('[data-donuts="0"]'),
    onePancakes: document.querySelector('[data-pancakes="13"]'),
    oneStatus: document.querySelector('[data-delivery="False"]')
}
const two = {
    twoRoot: document.querySelector('[data-key="order2"]'),
    twoBiscuits: document.querySelector('[data-biscuits="5"]'),
    twoDonuts: document.querySelector('[data-donuts="0"]'),
    twoPancakes: document.querySelector('[data-pancakes="2"]'),
    twoStatus: document.querySelector('[data-delivery="False"]')
}
const three = {
    threeRoot: document.querySelector('[data-key="order3"]'),
    threeBiscuits: document.querySelector('[data-biscuits="12"]'),
    threeDonuts: document.querySelector('[data-donuts="11"]'),
    threePancakes: document.querySelector('[data-pancakes="15"]'),
    threeStatus: document.querySelector('[data-delivery="True"]')
}


const oneBiscuitsClass = one.oneRoot.getElementsByClassName('count')

const oneBiscuitsValue = one.oneRoot.dataset.biscuits
oneBiscuitsClass[0].innerHTML = oneBiscuitsValue

const oneDonutsValue = one.oneRoot.dataset.donuts
oneBiscuitsClass[1].innerHTML = oneDonutsValue

const onePancakesValue = one.oneRoot.dataset.pancakes
oneBiscuitsClass[2].innerHTML = onePancakesValue

one.oneRoot.getElementsByClassName('status')[0].innerHTML = one.oneStatus.getAttribute('[data-delivered]') === 'true' ? 'Delivered' : 'Pending'



const twoBiscuitsClass = two.twoRoot.getElementsByClassName('count')

const twoBiscuitsValue = two.twoRoot.dataset.biscuits
twoBiscuitsClass[0].innerHTML = twoBiscuitsValue

const twoDonutsValue = two.twoRoot.dataset.donuts
twoBiscuitsClass[1].innerHTML = twoDonutsValue

const twoPancakesValue = two.twoRoot.dataset.pancakes
twoBiscuitsClass[2].innerHTML = twoPancakesValue

two.twoRoot.getElementsByClassName('status')[0].innerHTML = two.twoStatus.getAttribute('data-delivered') ==='true' ? 'Delivered' : 'Pending'



const threeBiscuitsClass = three.threeRoot.getElementsByClassName('count')

const threeBiscuitsValue = three.threeRoot.dataset.biscuits
threeBiscuitsClass[0].innerHTML =threeBiscuitsValue

const threeDonutsValue = three.threeRoot.dataset.donuts
threeBiscuitsClass[1].innerHTML = threeDonutsValue

const threePancakesValue = three.threeRoot.dataset.pancakes
threeBiscuitsClass[2].innerHTML = threePancakesValue

three.threeRoot.getElementsByClassName('status')[0].innerHTML = three.threeStatus.getAttribute('data-delivered') ==='true' ? 'Delivered' : 'Pending'



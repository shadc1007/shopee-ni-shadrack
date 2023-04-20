
let productEl = document.querySelector('.productEl')
let count = 0;
const counter = document.querySelector('.quantity')
let product = {
    name: 'Apple iphone 12',
    color: 'blue',
    capacity: '64gb',
    quantity: count
}  

const img = document.querySelector('.output')
img.src = 'https://down-ph.img.susercontent.com/file/b88075343deaf5ba7573d857d44036da'

const changeIphone = (value) => {
    const src = value.getAttribute('src')
    img.src = src
}

const changeImage = (value) => {
    const src = value.getAttribute('src')
    img.src = src 
}

const btnClick = (selector) => {
    const blackEl = document.querySelector(`.${selector}`)

    if(!blackEl.classList.contains('btn-active')) {
        removePreviousClick()
        product.color = selector
        blackEl.classList.add('btn-active')
    } else {
        blackEl.classList.remove('btn-active')
    }

}

const btnCapacityClick = (selector, capacity) => {
    const capacityBtn = document.querySelector(`.${selector}`)

    if(!capacityBtn.classList.contains('btn-active-1')) {
        removeCapacityActive()
        product.capacity = capacity
        capacityBtn.classList.add('btn-active-1')

    } else {
        capacityBtn.classList.remove('btn-active-1')
    }
}

const removePreviousClick = () => {
    const prevBtn = document.querySelector('.btn-active')

    if(prevBtn) {
        prevBtn.classList.remove('btn-active')
    }  
}

const removeCapacityActive = () => {
    const prevBtn2 = document.querySelector('.btn-active-1')

    if(prevBtn2) {
        prevBtn2.classList.remove('btn-active-1')
    }
}


const increment =() => {
    count++
    counter.innerHTML = count
    product.quantity = count

    if (count >= 0) {
        document.querySelector('.decrement').removeAttribute('disabled')
    } 
}
const  decrement = () => {
    count--
    counter.innerHTML = count
    product.quantity = count

    if(count < 0) {
        counter.innerHTML = 'Cannot perform action. must be 1.'
        document.querySelector('.decrement').setAttribute('disabled', true)
    } 
}

const showCart = () => { 
    productEl.innerHTML =`${product.name}, ${product.color}, ${product.capacity}, Quantity: ${product.quantity}`
}

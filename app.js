let productEl = document.querySelector('.productEl')
let count = 0;
const counter = document.querySelector('.quantity')
let product = {
    name: 'Apple iphone 12',
    price: 28890,
    color: 'blue',
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
    productEl.innerHTML =`${product.name}, ${product.color}, ${product.price}, Quantity: ${product.quantity}`
}


const btnClick = (selector) => {
    const blackEl = document.querySelector(`.${selector}`)


    if(!blackEl.classList.contains('btn-active')) {
        removePreviousClick()
        
        blackEl.classList.add('btn-active')
    } else {
        blackEl.classList.remove('btn-active')
        
    }
}

const removePreviousClick = () => {
    const prevBtn = document.querySelector('.btn-active')

    if(prevBtn) {
        prevBtn.classList.remove('btn-active')
    }
}

const img = document.querySelector('.output')
img.src = 'https://down-ph.img.susercontent.com/file/b88075343deaf5ba7573d857d44036da'

const changeText = (value) => {
    const src = value.getAttribute('src')
    img.src = src
}

const changeImage = (value) => {
    const src = value.getAttribute('src')
    img.src = src 
}


let count = 0;
const counter = document.querySelector('.quantity')
const increment =() => {
    count++
    counter.innerHTML = count
}
const  decrement = () => {
    count--
    counter.innerHTML = count

    if(count < 0) {
     counter.innerHTML = 'Cannot perform action. must be 1.'
    } 
}

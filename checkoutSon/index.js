console.log('deneme')
const cartIcon =document.querySelector('#cart-icon')
const cart =document.querySelector('.cart')
const closeCart=document.querySelector('#close-cart')

cartIcon.onclick= ()=>{
    cart.classList.add('active')
}
closeCart.onclick= ()=>{
    cart.classList.remove('active')
}

const ready = ()=>{
    const removeCardButtons= document.getElementsByClassName('cart-remove')
    console.log(removeCardButtons)
    for(let i = 0; i<removeCardButtons.length; i++){
        let button = removeCardButtons[i]
        button.addEventListener('click',removeCartItem)
    }
}

//cart working js

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready()
}



const removeCartItem = (event)=>{
    console.log(event)
    const buttonClicked = event.target
    buttonClicked.parentElement.remove()
    total()

}

const total = ()=>{
    const cartContent = document.getElementsByClassName('cart-content')[0]
    const cartBoxes = cartContent.getElementsByClassName('cart-box')
    console.log(cartBoxes)
    let total = 0
    for(let i = 0;i< cartBoxes.length ;i++){
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$',''))
        let quantity = quantityElement.value 
        total = total+(price*quantity)
        document.getElementsByClassName('total-price')[0].innerText = '$'+total
    }
}


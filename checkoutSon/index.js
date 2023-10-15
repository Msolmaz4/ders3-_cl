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

}
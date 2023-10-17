console.log('deneme')
const cartIcon =document.querySelector('#cart-icon')
const cart =document.querySelector('.cart')
const closeCart=document.querySelector('#close-cart')
const addCart=document.querySelectorAll('.add-cart')
const cartContex = document.querySelector('.cart-content')
const icon = document.querySelector('#cart-icon')
const delet = document.querySelectorAll('.cart-remove')
const total = document.querySelector('.total-price')


let calcu = []
let box =[]
cartIcon.onclick= ()=>{
    cart.classList.add('active')
}
closeCart.onclick= ()=>{
    cart.classList.remove('active')
}


addCart.forEach((add)=>{
    add.addEventListener('click',()=>{
        // console.log(add.parentElement.querySelector('.product-title').innerHTML)
        // console.log(add.parentElement.querySelector('.price').innerHTML)
        // console.log(add.parentElement.querySelector('img').src)
         
        const nur =  box.filter((fo)=>fo.name == add.parentElement.querySelector('.product-title').innerHTML) 
        if(nur.length > 0){
        return
         }else{
        box.push({
            name:add.parentElement.querySelector('.product-title').innerHTML,
            price:add.parentElement.querySelector('.price').innerHTML,
            img:add.parentElement.querySelector('.product-img').src,
            inpt:1
            })
      }
         
    })
})
console.log(box)

icon.addEventListener('click',()=>{
    box.map((er)=>{
        cartContex.innerHTML += ` <div class="cart-box">
        <img src=${er.img} class="cart-img">
        <div class="detail-box">
          <div class="cart-product-title">${er.name}</div>
          <div class="cart-price">${er.price}</div>
          <input type="number" value="1" class="cart-quantity"> 
        </div>
         <!--remove Cart-->
    <i class='bx bxs-trash-alt cart-remove'></i>
    </div> `
    })

    const delet = document.querySelectorAll('.cart-remove')
    delet.forEach((er)=>{
        er.addEventListener('click',()=>{
            er.parentElement.remove()
            hesap()
            //buradak hesap yapilmasi gerkiyor

        })
    })


    calculator()

    const inp =  document.querySelectorAll('.cart-quantity')
    inp.forEach((valu)=>{
        //console.log(valu.value)
        //console.log(valu.parentElement.querySelector('.cart-price').textContent.replace('$',''))
        // toplam =valu.value*valu.parentElement.querySelector('.cart-price').textContent.replace('$','')
        // calcu.push(toplam)
        // console.log(calcu)
        // total.innerHTML = calcu.reduce((a,b)=>a+b,0) 
        valu.addEventListener('input',()=>{

           console.log(valu.value,'vslu')
           const nam = valu.parentElement.querySelector('.cart-product-title').textContent
           const pric = valu.parentElement.querySelector('.cart-price').textContent
           const im = valu.parentElement.parentElement.querySelector('.cart-img').src 

           box = box.filter((ert)=>ert.name !=valu.parentElement.querySelector('.cart-product-title').textContent)
          

          box.push({
          name:nam,
          price:pric,
          img:im,
          inpt:valu.value
            })

            
            if(Number(valu.value)== 0 ){
            valu.closest('.cart-box').remove()
            }
          hesap()

        })
    })

})

function calculator (){
     if(box.length == 0) {
        total.innerHTML= '0'
    }
    box.map((ert)=>calcu.push(ert.price.replace('$','')*ert.inpt))
    total.innerHTML = calcu.reduce((a,b)=>a+b,0)
}
function hesap(){
    calcu=[]
    box.map((ert)=>calcu.push(ert.inpt*Number(ert.price.replace('$',''))))
    console.log(calcu.reduce((a,b)=>a+b,0))
    if(box.length == 0) {
        total.innerHTML= '0'
    }
    else{
        total.innerHTML = calcu.reduce((a,b)=>a+b,0)
    }
    

    
}



























// const removeCartItem = (event)=>{
   
//     const buttonClicked = event.target
//     buttonClicked.parentElement.remove()
//     total()

// }

// const total = ()=>{
//     const cartContent = document.getElementsByClassName('cart-content')[0]
//     console.log(cartContent,'cartContent')
//     const cartBoxes = cartContent.getElementsByClassName('cart-box')

//     let total = 0
//     for(let i = 0;i< cartBoxes.length ;i++){
//         let cartBox = cartBoxes[i]
//         let priceElement = cartBox.getElementsByClassName('cart-price')[0]
//         let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
//         console.log(quantityElement)
//         let price = parseFloat(priceElement.innerText.replace('$',''))
//         let quantity = quantityElement.value 
//         total = total+(price*quantity)
//         document.getElementsByClassName('total-price')[0].innerText = '$'+total
//     }
// }


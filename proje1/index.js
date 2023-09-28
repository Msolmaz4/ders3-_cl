document.querySelector('h1').style.color='red'
document.querySelector('h1').style.textAlign='center'



let resim = document.querySelector('.resim')
let ses1 = document.querySelector('.ses1')


//arabuton
document.querySelector('.ara').onclick=()=>{
    resim.src= './img/img.gif'
    ses1.play()
    ses1.volume=0.2
}
document.querySelector('.baglat').onclick=()=>{
    resim.src= './img/telbagla.gif'
    ses1.pause()
}
document.querySelector('.konus').onclick=()=>{
    resim.src='./img/telf.gif'
    ses1.pause()
}

resim.addEventListener('mouseover',()=>{
    resim.src='./img/aslan2.jpeg'
    document.querySelector('.ses2').play()
    ses1.volume=0.2
})
resim.addEventListener('mouseout',()=>{
    resim.src='./img/aslan1.jpeg'
    document.querySelector('.ses2').pause()
   
})
const textIn = document.querySelector('.textbox')
const checIn = document.querySelector('.checkbox')

textIn.onkeyup = ()=>{
    if(checIn.checked){
       textIn.value = textIn.value.toUpperCase() 
    }else{
        textIn.value  = textIn.value.toLowerCase();
    }
    

}

const ekle = document.querySelector('.ekle')
const yat = document.querySelector('.yat')
const sot = document.querySelector('.sot')

yat.addEventListener("click",()=>{
    yat.style.textContent = 'altta'
    let val = ekle.value
    console.log(val,'valllllll')
   
    const content = document.createElement("span")
    content.setAttribute("class","list")
    content.textContent = val
    sot.appendChild(content)
   

})
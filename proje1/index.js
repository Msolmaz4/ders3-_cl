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
//h1 olusturma
// const basla =createElement('h1')
// basla.setAttribute('class','baslik2')
// basla.textContent = 'Programnlama dilleri'

// document.querySelector('.input-div').appendChild(basla)


//document.querySelector('.input-div').innerHTML  += `  <h1 class='title text danger'> Programa dilleri</h1> `
document.querySelector('.input-div').innerHTML  =  document.querySelector('.input-div').innerHTML + `<h1 class='title text danger'> Programa dilleri</h1> `


// const ekle = document.querySelector('.ekle')
// const yat = document.querySelector('.yat')
// const sot = document.querySelector('.sot')

// yat.addEventListener("click",()=>{
//     yat.style.textContent = 'altta'
//     let val = ekle.value
//     console.log(val,'valllllll')
   
//     const content = document.createElement("span")
//     content.setAttribute("class","list")
//     content.textContent = val
//     sot.appendChild(content)
   

// })

const dil = document.querySelector('.dil')
const ekle = document.querySelector('.ekle')
const sil = document.querySelector('.sil')
const lis= document.querySelector('.liste')

ekle.addEventListener('click',()=>{
lis.innerHTML += `<li>${dil.value}</li>`
dil.value = ''

})
////removechild silinecek
sil.addEventListener('click',()=>{
   lis.removeChild(lis.firstElementChild);
   lis.removeChild(lis.children[3]);//ucuncuyu siler 

})


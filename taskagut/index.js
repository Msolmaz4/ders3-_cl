const oyun = document.querySelector('.oyun')
const btn = document.querySelectorAll('button')
const bil = document.querySelector('.bil')
const son = document.querySelector('.son')
console.log(btn)

btn.forEach((er)=>
//console.log(er.innerHTML)
er.addEventListener('click',()=>{
   oyun.innerHTML = er.innerHTML
   bilgisayar()
   sonuc()
})
)

const bilgisayar=()=>{
    let bi = ['tas','kagit','makas']
  //console.log(bi[Math.floor(Math.random()*3)])
   return  bil.innerHTML = bi[Math.floor(Math.random()*3)]

}
const sonuc=()=>{
    if(bil.innerHTML == oyun.innerHTML){
        son.innerHTML = 'baba beraber'
    }else{
        son.innerHTML = 'baba asaassr'
    }
}
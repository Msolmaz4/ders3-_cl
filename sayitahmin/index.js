
const pcB = Math.ceil(Math.random()*20)
console.log(pcB)

// guess.addEventListener('keyup',()=>{
//     let df = ''
//      df = guess.value
//      console.log(guess.value)
//      console.log(df,'df')
// })



var sayi = 10;
const check = document.querySelector('.check')
check.addEventListener('click',()=>{
    sayi--;
    ikinci(sayi)
    
let guess = document.querySelector('.guess').value
if(sayi >= 0){ 
    if(guess == '') alert('sayi giriniz')
        if(pcB == guess){
           document.querySelector('.msg').textContent ='kazandiniz'
           document.querySelector('.number').textContent = pcB
           document.querySelector('.guess').value= ''
        }
        if(pcB> guess){
            document.querySelector('.msg').textContent ='Artirin'
            document.querySelector('.guess').value= ''
            document.querySelector('.score').textContent = sayi
        }
        if(pcB< guess){
            document.querySelector('.msg').textContent ='Azaltin'
            document.querySelector('.guess').value= ''
            document.querySelector('.score').textContent = sayi
        }
}
   else document.querySelector('.msg').textContent ='kaybettiniz'
    
})


const ikinci = (sayi)=>{
    console.log(document.querySelector('.score').textContent)
    if(sayi == 0){
        document.querySelector('.again').textContent = 'zwei'
        document.querySelector('.msg').textContent ='yeni yarismayica basarilar'
    }
}

const ty = document.querySelector('.again')

if(document.querySelector('.again').textContent = 'zwei'){
    console.log('first')
    ty.addEventListener('click',()=>{
        console.log('tikladik sukur')
    })

}


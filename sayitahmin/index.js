
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
  
    console.log(sayi,'ilkdurum')
let guess = document.querySelector('.guess').value
if(sayi > 1){ 

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

   else if (sayi == 1){
    document.querySelector('.msg').textContent ='son hakkiniz'
    document.querySelector('.score').textContent = sayi
   }
   else if (sayi == 0){
    document.querySelector('.msg').textContent ='kaybettiniz '
    document.querySelector('.score').textContent = sayi
    ikinci()
   }
   
    
})

const ikinci = ()=>{
    console.log('first')
}



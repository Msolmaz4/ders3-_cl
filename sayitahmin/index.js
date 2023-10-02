
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
else if(sayi <= 3){
    const basl= 1
    let time = basl*60
    const ilk = document.querySelector('.ilk')


    const son =()=>{
        if(!time == 0){
         const minutes = Math.floor(time/60)
         let sec = time%60
         sec= sec <10 ? '0'+sec : sec
         document.querySelector('.again').innerHTML = `${minutes} : ${sec}`
         time--
         console.log(time)
         document.querySelector('.again').style.background= 'red'

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
        else if(time == 0){
         
            document.querySelector('.msg').textContent ='kaybettiniz '
            document.querySelector('.score').textContent = sayi
            document.querySelector('.guess').value= ''
            document.querySelector('.guess').style.background= 'red'
            ikinci()
            
        
          
        }
         
     
     }
     setInterval(son ,1000)
}

   else if (sayi == 1){
    document.querySelector('.msg').textContent ='son hakkiniz'
    document.querySelector('.score').textContent = sayi
   }
   else if (sayi == 0){
    document.querySelector('.msg').textContent ='kaybettiniz '
    document.querySelector('.score').textContent = sayi
    document.querySelector('.guess').value= ''
    document.querySelector('.guess').style.background= 'red'
    ikinci()
   } 
})

let say2 = 10

const ikinci = ()=>{

    document.querySelector('.again').textContent = 'ywei'
}
document.querySelector('.again').addEventListener('click',()=>{ 
   document.querySelector('.guess').style.background= 'tomato'
   document.querySelector('.msg').textContent ='basarilaer='
   const check = document.querySelector('.check')
   check.addEventListener('click',()=>{
   
       say2--;
    
   let guess = document.querySelector('.guess').value
   if(say2 > 1){ 
   
       if(guess == '') alert('sayi giriniz')
           if(pcB == guess){
              document.querySelector('.msg').textContent ='kazandiniz'
              document.querySelector('.number').textContent = pcB
              document.querySelector('.guess').value= ''
           }
           if(pcB> guess){
               document.querySelector('.msg').textContent ='Artirin'
               document.querySelector('.guess').value= ''
               document.querySelector('.score').textContent = say2
           }
           if(pcB< guess){
               document.querySelector('.msg').textContent ='Azaltin'
               document.querySelector('.guess').value= ''
               document.querySelector('.score').textContent = say2
           }
   }
   
      else if (say2 == 1){
       document.querySelector('.msg').textContent ='son hakkiniz'
       document.querySelector('.score').textContent = say2
      }
      else if (say2 == 0){
       document.querySelector('.msg').textContent ='kaybettiniz '
       document.querySelector('.score').textContent = say2
       document.querySelector('.guess').value= ''
       document.querySelector('.guess').style.background= 'red'
       document.querySelector('.son').style.display = 'block'
       document.querySelector('.son1').addEventListener('click',()=>{
       location.reload();
       })
      }    
   })
})


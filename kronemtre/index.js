console.log('first')
const basl= 1
let time = basl*60
const ilk = document.querySelector('.ilk')

let x = 0
let y = 0

const son =()=>{
   if(!time == 0){
    const minutes = Math.floor(time/60)
    let sec = time%60
    sec= sec <10 ? '0'+sec : sec
    ilk.innerHTML = `${minutes} : ${sec}`
    time--
    console.log(time)
    document.querySelector('.span1').style.backgroundColor ='red'
   }
   else if(time == 0){
    
    
   
     
   }
    

}
setInterval(son ,1000)
const pc = Math.ceil(Math.random()*100)
console.log( pc)
const btn = document.querySelector('.btn1')
const inp = document.querySelector('.inp')
const btm = document.querySelector('.btm')
const kal = document.querySelector('.kal')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const der = document.querySelector('.der')

let say =4
 let sat1 = false
btn.addEventListener('click',()=>{
     sat1 = true
     console.log(inp.value)
    if(say >=0){
       if(pc > inp.value){
        btm.innerHTML += `<li>${inp.value}</li>`
        inp.value = ''
        kal.innerHTML = `<span> kalan hakkiinz ${say--}</span>` 
        img2.style.display = 'block'
        img1.style.display = 'none'

       }
       else if(inp.value > pc){
        btm.innerHTML += `<li>${inp.value}</li>`
        inp.value = ''
        kal.innerHTML = `<span> kalan hakkiinz ${say--}</span>` 
        img1.style.display = 'block'
        img2.style.display = 'none'
        }
        
    }
    if (inp.value == pc){
        clearInterval(sbn)
        openModal()
    }

    else if(say < 0){
        alert('hakkiniz kalmadi')
        btm.innerHTML = ''
        inp.value = ''
        kal.innerHTML = '<p>kalan hakkiniz : 5</p>'
        img1.style.display = 'none'
        img2.style.display = 'none'
        der.style.display = 'block'
        sat1 = false
        yeniden()
    } 
   
   
})
const yeniden =()=>{
    der.addEventListener('click',()=>{
        window.location.reload();
    })
}


////////////////////////////////
//////////////saniye

let time = 60*2
const sbn = ()=>{
    if(sat1){
    if(!time == 0){
        let dak = Math.floor(time/60)
        let san = time%60
        san = san<= 9 ? '0'+san :san
        time--
        
        document.querySelector('.sny').innerHTML = `${dak} : ${san}`
        console.log(time)
         if(time == 10){
            document.querySelector('.sny').style.color = 'red'
            document.querySelector('.sny').style.fontSize = '68px'
         }
    }
    else{
        document.querySelector('.sny').innerHTML = '2 : 00'
        btm.innerHTML = ''
        inp.value = ''
        kal.innerHTML = '<p>kalan hakkiniz : 5</p>'
        img1.style.display = 'none'
        img2.style.display = 'none'
        der.style.display = 'block'
        yeniden()
    }
}
}
 setInterval(sbn ,1000)


 const openModal = ()=>{
    document.querySelector(".modal1").style.display="block";
     document.querySelector('.modal1').innerHTML += '<p>kazandiniz</p>'

 }

const pc = Math.ceil(Math.random()*100)
console.log(pc)
const btn = document.querySelector('.btn')
const inp = document.querySelector('.inp')
const btm = document.querySelector('.btm')
const kal = document.querySelector('.kal')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const der = document.querySelector('.der')

let say =4
btn.addEventListener('click',()=>{
    
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
        else if(inp.value == pc){
            openModal()
        }
    }


    else if(say < 0){
        alert('hakkiniz kalmadi')
        btm.innerHTML = ''
        inp.value = ''
        kal.innerHTML = '<p>kalan hakkiniz : 5</p>'
        img1.style.display = 'none'
        img2.style.display = 'none'
        der.style.display = 'block'
       
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

let time = 60*3
const sbn = ()=>{
    if(!time == 0){
        let dak = Math.floor(time/60)
        let san = time%60
        san = san< 9 ? '0'+san :san
        time--
        
        document.querySelector('.sny').innerHTML = `${dak} : ${san}`
        console.log(time)
    }
    else{
        document.querySelector('.sny').innerHTML = '3 : 00'
    }

}

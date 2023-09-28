const son = document.querySelector('.sonuc')
const btn = document.querySelectorAll('.btn')
const btn1 = document.querySelectorAll('.btn1')
const cler = document.querySelector('.btn2')
const es = document.querySelector('.btn3')

cler.addEventListener('click',()=>{
    son.value = '0'
})
btn.forEach((er)=>{
    console.log(er,'er')
    er.addEventListener('click',()=>{
       console.log(er.textContent)
       console.log(son.value,'icerde')
       if(son.value == '0'){
        son.value = ''
       }
        console.log(son.value,'alta')
        console.log(er.textContent,'rt')
        son.value += er.textContent
    
    })
})
btn1.forEach((ert)=>{
    ert.addEventListener('click',()=>{
        son.value += ert.textContent
    })
})

es.addEventListener('click',()=>{
    son.value = eval(son.value)
})
const up = document.querySelectorAll('.fa-arrow-up')
const unt = document.querySelectorAll('.fa-v')
const text = document.querySelector('.text1')
const text1 = document.querySelector('.text2')


up.forEach((ert)=>{
   
    ert.addEventListener('click',(e)=>{
        console.log(e.target.parentElement.children[2])
      // let cl = e.target.parentElement.getAttribute('class')
        e.target.parentElement.children[2].style.display = 'none'
      



    })
})
unt.forEach((er)=>{
   er.addEventListener('click',(e)=>{
 
    e.target.parentElement.children[2].style.display = 'block'
}) 
})



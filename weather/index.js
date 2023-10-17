


const input = document.querySelector('.input')
const subm = document.querySelector('.submit')

subm.addEventListener('click',()=>{
    console.log(input.value)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=27003ec5cbbd70ae707c6360ae1d1bed`)
.then((er)=>er.json()).then((data)=>console.log(data))


})
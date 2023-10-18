// // const data = [
// //     {
// //       "coord": {
// //         "lon": 10.99,
// //         "lat": 44.34
// //       },
// //       "weather": [
// //         {
// //           "id": 804,
// //           "main": "Clouds",
// //           "description": "overcast clouds",
// //           "icon": "04d"
// //         }
// //       ],
// //       "base": "stations",
// //       "main": {
// //         "temp": 281,
// //         "feels_like": 281,
// //         "temp_min": 279.38,
// //         "temp_max": 285.61,
// //         "pressure": 1015,
// //         "humidity": 98,
// //         "sea_level": 1015,
// //         "grnd_level": 928
// //       },
// //       "visibility": 5859,
// //       "wind": {
// //         "speed": 0.89,
// //         "deg": 13,
// //         "gust": 0.9
// //       },
// //       "clouds": {
// //         "all": 100
// //       },
// //       "dt": 1697626999,
// //       "sys": {
// //         "type": 2,
// //         "id": 2004688,
// //         "country": "IT",
// //         "sunrise": 1697607237,
// //         "sunset": 1697646496
// //       },
// //       "timezone": 7200,
// //       "id": 3163858,
// //       "name": "Zocca",
// //       "cod": 200
// //     }
// //   ];
  
// //   // name özelliğini ekranda yazdırma
// //   if (data.length > 0) {
// //     console.log("Şehir: " +data[0].main.temp_max);
// //   } else {
// //     console.log("Veri bulunamadı.");
// //   }



let box = []

const inp = document.querySelector('.input')
const btn = document.querySelector('.submit')
const card = document.querySelector('.card')
const clos = document.querySelectorAll('.card_close')
btn.addEventListener('click',async()=>{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=27003ec5cbbd70ae707c6360ae1d1bed`)
    const veri = await data.json()
    box.push(veri)
    ekrana()
    inp.value = ''

})

const screnn = ()=>{
    
    box.map((er)=>{
        card.innerHTML += `
         <div class='card_in'>
           <div class='card_close'>x</div>
         <div class='card_mitte'>
            <h2>${er.name}</h2>
            <span>${er.main.feels_like}</span>
            <span>${er.weather[0].description}</span>
         </div>
         <div class='son'>
             <span>${er.sys.country}</span>
        </div>
        </div>
        `
    })

}

const ekrana = ()=>{
    card.innerHTML = ''

    if(box.length < 5){
        screnn()
    }else{
        alert('konnen sie ein Cart losen')
        screen()
    }
}

card.addEventListener('click', (event) => {
    if (event.target.classList.contains('card_close')) {
        console.log(event.target.parentElement);
        event.target.parentElement.remove()

    }
});


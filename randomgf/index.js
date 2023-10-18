console.log('erst')
 setInterval(()=>{
    fetch('https://randomuser.me/api').then((data)=>data.json()).then((data)=>ekran(data))
    const  ekran= (data)=>{

        console.log(data.results[0])
        
        document.querySelector('.random').innerHTML = `
          <img src = '${data.results[0].picture.thumbnail}'/>
          <h1>${data.results[0].name.first}</h1>
          <h2>${data.results[0].email}</h2>
          <h2>${data.results[0].phone}</h2>
        `
        }
},2000)


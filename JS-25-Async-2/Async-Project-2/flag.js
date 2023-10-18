const getir = async ()=>{
    const res =  await fetch(`https://restcountries.com/v3.1/name/Turkey`)
    const veri = await  res.json()
     ekranaBastir(veri[0])
   
   
    console.log(veri)   
   }
   
   getir()
   
    const ekranaBastir = (ulke)=>{
        document.querySelector('.countries').innerHTML = `
        <div class="card text-start w-50 shadow-lg bg-light my-4">
        <img src = ${ulke.flags.svg} class="card-img-top" alt="..." />
        <div class="card-body">
           <h5 class="card-title">${ulke.name.common} </h5>
           <p class="card-text"></p>
        </div>
        
        <ul class="list-group list-group-flush">
           <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${ulke.capital} </li>
  
  
            <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(ulke.languages)}  </li>
            
            <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>${Object.values(ulke.currencies)[0].name} ${Object.values(ulke.currencies)[0].symbol}  </li>
  
        </ul>
     </div>
        `
   
    }
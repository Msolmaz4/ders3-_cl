//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.


// fetch('https://api.github.com/users').then((res)=>res.json()).then((veri)=> ekranaBastir(veri))
fetch('https://api.github.com/users').then((res)=>{
    if(res.ok == false){
        throw new Error('urld ist eine Problem aufgetaucht')
    }
   return res.json()
}).then((veri)=> ekranaBastir(veri))


const ekranaBastir =(veri)=>{
   const alan = document.querySelector('section')

   veri.forEach((elemen)=>{
    alan.innerHTML += `
    <h1>${elemen.login}</h1>
    <img src=${elemen.avatar_url}/>
    <h3>${elemen.node_id}</h3>
    
    `
   })
    

}
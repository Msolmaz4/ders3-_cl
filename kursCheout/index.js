//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const kargo = 15.0;
const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

sepettekiler.forEach((urun)=>{

  const {name,price,adet,img} = urun

  document.querySelector('#urun-rowlari').innerHTML +=` 
<div class="card mb-3" style="max-width: 540px;">

  <div class="row g-0">

    <div class="col-lg-3 col-md-5">
      <img src=${img}  class=" w-100 rounded-start" alt="..."/>
    </div>

    <div class="col-md-7 ">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">$
                      <span class="indirim-price">${(price*0.7).toFixed(2)} </span>
                      <span class="h5 text-dark text-decoration-line-through"> </span>${price}
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="adet-controller">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">  ${adet}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-ürün">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="ürün-toplam">${(price*0.7*adet).toFixed(2)} </span>
                  </div>
      </div>
    </div>
  </div>
</div> `
}
)
sil()

function sil(){
  document.querySelectorAll('.remove-ürün').forEach((er)=>er.addEventListener('click',()=>{

  }))
}



//adet degistirme
document.querySelectorAll('.adet-controller').forEach((er)=>{
 
  const arti = er.lastElementChild
  const eksi = er.firstElementChild
  const adet1 = er.children[1]


  arti.onclick = ()=>{
    console.log(er.closest('.card').querySelector('.card-title').textContent)
    const deger = er.closest('.card').querySelector('.card-title').textContent
    console.log(deger)
    adet1.textContent = +adet1.textContent +1 
    adet1.closest('.card').querySelector('.ürün-toplam').textContent = Number(adet1.textContent)*Number(adet1.closest('.card').querySelector('.indirim-price').textContent
     ) 
     console.log(er.closest('.card').querySelector('#ürün-adet').innerHTML)
     sepettekiler= sepettekiler.filter((er)=> er.name != deger )
     console.log(sepettekiler)
     sepettekiler.push(
      {
       name:deger,
       price:er.closest('.card').querySelector('.h5').textContent,
       adet:adet1.textContent,
       img:er.closest('.card').querySelector('img')
      }
     )
     console.log(sepettekiler,'son')
      
  }
 
  eksi.onclick = ()=>{
    adet1.textContent = adet1.textContent -1 
    adet1.closest('.card').querySelector('.ürün-toplam').textContent = Number(adet1.textContent)*Number(adet1.closest('.card').querySelector('.indirim-price').textContent
)

  }


})





 const urunToplam = document.querySelectorAll('.ürün-toplam')
//total Calculator
const araToplam = Array.from(urunToplam).reduce((a,b)=>a+Number(b.textContent),0)
document.querySelector('.aratoplam').textContent = araToplam
document.querySelector('.kargo').textContent = kargo
document.querySelector('.vergi').textContent = (araToplam*vergi).toFixed(2)
const toplam = document.querySelector('.toplam').textContent = araToplam + (araToplam*vergi).toFixed(2) + kargo



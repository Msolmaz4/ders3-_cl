
  //////////////////////////////////////////////
  const ksd = {
    ad: 'Ahmet',
    soyad: 'Yılmaz',
    yaş: 25,
  };
  
  const anahtarlar = Object.keys(ksd);
  
  console.log(anahtarlar);

  // Çıktı: ["ad", "soyad", "yaş"]






/////////////////////////////////////////////////
  const kisi = {
    ad: 'Ahmet',
    soyad: 'Yılmaz',
    yaş: 25,
  };
   //for in kullanabilir
  const girdiler = Object.entries(kisi);
  
  console.log(girdiler);

  ////consoldan donen
 
//   [
//     ["ad", "Ahmet"],
//     ["soyad", "Yılmaz"],
//     ["yaş", 25]
//   ]

  ///////////////////////////////////
  const kisin = {

    ad: 'Ahmet',
    soyad: 'Yılmaz',
    yaş: 25,
  };
  //for of
const mutlak = Object.values(kisin)
console.log(mutlak)
// //donus [
//     "Ahmet",
//     "Yılmaz",
//     25
// ]
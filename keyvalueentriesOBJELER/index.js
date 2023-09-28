
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

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
    ];

    const yeni = {...products}
    console.log(yeni ,'yeni')
    const son1 = Object.entries(yeni)
    console.log(son1[0])






    const productsByCategory = products.reduce((acc, product) => { 
        console.log(product)
        console.log(acc,'acc')
        const category = product.category; 
       
        if (!acc[category]) { 
           
          acc[category] = []; 
        } 
        acc[category].push(product); 
        return acc; 
      }, {}); 
      
      console.log(productsByCategory)
      console.log( Object.keys(productsByCategory),'key')

      // Use map to calculate the average price for each category
      const avgPriceByCategory = Object.keys(productsByCategory).map(category => { 
        const sum = productsByCategory[category].reduce((acc, product) => acc + 
      product.price, 0); 
        return { category: category, average: sum / productsByCategory[category].length 
      }; 
      }); 
       
      // Use filter to only select categories with an average above a certain threshold
      const highPricedCategories = avgPriceByCategory.filter(category => category.average 
      > 50); 
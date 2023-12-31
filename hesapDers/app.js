//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================
const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const acButtons = document.querySelector(".ac");
const pmButtons = document.querySelector(".pm");
const percentButtons = document.querySelector(".percent");
const ustEkran = document.querySelector(".previous-display");
const altEkran = document.querySelector(".current-display");



//?operator değişkenleri
let ustEkranYazi = "";
let altEkranYazi = "";
let islem = "";

//?eşittir yada percent e basıldıktan sonra yeni işleme yeni sayılar girmek için, tıklandı tıklanmadı boolean değişkeni hazırladık, eşittir (ve de percent) butonunda bu true yani tıklandı olacak

numberButtons.forEach((number) => {
  number.onclick = () => {

    ekranaHazirlik(number.textContent);

    updateEkran();
  };
});


const ekranaHazirlik = (num) => {
  

//?kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda girilen yeni sayı gözüksün

//?kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

//?kullanıcı 10 haneden sonra girmesin

//?kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün

//?eşittir yada percent a basıldıktan sonra girilen number tek başına ekranda görünsün,çünkü yeni işlem başlıyor(ekranda 72 yazan işlem sonucu varken 5 e basınca 725 olmasın)

//?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle
altEkranYazi += num;
}

//?BURADA YAPILANLARI EKRANA BASTIRMA
const updateEkran = () => {
  altEkran.textContent = altEkranYazi;
  //? işlem sonucu 8 haneyi geçmesin

  //?işlem girilince

  if (islem) {
    ustEkran.textContent = ustEkranYazi + islem;
  } else ustEkran.textContent = "";
};


//?herhangi bir işleme tıklandığında

operationButtons.forEach((op)=>{

  op.onclick=()=>{
islem=op.textContent
ustEkranYazi=altEkranYazi

altEkranYazi=""
updateEkran()


  }
})



//?eşittire basılmadan arka arkaya işleme basılırsa (alt ve üst ekran doluyken işleme basılmaya devam edilirse)

//?eşittir butonuna tıklandığında

//?AC butonuna basıldığında








//?kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda girilen yeni sayı gözüksün




//?kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin



//?kullanıcı 10 haneden sonra girmesin






//?kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün


//?eşittir yada percent a basıldıktan sonra girilen number tek başına ekranda görünsün,çünkü yeni işlem başlıyor(ekranda 72 yazan işlem sonucu varken 5 e basınca 725 olmasın)

//?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle
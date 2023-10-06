console.log('first')

let liste = []
let total = 0
let completed = 0
const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

listeButon.onclick=()=>{
    if(!listeInput.value){
        alert('lutfen bir not giriniz')
    }
   else if(liste.includes(listeInput.value)) return
    else{
        liste.push(listeInput.value)
        total++
       // total+=1

       listeUl.innerHTML += `
       <li class=''> <i class="fa fa-check fa-lg"></i>
        <p>${liste[liste.length-1]}</p>
       <i class="fa fa-trash fa-lg"></i></li>
       `
       toplam.textContent = total
       listeInput.value = ''
       listeInput.focus()
        // silme
        createSilButon()
        createCheckButton()
    }
}

const createSilButon = ()=>{
    document.querySelectorAll('.fa-trash').forEach((a)=>a.onclick=()=>{
        a.parentElement.remove()
        total -=1
        toplam.textContent = total
       //a.closest('li').remove liye kadar gider ordan siler  yoksa prant demek yerine  bi=unu kullaniriyz
       liste =  liste.filter((yapilacak)=>yapilacak != a.parentElement.querySelector('p').textContent)
       console.log(liste)
       if(a.parentElement.classList.contains('checked')){
        completed -= 1
        document.querySelector('#tamamlanan').textContent = completed
       }
      })
}



const createCheckButton = ()=>{
    document.querySelectorAll('.fa-check').forEach((a)=>a.onclick=()=>{
       // a.parentElement.classList.add('checked')
       if(a.parentElement.classList.contains('checked')){
        a.parentElement.classList.remove('checked')
        completed -=1
       }
       else {
        a.parentElement.classList.add('checked')
        completed += 1
       }
       document.querySelector('#tamamlanan').textContent = completed
    })
}
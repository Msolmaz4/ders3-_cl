console.log('burdeayi')
const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const kayit = document.querySelector('.kayit')
const ana = document.querySelector('.ana')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
 let ters = false

data.map((er)=>{
  
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  li.setAttribute('id',`${er.id} `)
  li.textContent = `${er.name} `
  const deleteButton = document.createElement('button')
  deleteButton.setAttribute('class','delete')
  deleteButton.style.background = 'red'
  const guncelle = document.createElement('button')
  guncelle.setAttribute('class','guncelle')
  

  li.appendChild(deleteButton)
  li.appendChild(guncelle)
  ul.appendChild(li)
  kayit.appendChild(ul)
  
    deleteButton.addEventListener('click',function(e){
    const liElement = e.target.parentElement;
    const liId = liElement.getAttribute('id');
    console.log(typeof liId);
    console.log(data)
    itemsArray =  data.filter((er)=>er.id != Number(liId))
    localStorage.setItem('items', JSON.stringify(itemsArray));
    const parent = this.parentNode;
     parent.remove();
   })
   inp.value = ''
   
   const guncel= document.querySelectorAll('.guncelle')



   guncel.forEach((button)=>{
   
     button.addEventListener('click',()=>{
       ters = !ters
       guncel.forEach((btn)=>{
         btn.classList.remove('active')
       })
       button.classList.add('active')
       open1Modal(button)
     })
   })
})

const add = ()=>{
    if(inp.value == '') return
    console.log(inp.value)
    itemsArray.push( {
      id:new Date().getTime(),
      name:inp.value})
    
    localStorage.setItem('items', JSON.stringify(itemsArray));
    const ul = document.createElement('ul')
     const li = document.createElement('li')
    // li.setAttribute('id',`${id} `)
     li.textContent = inp.value
     const deleteButton = document.createElement('button')
     deleteButton.setAttribute('class','delete')
     deleteButton.style.background = 'red'
     const guncelle = document.createElement('button')
     guncelle.setAttribute('class','guncelle')
    

     li.appendChild(deleteButton)
     li.appendChild(guncelle)
     ul.appendChild(li)
     kayit.appendChild(ul)
   
      deleteButton.addEventListener('click',function(e){
      const liElement = e.target.parentElement;
      console.log(liElement)
      const liId = liElement.getAttribute('id');
      console.log(liId);
      console.log(data)
      itemsArray =  data.filter((er)=>er.id != Number(liId))
      localStorage.setItem('items', JSON.stringify(itemsArray));
      const parent = this.parentNode;
       parent.remove();
     })
   
    
   inp.value = ''

const guncel= document.querySelectorAll('.guncelle')



guncel.forEach((button)=>{
  button.addEventListener('click',()=>{
    guncel.forEach((btn)=>{
      btn.classList.remove('active')
    })
    button.classList.add('active')
    open1Modal(button)
  })
})
 

}


btn.addEventListener('click',add)
inp.addEventListener('keyup',(e)=>{
if(e.keyCode === 13){
    add()
    inp.value = ''
}
})

const open1Modal =(a)=>{
 let icerdeki = a.parentElement.textContent
 console.log(a.parentElement.textContent)
   
   console.log(ters,'openmodal')
   const id = a.getAttribute('id')
   console.log(id)
   const newDiv = document.createElement('input')
   newDiv.value = icerdeki
   newDiv.classList.add('open1')

   ana.appendChild(newDiv)
  
   if(ters == false){
    console.log('first')
   }
   


}

  //  const deleteAll = document.querySelectorAll(".delete")
    //  Array.from(deleteAll).forEach((er)=>{
      
    //          er.addEventListener('click',(e)=>{
    //         const li = e.target.parentElement 
    //         li.remove()
    //         //silme()
    //     })
    //  })

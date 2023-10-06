console.log('burdeayi')
const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const kayit = document.querySelector('.kayit')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


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
  guncelle.style.background= 'yellow'

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
     li.textContent = inp.value
     const deleteButton = document.createElement('button')
     deleteButton.setAttribute('class','delete')
     deleteButton.style.background = 'red'
     const guncelle = document.createElement('button')
     guncelle.setAttribute('class','guncelle')
     guncelle.style.background= 'yellow'

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
   guncelle.addEventListener('click',openModal) 
    
   inp.value = ''
}


btn.addEventListener('click',add)
inp.addEventListener('keyup',(e)=>{
if(e.keyCode === 13){
    add()
    inp.value = ''
}
})

const openModal =()=>{

}

  //  const deleteAll = document.querySelectorAll(".delete")
    //  Array.from(deleteAll).forEach((er)=>{
      
    //          er.addEventListener('click',(e)=>{
    //         const li = e.target.parentElement 
    //         li.remove()
    //         //silme()
    //     })
    //  })

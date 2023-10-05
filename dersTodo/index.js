console.log('burdeayi')
const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const kayit = document.querySelector('.kayit')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
console.log(itemsArray ,'items')
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
console.log(data)


     


const add = ()=>{
    if(inp.value == '') return
    itemsArray.push(
      { id:new Date().getTime(),
        name:`${inp.value}`}
    )
    
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

    

     
    //  const deleteAll = document.querySelectorAll(".delete")
    //  Array.from(deleteAll).forEach((er)=>{
    //     er.addEventListener('click',(e)=>{
    //         const li = e.target.parentElement 
    //         li.remove()
    //     })
    //  })
   
    deleteButton.addEventListener('click', function(){
      const parent = this.parentNode;
      parent.remove();
    });
   guncelle.addEventListener('click',openModal)
  
       

      console.log(itemsArray)
    

        
        
    
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



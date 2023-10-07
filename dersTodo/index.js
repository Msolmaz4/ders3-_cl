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
     console.log(liId);
  data.filter(er=>console.log(typeof er.id))
    itemsArray =  data.filter((er)=>er.id != Number(liId))
    console.log(itemsArray)
    localStorage.setItem('items', JSON.stringify(itemsArray));
   
   })
   inp.value = ''
   
   const guncel= document.querySelectorAll('.guncelle')
   //console.log(guncel)
   guncel.forEach((a)=>a.onclick=()=>{
  
    open1Modal(a)
   })



   
})

const add = ()=>{
    if(inp.value == '') return
    console.log(inp.value)
    
   let crt = new Date().getTime()

    itemsArray.push({
      id:crt,
      name:inp.value})
    
    localStorage.setItem('items', JSON.stringify(itemsArray));
    const ul = document.createElement('ul')
     const li = document.createElement('li')
    
     li.setAttribute('id',`${crt}`)
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
      //console.log(data)
      
   
      itemsArray =  data.filter((er)=>er.id != Number(liId))
      console.log(itemsArray)
      localStorage.setItem('items', JSON.stringify(itemsArray));
     
      
     })
    
   inp.value = ''



const guncel= document.querySelectorAll('.guncelle')
//console.log(guncel)
guncel.forEach((a)=>a.onclick=()=>{
// console.log(a.parentElement)
 open1Modal(a)
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
  //console.log(a.parentElement,'openmodalki a')
 let icerdeki = a.parentElement.textContent
// console.log(a.parentElement.textContent,'guncelinputici')
   
 

   const id = a.parentElement.getAttribute('id')
   console.log(typeof id,'opendeki')
   const newDiv = document.createElement('input')
   newDiv.value = icerdeki
   newDiv.classList.add('open1')
   ana.appendChild(newDiv)
  document.querySelector('.open1').addEventListener('keyup',(e)=>{
    if(e.keyCode == 13){
     console.log(document.querySelector('.open1').value)
      console.log(data)
    
     let son = data.filter((er)=>er.id != Number(id))
  
   son.push(
    {
      id:Number(id),
      name:document.querySelector('.open1').value
    }
   )
     
      console.log(son)
      localStorage.setItem('items', JSON.stringify(son));
      location.reload()
    }
    
  })

 
} 























  //  const deleteAll = document.querySelectorAll(".delete")
    //  Array.from(deleteAll).forEach((er)=>{
      
    //          er.addEventListener('click',(e)=>{
    //         const li = e.target.parentElement 
    //         li.remove()
    //         //silme()
    //     })
    //  })

let taskArray = []
console.log(typeof taskArray)

const saveTask = ()=>{
    let taskName = document.getElementById('txtItem').value
    let todoObject = {
        taskId:taskArray.length+1,
        taskName : taskName
    }
       taskArray.push(todoObject)
  
       renderTask()
       document.getElementById('txtItem').value=''
}

const renderTask = ()=>{
    document.getElementById('myTaskList').innerHTML=''
    for(let index = 0; index<taskArray.length ;index++){
        const dynamicLi = document.createElement('li')
         dynamicLi.classList.add('task')
         const myLable = document.createElement('label')
         const myPara = document.createElement('p')
         myPara.textContent = taskArray[index].taskName
         myLable.appendChild(myPara)
         dynamicLi.appendChild(myLable)

         const myDiv = document.createElement('div')
         myDiv.classList.add('settings')
         const editIcon = document.createElement('i')
         editIcon.classList.add('fa')
         editIcon.classList.add('fa-pencil-square')
         editIcon.onclick=(e)=>{editTask(e)}
         editIcon.taskId = taskArray[index].taskId
         var deleteIcon = document.createElement('i')
         deleteIcon.classList.add('fa')
         deleteIcon.classList.add('fa-trash')
         deleteIcon.onclick=(e)=>{ deleteTask(e)}
         deleteIcon.taskId = taskArray[index].taskId
         myDiv.appendChild(editIcon)
         myDiv.appendChild(deleteIcon)
         dynamicLi.appendChild(myDiv)

         document.getElementById('myTaskList').appendChild(dynamicLi)
         
         
         //editIcon.addEventListener('click',editTask)
         //editIcon.taskId = taskArray[index].taskId
    }
      const deleteTask = (e)=>{
        //console.log(e) //burdan targrt raskid bukuruy
        let index = taskArray.findIndex(m=>m.taskId == e.target.taskId)
        taskArray.splice(index,1)
        renderTask()
   }    
   const editTask = (e)=>{
    console.log(typeof e.target.taskId)
    console.log(document.getElementById('txtItem').value)
    
     let edit = taskArray.filter((er)=>er.taskId !=e.target.taskId)
     console.log(edit,'ilkedit')
     edit.push({
        id:e.target.taskId,
        taskName :document.getElementById('txtItem').value
     })
  console.log(edit,'edut')
   taskArray = edit
   renderTask()
   }    
   
}
console.log(taskArray,'son')
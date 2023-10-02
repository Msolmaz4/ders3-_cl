
const sectionArticel = document.querySelector('.selection')
const yourCoicerDiv = document.getElementById('your-choice')
const pcCoiceDiv = document.getElementById('pc-choice')
const pcSelectImg = document.createElement('img')
const userSelectImg = document.createElement('img')
const messagePar = document.querySelector('.message')
const topp = document.querySelector('#top-score')

// Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";
// Score 
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")
const domTopScore = document.getElementById("top-score")
// Modal
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainButton = document.getElementById("play-again")

let burda = localStorage.getItem('pc')
const data = []

topp.textContent = `10 : ${burda}`


sectionArticel.addEventListener('click',(e)=>{
   // console.log(e)
   if(e.target.id)
   {
    userSelectImg.src= `./assets/${e.target.id}.png`
    userSelectImg.alt = `${e.target.id}`
    yourCoicerDiv.appendChild(userSelectImg)
    createPcSelection()
   }
 
})

playAgainButton.addEventListener('click',()=>{
   // modalCardSection.classList.toogle('show') //varsa cikar yoksa ekle
     modalCardSection.style.display = 'none'
    
    window.location.reload() 
})


const createPcSelection = ()=>{
   const pcArr = ['rock ','paper','scissor']
    let i =Math.trunc(Math.random()*3)
    pcRandom = pcArr[i]

    pcSelectImg .src= `./assets/${pcRandom}.png`
    pcSelectImg .alt = 'rock'
    pcCoiceDiv.appendChild(pcSelectImg)
    calculateResult()
}

const calculateResult = ()=> {
    


    if (userSelectImg.alt == pcRandom){
        draw()
    }else{
        if(userSelectImg.alt === "rock"){
            pcRandom === 'paper' ? youLost() :youWin ()
        } else if(userSelectImg.alt === scissor){
            pcRandom === 'rock' ? youLost():youWin()
        }else if(userSelectImg.alt === 'paper'){
            pcRandom === 'scissor'? youLost ():youWin()
        }
    
}
if(pcScoreSpan.textContent ==='10'|| yourScoreSpan.textContent === '10'){
    locahesap(pcScoreSpan.textContent, yourScoreSpan.textContent)
    console.log(pcScoreSpan.textContent,'pc',yourScoreSpan.textContent,'you')
    openModal()
}
}
const draw = ()=>{
    messagePar.texContex = 'it a draw'
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}

const youLost = ()=>{
    messagePar.textContent= 'it a drwa'
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent ++
}
const youWin = ()=>{
    messagePar.textContent= 'it a win'
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor =GREEN
    yourScoreSpan.textContent ++
}
const openModal = ()=>{
   
    modalCardSection.classList.add('show')
    if(yourScoreSpan.textContent === '10'){
        finalMessagePar.textContent = 'you win'
        document.querySelector('.modal').style.backgroundColor = GREEN
        playAgainButton.style.color=GREEN

    }
    else{
        finalMessagePar.textContent = 'you lost'
        document.querySelector('.modal').style.backgroundColor= RED
        playAgainButton.style.color=RED}

   
}

 const locahesap=(pc,you)=>{
    console.log(typeof you)
    if(Number(you)>Number(pc))
    { 
        console.log('icerdeyiz')
        //topp.textContent = `${you} : ${pc}`
        localStorage.setItem('pc',Number(pc))
    }
}




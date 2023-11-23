const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}
const sound = new Audio("../images/y2mate.com - Squish  Sound Effect.mp3");
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    if (timeEl.innerHTML != "game over"){
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++

    }
}
function createButterfly() {
    const butter = document.createElement('div')
    butter.classList.add("insect")
    const { x, y } = getRandomLocation()
    butter.style.top = `${y}px`
    butter.style.left = `${x}px`
    butter.innerHTML = `<img src="../images/butter.png" style="transform: rotate(${Math.random() * 360}deg)" />`

    setTimeout(function(){butter.classList.add('caught')},5000)
    butter.addEventListener('click', catchButter)
    game_container.appendChild(butter)
}

/* function loseScore(){
    score-=10;

    if(score <0){
        alert(`You lost with ${score} score, play again?`);
        location.reload();}
} */

function changeScore(a){
    if(a>0){
        score++
        scoreEl.innerHTML = `Score: ${score}`
    }
    else{
        score-=10;
        scoreEl.innerHTML = `Score: ${score}`


    }
    if(score <0){
        setTimeout(function(){
            alert(`Game over, play again?`);
        },1)

        location.reload();}
}
function catchButter(){
    sound.play();
    changeScore(-1)
    this.classList.add('caught')
    setTimeout(() => this.remove(), 1000)

    addInsects()
}
function createInsect() {

    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)
    setTimeout(function(){insect.classList.add('caught')},5000)
    game_container.appendChild(insect)
    
    
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    sound.play();
    changeScore(1)
    this.classList.add('caught')
    setTimeout(() => this.remove(), 1000)
    addInsects()    ;


}

function addInsects() {
/*     if(score >=0){ */
        setTimeout(createInsect, 1000);
        setTimeout(createInsect, 1500);
        if (Math.floor(Math.random()*10 +1)%2 === 0){
        setTimeout(createButterfly,1000);
/*         }
    }   
    else{
        alert("You lost, play again?");
        location.reload(); */
    }
}

/* 
function increaseScore() {
    score++
    scoreEl.innerHTML = `Score: ${score}`

} */

// Write your code here

const light1 = document.querySelector("#lightbulb1")
const light2 = document.querySelector("#lightbulb2")
const light3 = document.querySelector("#lightbulb3")
const subtitle = document.querySelector(".subtitle")
let clickCount = 0;
const handleSubtitle = ()=>{
    clickCount++
    subtitle.innerHTML = `You've clicked the lights ${clickCount} times`
}

light1.addEventListener("click",function(){
    light1.classList.toggle('active')
    handleSubtitle()
})
light2.addEventListener("click",function(){
    light2.classList.toggle('active')
    handleSubtitle()
})
light3.addEventListener("click",function(){
    light3.classList.toggle('active')
    handleSubtitle()
})
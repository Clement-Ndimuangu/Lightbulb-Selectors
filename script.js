// Write your code here

const light1 = document.querySelector("#lightbulb1")
const light2 = document.querySelector("#lightbulb2")
const light3 = document.querySelector("#lightbulb3")
const subtitle = document.querySelector(".subtitle")
let clickCount = 0;
const handleSubtitle = ()=>{
    clickCount++
    if(clickCount == 1){
        subtitle.innerHTML = `You've clicked the lights ${clickCount} time`  
    }else{
        subtitle.innerHTML = `You've clicked the lights ${clickCount} times`
    }
}

light1.addEventListener("mouseenter",function(){
    light1.classList.toggle('active')
    handleSubtitle()
})
light1.addEventListener("mouseleave",function(){
    light1.classList.toggle('active')
})
light2.addEventListener("mouseenter",function(){
    light2.classList.toggle('active')
    handleSubtitle()
})
light2.addEventListener("mouseleave",function(){
    light2.classList.toggle('active')
})
light3.addEventListener("mouseenter",function(){
    light3.classList.toggle('active')
    handleSubtitle()
})
light3.addEventListener("mouseleave",function(){
    light3.classList.toggle('active')
})
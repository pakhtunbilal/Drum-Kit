let audio = new Audio('sounds/tom-1.mp3')
let audio1 = new Audio('sounds/tom-2.mp3')
let audio2= new Audio('sounds/tom-3.mp3')
let audio3 = new Audio('sounds/tom-4.mp3')
let audio4 = new Audio('sounds/crash.mp3')
let audio5 = new Audio('sounds/kick-bass.mp3')
let audio6 = new Audio('sounds/snare.mp3')




for(let i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      let buttonHTML =  this.innerHTML
      command(buttonHTML);
      animation(buttonHTML);
    })
}

document.addEventListener("keypress",function(event){
  command(event.key);
  animation(event.key)

})


function command(key){
  switch(key){
    case "w": audio.play()
    break;
    case "a": audio1.play()
    break;
    case "s": audio2.play()
    break;
    case "d": audio3.play()
    break;
    case "j": audio4.play()
    break;
    case "k": audio5.play()
    break;
    case "l": audio6.play()
    break;
  }
}

function animation(currentkey){
  let animatebutton = document.querySelector("." + currentkey);
  animatebutton.classList.add("pressed")
  setInterval(()=>{
    animatebutton.classList.remove("pressed")
  },0.100)
}
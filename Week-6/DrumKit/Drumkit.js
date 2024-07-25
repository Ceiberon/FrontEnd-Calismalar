var x = document.getElementById("Boom"); 

function playBoom() { 
  x.play(); 
} 

var y = document.getElementById("Clap")

function playClap(){
  y.play()
}

var z = document.getElementById("Hihat")

function playHihat(){
  z.play()
}

var a = document.getElementById("Kick")

function playKick(){
  a.play()
}

var b = document.getElementById("OpenHat")

function playOpenHat(){
  b.play()
}

var c = document.getElementById("Ride")

function playRide(){
  c.play()
}
var d = document.getElementById("Snare")

function playSnare(){
  d.play()
}
var f = document.getElementById("Tink")

function playTink(){
  f.play()
}
var o = document.getElementById("Tom")

function playTom(){
  o.play()
}



document.addEventListener('keydown',function(info){
  if(info.code=="KeyA"){
      Boom.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyS"){
      Clap.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyD"){
      Hihat.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyF"){
      Kick.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyG"){
    OpenHat.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyH"){
      Ride.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyJ"){
      Snare.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyK"){
      Tink.play();
  }
})

document.addEventListener('keydown',function(info){
  if(info.code=="KeyL"){
      Tom.play();
  }
})
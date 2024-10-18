let Tracks = [
{
    name:"Sparks",
    author:"Coldplay",
    mp3file:"./assets/audio/Sparks.mp3",
   img:"./assets/images/Sparks.jpg",
   imgid:"1"
},
{
    name:"Rises the moon",
    author:"Liana Flores",
    mp3file:"./assets/audio/rises the moon.mp3",
    img:"./assets/images/risesthemoon.jpg",
    imgid:"2"
},
{
    name:"No longer Bound",
    author:"Hulvey & Forest Frank",
    mp3file:"./assets/audio/no longer bound.mp3",
    img:"assets/images/notbound.jpg",
    imgid:"3"
},
{
name:"Cant Tell It All (Remix)",
author:"Hulvey & KB & Lecrae",
mp3file:"./assets/audio/All.mp3",
img:"./assets/images/All.jpg",
imgid:"4"
}, 
{
    name:"Atlantis",
    author:"Seafret",
   mp3file:"./assets/audio/Atlantis.mp3",
   img:"./assets/images/Atlantis.jpg",
   imgid:"5"
},
{
    name:"Toxic",
    author:"BoywithUke",
    mp3file:"./assets/audio/Toxic.mp3",
    img:"./assets/images/Toxi.jpg",
    imgid:"6"
},
{
    name:"Blessings",
    author:"Hollow Coves",
    mp3file:"./assets/audio/Blessings.mp3",
    img:"./assets/images/Blessings.jpg",
    imgid:"7"
},
{
    name:"Altar",
    author:"Hulvey & Forrest Frank",
    mp3file:"./assets/audio/Altar.mp3",
    img:"./assets/images/Altar.jpg",
    imgid:"8"
},{
    name:"Let her go",
    author:"Passenger",
    img:"./assets/images/passenger.jpg",
    mp3file:"./assets/audio/Let Her Go.mp3",
    imgid:"9"
},
{
    name:"Memory Reboot",
    author:"VØJ & Narvent",
    mp3file:"assets/audio/Memory Reboot.mp3",
    img:"assets/images/Reboot.jpg",
    imgid:"10"
}
];
let tracknumber = 0;
let audiorunning = false;
let audio = document.getElementById("audio");
let Objects = document.querySelectorAll('.track')
let playbtn = document.getElementById("play")
let SetTracks = () => {
    for(let i = 0; i < Tracks.length; i++){
        Objects[i].innerHTML = `<img  id=${Tracks[i].imgid} src=${Tracks[i].img} alt=${Tracks[i].name} style=""> `
        document.getElementById(`${Tracks[i].imgid}`).onclick = () => {
        audio.src = Tracks[i].mp3file;
      
        audio.play()
      
        audiorunning = true;
        playbtn.textContent = "Pause"
        document.getElementById('trackply').textContent = `${Tracks[i].name} from ${Tracks[i].author}`
       
        
    }
}
}
SetTracks()
let loadTrack = () => {
    let currentTrack = Tracks[tracknumber];
    audio.src = currentTrack.mp3file
    document.getElementById('trackply').innerHTML = currentTrack.name;
};

playbtn.addEventListener('click',function(){
    if(audiorunning == false){
        audio.play()
        playbtn.textContent="Pause"
        audiorunning = true
    }
    else if(audiorunning == true){
        audio.pause()
        playbtn.textContent = "Play";
        audiorunning = false;
    }
})
function check(){
    document.getElementById('duration').valueAsNumber = audio.currentTime;
}
setInterval(check, 1000)
function change(){
    audio.currentTime = document.getElementById('duration').valueAsNumber
}
document.getElementById("duration").addEventListener('click',change)
let loopbtn = document.getElementById('loop');
loopbtn.onclick = () => {
    if(audio.loop == false){
        audio.loop = true;
        loopbtn.textContent = "Loop:On"
    }
    else if(audio.loop == true){
        audio.loop = false;
        loopbtn.textContent = "Loop:Off"
    }
}
loadTrack()
let previousbtn = document.getElementById('Prev');
previousbtn.onclick = () => {
if(tracknumber == 0){
    tracknumber = Tracks.length ;
    loadTrack()
}
 if(tracknumber < 0){
    tracknumber = Tracks.length;
    loadTrack()
    audio.play()
}
else{
    tracknumber--
    loadTrack()
    audio.play()
}
}
let nextbtn = document.getElementById('next');
nextbtn.onclick = () => {
    if(tracknumber >= Tracks.length){
        tracknumber = 0;
        loadTrack()
        audio.play()
    }
    else{
        tracknumber++
        loadTrack()
        audio.play()
    }
}
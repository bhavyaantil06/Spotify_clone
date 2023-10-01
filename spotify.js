console.log("Welcome to Spotify")

let songIndex = 0
let audioElement = new Audio('Kangana Tera Ni - ABEER ARORA _ Laung Mare Lashkare (Full Video)_Full-HD-mc.m4a')
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar')
let gif = document.getElementById('gif')

let songs = [
    {songName: "Champagne " , filePath: "Projects\Spotify Clone\Kangana Tera Ni - ABEER ARORA _ Laung Mare Lashkare (Full Video)_Full-HD-mc.m4a", coverPath: "CHAMPAGNE- Diljit Dosanjh (Official Audio) Intense _ Raj Ranjodh _ MoonChild Era_Full-HD-mc.jpg"    }
]
// audioElement.play();

//play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0 ){
        audioElement.play()
        gif.style.opacity = 1 
        masterPlay.classList.remove('play-solid');
            masterPlay.classList.add('pause-solid');
            masterPlay.src = 'pause-solid.svg'; // Change the src attribute
            
        
    }
    else{
        audioElement.pause()
        gif.style.opacity = 0
        masterPlay.classList.remove('pause-solid');
            masterPlay.classList.add('play-solid');
            masterPlay.src = 'play-solid.svg'; // Change the src attribute back to the original image
        
    }
})

//listen to events
audioElement.addEventListener('timeupdate' , ()=>{
    console.log("Time update");
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100)
    console.log(progress)
    progressbar.value = progress; 
})

progressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = progressbar.value *  audioElement.duration/100
})

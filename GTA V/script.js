var audioList = [
    "audio/aGTA4.mp3",
    "audio/GTA _Paleto Score Setup.mp3",
    "audio/GTA _The Paleto Score.mp3",
    "audio/GTA_Casing the Jewel Store.mp3",
    "audio/GTA_Cleaning out the Bureau.mp3",
    "audio/GTA_Military Hardware.mp3",
    "audio/GTA_The Driller_ Sidetracked.mp3",
];

var currentIndex = 0;
var music = document.getElementById("backgroundMusic");

document.getElementById('revealButton').addEventListener('click', function() {
    music.play();
    document.querySelector('.layer1').style.opacity = '0';
    document.querySelector('.layer2').style.opacity = '1';
    this.style.display = 'none';
});

document.getElementById('pauseButton').addEventListener('click', function() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % audioList.length;
    music.src = audioList[currentIndex];
    music.play();
});


// document.getElementById("slide").addEventListener("click", function() {
//     var wrapper = document.querySelector(".wrapper");
    

//     var currentScrollPosition = wrapper.scrollLeft;
    

//     var cardWidth = document.querySelector(".card").offsetWidth;
//     var gap = parseInt(getComputedStyle(wrapper).gap);
    

//     var newScrollPosition = currentScrollPosition + cardWidth + gap;
    

//     wrapper.scrollTo({
//         left: newScrollPosition,
//         behavior: "smooth" // Yumuşak kaydırma
//     });
// });

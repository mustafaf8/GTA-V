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
var waveContainer = document.querySelector('.wave-container');

document.getElementById('revealButton').addEventListener('click', function() {
    music.play();
    document.querySelector('.layer1').style.opacity = '0';
    document.querySelector('.layer2').style.opacity = '1';
    this.style.display = 'none';
});

document.getElementById('pauseButton').addEventListener('click', function() {
    if (music.paused) {
        music.play();
        waveContainer.classList.remove('paused');
    } else {
        music.pause();
        waveContainer.classList.add('paused');
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % audioList.length;
    music.src = audioList[currentIndex];
    music.play();
});

const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i')
const bgm = document.querySelector('#bgm');
let isPlaying = false;

function disableScroll(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(screenTop, screenLeft);
    }

    rootElement.style.scrollBehavior = 'auto';
}

function enableScroll(){
    window.onscroll = function(){}
    rootElement.style.scrollBehavior = 'smooth';
    // localStorage.setItem('opened', 'true');
    playAudio()
}

function playAudio() {
    bgm.volume = 0.1;
    audioIconWrapper.style.display = 'flex';
    bgm.play();
    isPlaying = true;
}

audioIconWrapper.onclick = function() {
    if (isPlaying) {
        bgm.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    } else {
        bgm.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
}

// if (!localStorage.getItem('opened')){
//     disableScroll();
// }

disableScroll();

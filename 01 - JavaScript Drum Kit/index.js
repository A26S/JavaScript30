window.addEventListener("keydown", e => {
    // console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log(audioElement)
    if (audio) {
        audio.play() 
        const audioDiv = document.querySelector(`div[data-key="${e.keyCode}"]`)
        audioDiv.classList.add('playing')
        setTimeout(() => {
            audioDiv.classList.remove('playing')
        }, 70)
    } 
})
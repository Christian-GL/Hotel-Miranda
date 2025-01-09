
class VideoPlayButton {

    switchButtonStyle() {
        const video = document.getElementById('about__introduction__video')
        const newButton = document.getElementById('about__introduction__btn-play')

        newButton.addEventListener('click', () => {
            video.src += "&autoplay=1";
            setTimeout(function () {
                newButton.classList.add('displayNone')
            }, 250);
        })
    }
}
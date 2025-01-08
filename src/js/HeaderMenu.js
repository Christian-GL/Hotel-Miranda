
class HeaderMenu {

    menuControl() {
        const imgHamb = document.getElementById('header__nav__ctn-left__ctn-img__img__hamburger')
        const imgX = document.getElementById('header__nav__ctn-left__ctn-img__img__X')
        const menu = document.getElementById('header__nav__ctn-middle__menu')

        imgHamb.addEventListener('click', () => {
            imgHamb.classList.add('displayNone')
            imgX.classList.add('displayBlock')
            menu.classList.add('displayFlex')
        })

        imgX.addEventListener('click', () => {
            imgHamb.classList.remove('displayNone')
            imgX.classList.remove('displayBlock')
            menu.classList.remove('displayFlex')
        })
    }
}


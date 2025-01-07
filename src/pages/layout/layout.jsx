
import { Outlet } from "react-router-dom"


export const Layout = () => {

    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <div className="header__nav__container-left">
                        <img className="header__nav__container-left__img" src="src\imgWeb\hamburger.png"></img>
                        <h4 className="header__nav__container-left__icon-H">H</h4>
                        <h5 className="header__nav__container-left__title"><b>Hotel</b><br />Miranda</h5>
                        {/* <img className="header__nav__img" src="src\imgWeb\HotelMiranda.png"></img> */}
                    </div>
                    <div className="header__nav__container-right">
                        <img className="header__nav__container-right__img" src="src\imgWeb\personProfile.png"></img>
                        <img className="header__nav__container-right__img" src="src\imgWeb\magnifyingGlass.png"></img>
                    </div>
                </nav>
            </header>


            <Outlet />


            <footer className="footer">
                <div className="footer__container-main">
                    <div className="footer__container-main__container-title">
                        <h4 className="footer__container-main__container-title__icon-H">H</h4>
                        <h3 className="footer__container-main__container-title__title"><b>Hotel</b><br />Miranda</h3>
                    </div>
                    <p className="footer__container-main__text">Lorem ipsum dolor sit amet, consect etur
                        adipisicing elit, seddoing eius mod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,quis nostrud exercitat ion ullamco laboris nisi.
                    </p>
                    <nav className="footer__container-main__nav">
                        <img className="footer__container-main__nav__img" src="src\imgWeb\facebook.png"></img>
                        <img className="footer__container-main__nav__img" src="src\imgWeb\twitter.png"></img>
                        <img className="footer__container-main__nav__img" src="src\imgWeb\be.png"></img>
                        <img className="footer__container-main__nav__img" src="src\imgWeb\linkedin.png"></img>
                        <img className="footer__container-main__nav__img" src="src\imgWeb\youtube.png"></img>
                    </nav>
                    <section className="footer__container-main__services">
                        <h4 className="footer__container-main__services__title">Services.</h4>
                        <ul className="footer__container-main__services__list">
                            <li className="footer__container-main__services__list__option">+ Resturent & Bar</li>
                            <li className="footer__container-main__services__list__option">+ Swimming Pool</li>
                            <li className="footer__container-main__services__list__option">+ Wellness & Spa</li>
                            <li className="footer__container-main__services__list__option">+ Restaurant</li>
                            <li className="footer__container-main__services__list__option">+ Conference Room</li>
                            <li className="footer__container-main__services__list__option">+ Coctail Party House</li>
                            <li className="footer__container-main__services__list__option">+ Gaming Zone</li>
                            <li className="footer__container-main__services__list__option">+ Marriage Party</li>
                            <li className="footer__container-main__services__list__option">+ Party Planning</li>
                            <li className="footer__container-main__services__list__option">+ Tour Consultancy</li>
                        </ul>
                    </section>
                    <section className="footer__container-main__contact">
                        <h4 className="footer__container-main__contact__title">Contact Us.</h4>
                        <div className="footer__container-main__contact__container-contact">
                            <img className="footer__container-main__contact__container-contact__img" src="src\imgWeb\phone.png"></img>
                            <div className="footer__container-main__contact__container-contact__container-info">
                                <h5 className="footer__container-main__contact__container-contact__container-info__title">Phone Number</h5>
                                <h6 className="footer__container-main__contact__container-contact__container-info__number">+987 876 765 76 577</h6>
                            </div>
                        </div>
                        <div className="footer__container-main__contact__container-contact">
                            <img className="footer__container-main__contact__container-contact__img" src="src\imgWeb\mail.png"></img>
                            <div className="footer__container-main__contact__container-contact__container-info">
                                <h5 className="footer__container-main__contact__container-contact__container-info__title">Phone Number</h5>
                                <h6 className="footer__container-main__contact__container-contact__container-info__number">+987 876 765 76 577</h6>
                            </div>
                        </div>
                        <div className="footer__container-main__contact__container-contact">
                            <img className="footer__container-main__contact__container-contact__img" src="src\imgWeb\location.png"></img>
                            <div className="footer__container-main__contact__container-contact__container-info">
                                <h5 className="footer__container-main__contact__container-contact__container-info__title">Phone Number</h5>
                                <h6 className="footer__container-main__contact__container-contact__container-info__number">+987 876 765 76 577</h6>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="footer__credits">
                    <h4>Copyright By@Example - 2020</h4>
                    <div className="footer__credits__container-terms-policy">
                        <h4 className="footer__credits__container-terms-policy__terms">Terms of use &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</h4>
                        <h4 className="footer__credits__container-terms-policy__policy">Privacy Environmental Policy</h4>
                    </div>
                </section>
            </footer>
        </>
    )
}
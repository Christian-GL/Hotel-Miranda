
import { Layout } from "../layout/layout"


export const Home = () => {

    return (
        <div className="home">
            <section className="home__intro">
                <h5 className="home__intro__minor-title">The ultimate Luxury<br /> experience</h5>
                <h2 className="home__intro__mayor-title">The Perfect Base For You</h2>
                <button className="home__btn home__intro__btn--tour">Take a tour</button>
                <button className="home__btn home__intro__btn--learn">Learn more</button>
            </section>
            <section className="home__availability">
                <h5 className="home__availability__title">Arrival Date</h5>
                {/* Calendario */}
                <h5 className="home__availability__title">LeDeparture Date</h5>
                {/* Calendario */}
                <button className="home__btn home__availability__btn-check">Check availability</button>
            </section>
        </div>
    )
}
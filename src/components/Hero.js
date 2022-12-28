import HeroImg from "../images/hero.png"

function Hero(){
    return(
        <section className="containerHero">
            <img src={HeroImg} alt=""></img>
            <div className="heroTextContainer">
                <h4>Online Experences</h4>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}

export default Hero;
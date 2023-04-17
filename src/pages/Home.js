import sofa from "../assets/images/sofa.webp";

const Home = () => {
    return (
        <div>
            <div className="home__img-wrapper">
                <img src={sofa} alt="sofa-img" className="sofa-img" />
                <div className="text-overlay">
                    <h2>
                        <span>
                            A SOFA,
                            <br />A GOOD
                            <br /> BOOK,
                            <br />
                            AND YOU.
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;

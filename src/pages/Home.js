import sofa from "../assets/images/sofa.webp";
import Ailoo from "../assets/images/Books/Ailoo.webp";
import GallerySlider from "../components/GallerySlider";
import gallery from "../utils/BookGallery";

const Home = () => {
    return (
        <div>
            <section>
                <div className="home__img-wrapper">
                    <div className="wrapper">
                        <img src={sofa} alt="sofa-img" className="sofa-img" />
                        <h2 className="text-overlay">
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
            </section>
            <section>
                <div className="home__title">
                    <span>BOOK ADDICTS</span>
                    <h2>BESTSELLERS</h2>
                </div>
                <div className="home__gallery">
                    <div className="gallery-bestsellers-wrapper">
                        <div className="gallery-bestsellers">
                            <GallerySlider gallery={gallery} />
                        </div>
                    </div>
                    <div className="home__title recommended-books">
                        <span>This Month's</span>
                        <h2>RECOMMENDED BOOKS</h2>
                    </div>
                    <div className="gallery-recommended">
                        <GallerySlider gallery={gallery} />
                    </div>
                    <div className="home__title gallery-last-part">
                        <h2>
                            THERE'S NO <br /> SUCH THING AS TOO <br />
                            MANY BOOKS
                        </h2>
                        <button>
                            <a href="/About">Read Our Story</a>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className="home__title  book-launch">
                    <span>Coming Up</span>
                    <h2>BOOK LAUNCH</h2>
                </div>
                <div className="book-launch-wrapper">
                    <div className="book-launch-description">
                        <h3>Introducing The Land of AILOO</h3>
                        <span>By Mark Walker</span>
                        <span>
                            Coming <br /> July 12, 2023, 7PM
                        </span>
                        <span>
                            186 Clarence Street, Sydney CBD, NSW, Australia
                        </span>
                    </div>
                    <img src={Ailoo} alt="Ailoo" className="book-launch-img" />
                </div>
            </section>
        </div>
    );
};

export default Home;

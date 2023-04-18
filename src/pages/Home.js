import sofa from "../assets/images/sofa.webp";
import GallerySlider from "../components/GallerySlider";
import gallery from "../utils/BookGallery";

const Home = () => {
    return (
        <div>
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
            <div className="home__gallery-title">
                <span>BOOK ADDICTS</span>
                <h2>BESTSELLERS</h2>
            </div>
            <div className="home__gallery">
                <div className="gallery-bestsellers-wrapper">
                    <div className="gallery-bestsellers">
                        <GallerySlider gallery={gallery} />
                    </div>
                </div>
                <div className="home__gallery-title recommended-books">
                    <span>This Month's</span>
                    <h2>RECOMMENDED BOOKS</h2>
                </div>
                <div className="gallery-recommended">
                    <GallerySlider gallery={gallery} />
                </div>
                <div className="home__gallery-title gallery-last-part">
                    <h2>
                        THERE'S NO <br /> SUCH THING AS TOO <br />
                        MANY BOOKS
                    </h2>
                    <button>
                        <a href="/About">Read Our Story</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;

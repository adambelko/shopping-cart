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
            <div className="home__bestsellers-title-wrapper">
                <span>BOOK ADDICTS</span>
                <h2>BESTSELLERS</h2>
            </div>
            <div className="home__gallery">
                <div className="gallery-bestsellers">
                    <GallerySlider gallery={gallery} />
                </div>
            </div>
        </div>
    );
};

export default Home;

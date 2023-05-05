import AboutPageImg from "../assets/images/AboutPageImg.webp";
import "../styles/About.scss";

const About = () => {
    return (
        <div className="about-page">
            <div className="about-page__title title">
                <span>My</span>
                <h2>STORY</h2>
            </div>
            <div className="about-page__underlay">
                <div className="about-page__img-wrapper">
                    <div className="about-page__img-wrapper-two">
                        <img
                            src={AboutPageImg}
                            alt="about-us-img"
                            className="about-page__img"
                        />
                        <div className="about-page__text-wrapper">
                            <p>
                                Hey, no the lady in the image above is not me!
                                My name is Adam Belko and as a Front End
                                Developer I specialize in developing user
                                interfaces and experiences for websites and
                                applications. With a strong command of HTML,
                                CSS, and JavaScript, I possess the technical
                                skills necessary to create visually stunning and
                                user-friendly websites.
                            </p>
                            <p>
                                This online store is one of the projects that
                                showcases my skills and creativity as a frontend
                                developer. It is a perfect example of my ability
                                to create a website that is both visually
                                appealing and highly functional, with a focus on
                                providing a seamless user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

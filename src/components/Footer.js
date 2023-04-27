import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__column-wrapper">
                <div className="column">
                    <p>PAGE TURNERS</p>
                    <p></p>
                    <p>236 Oaks Avenue</p>
                    <p>Dee Why 2099</p>
                    <p>NSW, Australia</p>
                    <p>info@pageturners.com.au</p>
                </div>
                <div className="column links">
                    <span>Shop</span>
                    <p></p>
                    <p>FAQ</p>
                    <p>Shipping & Returns</p>
                    <p>Store Policy</p>
                    <p>Payment Methods</p>
                </div>
                <div className="column links">
                    <span>Socials</span>
                    <p></p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </div>
            </div>
            <div className="footer__author">
                Created by Adam Belko March 2023
                <a href="https://github.com/adambelko/shopping-cart">
                    GitHub Repo
                </a>
            </div>
        </footer>
    );
};

export default Footer;

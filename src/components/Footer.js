import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="column-wrapper">
                <div className="column">
                    <p>Book Addicts</p>
                    <p></p>
                    <p>115 Oaks Avenue</p>
                    <p>Dee Why 2099</p>
                    <p>NSW, Australia</p>
                    <p>info@bookaddicts.com</p>
                </div>
                <div className="column links">
                    <span>Shop</span>
                    <p></p>
                    <p>FAQ</p>
                    <p>Shipping & Returns</p>
                    <p>Store Policy</p>
                    <p>Payments Methods</p>
                </div>
                <div className="column links">
                    <p>Socials</p>
                    <p></p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </div>
            </div>
            <div className="author">
                Created by Adam Belko March 2023.
                <a href="https://github.com/adambelko/shopping-cart">
                    GitHub Repo
                </a>
            </div>
        </footer>
    );
};

export default Footer;

const Footer = () => {
    return (
        <div>
                <footer className="footer">
                    <div className="footer-content">
                        {/* About Section */}
                        <div className="footer-section about">
                            <h3>FILM PALAVER</h3>
                            <p>
                                Your ultimate movie hub for downloads, reviews, and recommendations.
                                Stay tuned for the latest updates and features!
                            </p>
                        </div>
                        </div>
                </footer>

                {/* Bottom Section */}
                <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} FILM PALAVER. All Rights Reserved.</p>
                </div>
        </div>
    );
};

export default Footer;
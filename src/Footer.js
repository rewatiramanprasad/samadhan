import React from 'react';
import './Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import HelpIcon from '@material-ui/icons/Help';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top--left">
                <h1 className="header__logo">sAmAdhAn</h1>
                    <p><LanguageIcon></LanguageIcon> &nbsp; India(International)/English</p>
                    <p><HelpIcon></HelpIcon> &nbsp; Help & Support</p>
                </div>
                <div className="footer__top--right">
                    <div className="footer__top--right-one">
                        <h4>Samadhan</h4>
                        <p>Categories</p>
                        <p>Electrician</p>
                        <p>Technician</p>
                        <p>Mechanics</p>
                        <p>Painter</p>
                        <p>Plumber</p>
                        <p>carpanter</p>
                        <p>Builder</p>
                        <p>Daily wages Worker</p>
                        
                    </div>
                    <div className="footer__top--right-two">
                        <h4>About</h4>
                        <p>About Us</p>
                        <p>How it Works</p>
                        <p>Security</p>
                        <p>Investor</p>
                        <p>Sitemap</p>
                        <p>News</p>

                    </div>
                    <div className="footer__top--right-three">
                        <h4>Terms</h4>
                        <p>Privacy Popcy</p>
                        <p>Terms and Conditions</p>
                        <p>Copyright Policy</p>
                        <p>Services</p>
                        

                    </div>
                    <div className="footer__top--right-four">
                        <h4>Apps</h4>
                        <img src="https://damassets.autodesk.net/content/dam/autodesk/www/products/autocad-mobile/fy18/general/appstore-google.png" alt="apple" />
                        <br />
                        <img src="https://damassets.autodesk.net/content/dam/autodesk/www/products/autocad-mobile/fy18/general/appstore-itunes.png" alt="apple" />
                        <p>
                            <FacebookIcon></FacebookIcon>
                            <TwitterIcon></TwitterIcon>
                            <YouTubeIcon></YouTubeIcon>
                            <InstagramIcon></InstagramIcon>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer__bottom">
                <h6>47,595,510 <br /> Registered Users</h6>
                <h6>18,611,020 <br /> Total provide solutions</h6>
                <p>
                    SAmAdhAn ® is a registered Trademark of bid approach based Technology limited (ACN 143 909 542) <br />
                Copyright © 2020 Samadhan Technology Pvt limited (ACN 143 909 542)
                </p>

            </div>

        </div>
    )
}

export default Footer

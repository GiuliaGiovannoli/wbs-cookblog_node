import React from "react";

import './comp-styles.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Footer() {
    
        return (
            <footer>
                <div id="social-buttons">
                        <YouTubeIcon/>
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <LinkedInIcon/>
                </div>
            </footer>
        );
}

import React from "react";

import './comp-styles.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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

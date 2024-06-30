import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer style={{margin: '0 0 0 40%', height: 'unset'}}>
            <p style={{color: 'grey'}}>Copyright © Nisha Kinha {currentYear}</p>
        </footer>
    )
}

export default Footer;
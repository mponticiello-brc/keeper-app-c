import React from 'react';

function Footer(){
    let today = new Date();
    let year = today.getFullYear();
    return <footer>Copyright © {year}</footer>
}

export default Footer
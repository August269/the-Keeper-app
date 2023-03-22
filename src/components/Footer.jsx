import React from "react";

function Footer() {
    const thisYear = new Date().getFullYear();
    return <footer className="footer">Copyright {thisYear}</footer>;
};

export default Footer;
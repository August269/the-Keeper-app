import React from "react";

function Header() {
    const thisYear = new Date().getFullYear();
    return <footer className="footer">Copyright {thisYear}</footer>;
};

export default Header;
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h2>Manav</h2>
            <p className="footer-description">
              Your one-stop destination for amazing dishes and more!
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-info">
              <p className="location">Vasundhara Gzb</p>
              <p className="hours">Open: 05:00 PM - 12:00 AM</p>
            </div>
            <div className="footer-info">
              <p>Developed By MANAVTYAGI</p>
              <p>All Rights Reserved By MaanuTyagi.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

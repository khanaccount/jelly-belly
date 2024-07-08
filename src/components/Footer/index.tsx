import React from "react";
import s from "./index.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerContent}>
          <div className={s.contactInfo}>
            <h2>Contact Us</h2>
            <p>Email: info@beansinfo.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Bean Street, Bean City, BC 12345</p>
          </div>
          <div className={s.socialMedia}>
            <h2>Follow Us</h2>
            <a href="https://www.facebook.com" target="_blank">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </div>
        </div>
        <div className={s.copyright}>
          <p>&copy; 2024 Beans Info. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

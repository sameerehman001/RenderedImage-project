import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import MuiDrawer from "../drawer/MuiDrawer";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleDrawerButtonClick = () => {
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.NavbarContainer} ${
        isScrolled ? styles.fixedNav : ""
      }`}
    >
      <div className={styles.NavBarWrap}>
        <div className={styles.leftSideWrap}>
          <Link
            to="/"
            className={location.pathname === "/" ? styles.activeLink : ""}
          >
            Home
          </Link>
          <Link
            to="/our-projects"
            className={
              location.pathname === "/our-projects" ? styles.activeLink : ""
            }
          >
            Our Projects
          </Link>
          {/* <Link
            to="/case-study"
            className={
              location.pathname === "/case-study" ? styles.activeLink : ""
            }
          >
            Case Studies
          </Link>
          <Link
            to="/virtual-reality"
            className={
              location.pathname === "/virtual-reality" ? styles.activeLink : ""
            }
          >
            Virtual Reality
          </Link> */}
          <Link
            to="/gallery"
            className={
              location.pathname === "/gallery" ? styles.activeLink : ""
            }
          >
            Gallery
          </Link>
          <Link
            to="/aboutUS"
            className={
              location.pathname === "/aboutUS" ? styles.activeLink : ""
            }
          >
            About
          </Link>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? styles.activeLink : ""
            }
          >
            Contact
          </Link>
        </div>
        <div
          className={styles.hanburgerCOntainer}
          onClick={handleDrawerButtonClick}
        >
          <IoMenu />
        </div>
        <MuiDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        <div className={styles.rightsideWrap}>
          <TiSocialFacebook />
          <IoLogoInstagram />
          <TiSocialFacebook />
          <IoLogoInstagram />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

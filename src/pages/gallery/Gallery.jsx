import React from "react";
import styles from "./Gallery.module.css";
import Navbar from "../../components/navbar/Navbar";

const Gallery = () => {
  return (
    <div className={styles.wrapContainer}>
      <Navbar />
      Gallery Section
    </div>
  );
};

export default Gallery;

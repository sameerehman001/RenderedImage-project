import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import styled from "styled-components";
import BlackButton from "../../components/buttons/BlackButton";
import Navbar from "../../components/navbar/Navbar";
import { Typography } from "@mui/material";
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from "react-icons/fa";

import image1 from "../../assets/images/3P.jpg";
import image2 from "../../assets/images/C1PS.jpg";
import image3 from "../../assets/images/Interior.png";
import image4 from "../../assets/images/Livingp.png";
import image5 from "../../assets/images/112.jpg";
import image6 from "../../assets/images/Render 1 (1).png";
import image7 from "../../assets/images/Render 2.png";
import image8 from "../../assets/images/Render 3.png";
import image9 from "../../assets/images/Render 4.png";
import image10 from "../../assets/images/sample 1.png";
import image11 from "../../assets/images/Mini kitchen 2.png";
import image12 from "../../assets/images/sample 2.png";
import image13 from "../../assets/images/Render 9PP.png";
import image14 from "../../assets/images/Sample 6.png";
import image15 from "../../assets/images/Sample 8.png";
import image16 from "../../assets/images/sample 4.png";
import image17 from "../../assets/images/Kitchen Render.jpeg";
import image18 from "../../assets/images/Render 111.png";
import image19 from "../../assets/images/Sample 3.jpg";
import image20 from "../../assets/images/2P.jpg";
import image21 from "../../assets/images/Sample 8.png";
import image22 from "../../assets/images/Sample 51.jpg";
import image23 from "../../assets/images/Sample render.jpg";
import image24 from "../../assets/images/Snow_render1.jpeg";
import image25 from "../../assets/images/Render 9PP.png";
import image26 from "../../assets/images/sample 4.png";
import image27 from "../../assets/images/Render 6.png";
import image28 from "../../assets/images/Sample 8.png";
import image29 from "../../assets/images/Render 9PP.png";
import image30 from "../../assets/images/sample 4.png";
import image31 from "../../assets/images/Render 6.png";
import image32 from "../../assets/images/Sample 8.png";
import zIndex from "@mui/material/styles/zIndex";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
];

const Image = styled.img`
  display: block;
  width: 100% !important;
  height: 100% !important;
  position: relative;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.2) !important;
  }
`;

const Main = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.1;
      const fadeEnd = windowHeight * 0.5;
      const opacity =
        1 -
        Math.min(
          Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0),
          1
        );
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
  };

  const closeFullscreen = () => {
    setCurrentImageIndex(null);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.textnBtnWrap} style={{ opacity: scrollOpacity }}>
        <div className={styles.textSectionWrap}>
          <div className={styles.textContainer}>
            <Typography variant="p" className={styles.textStyling}>
              we create digital environments for your projects
            </Typography>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <BlackButton />
        </div>
      </div>

      <div className={styles.gallerySection}>
        <div className={styles.firstRow}>
          {images.slice(0, 4).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 1}`}
                onClick={() => openFullscreen(index)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className={styles.secondRow}>
          {images.slice(4, 8).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 5}`}
                onClick={() => openFullscreen(index + 4)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className={styles.thirdRow}>
          {images.slice(8, 12).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 9}`}
                onClick={() => openFullscreen(index + 8)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className={styles.forthRow}>
          {images.slice(12, 16).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 13}`}
                onClick={() => openFullscreen(index + 12)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className={styles.fifthRow}>
          {images.slice(16, 20).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 17}`}
                onClick={() => openFullscreen(index + 16)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className={styles.sixthRow}>
          {images.slice(20, 24).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 21}`}
                onClick={() => openFullscreen(index + 20)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className={styles.seventhRow}>
          {images.slice(24, 28).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 25}`}
                onClick={() => openFullscreen(index + 24)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className={styles.eightthRow}>
          {images.slice(28, 30).map((image, index) => (
            <div className={styles.imageDiv}>
              <Image
                key={index}
                src={image}
                alt={`image${index + 29}`}
                onClick={() => openFullscreen(index + 28)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {currentImageIndex !== null && (
        <div className={styles.fullscreenOverlay}>
          <img
            src={images[currentImageIndex]}
            alt={`Fullscreen ${currentImageIndex + 1}`}
            className={styles.fullscreenImage}
          />
          <button className={styles.closeButton} onClick={closeFullscreen}>
            <FaTimesCircle />
          </button>
          <button className={styles.prevButton} onClick={goToPrevImage}>
            <FaChevronLeft />
          </button>
          <button className={styles.nextButton} onClick={goToNextImage}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;

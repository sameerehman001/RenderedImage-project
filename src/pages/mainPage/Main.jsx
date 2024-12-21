import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import styled from "styled-components";
import BlackButton from "../../components/buttons/BlackButton";
import Navbar from "../../components/navbar/Navbar";
import { Typography } from "@mui/material";
import { FaChevronLeft, FaChevronRight, FaTimesCircle } from "react-icons/fa";
import LazyImage from "../../components/lazyImages/LazyImages";
import imagesArray from "./imagesArray";

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
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
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
          {imagesArray.slice(0, 4).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 1}`}
                onClick={() => openFullscreen(index)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 1}`}
                onClick={() => openFullscreen(index)}
              />
            </div>
          ))}
        </div>
        <div className={styles.secondRow}>
          {imagesArray.slice(4, 8).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 5}`}
                onClick={() => openFullscreen(index + 4)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 5}`}
                onClick={() => openFullscreen(index + 4)}
              />
            </div>
          ))}
        </div>
        <div className={styles.thirdRow}>
          {imagesArray.slice(8, 12).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 9}`}
                onClick={() => openFullscreen(index + 8)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 9}`}
                onClick={() => openFullscreen(index + 8)}
              />
            </div>
          ))}
        </div>
        <div className={styles.forthRow}>
          {imagesArray.slice(12, 16).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 13}`}
                onClick={() => openFullscreen(index + 12)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 13}`}
                onClick={() => openFullscreen(index + 12)}
              />
            </div>
          ))}
        </div>
        <div className={styles.fifthRow}>
          {imagesArray.slice(16, 20).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 17}`}
                onClick={() => openFullscreen(index + 16)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 17}`}
                onClick={() => openFullscreen(index + 16)}
              />
            </div>
          ))}
        </div>
        <div className={styles.sixthRow}>
          {imagesArray.slice(20, 24).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 21}`}
                onClick={() => openFullscreen(index + 20)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 21}`}
                onClick={() => openFullscreen(index + 20)}
              />
            </div>
          ))}
        </div>
        <div className={styles.seventhRow}>
          {imagesArray.slice(24, 28).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 25}`}
                onClick={() => openFullscreen(index + 24)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 25}`}
                onClick={() => openFullscreen(index + 24)}
              />
            </div>
          ))}
        </div>
        <div className={styles.eightthRow}>
          {imagesArray.slice(28, 30).map((image, index) => (
            <div className={styles.imageDiv}>
              {/* <Image
                key={index}
                src={image}
                alt={`image${index + 29}`}
                onClick={() => openFullscreen(index + 28)}
                loading="lazy"
              /> */}
              <LazyImage
                src={image}
                alt={`image${index + 29}`}
                onClick={() => openFullscreen(index + 28)}
              />
            </div>
          ))}
        </div>
      </div>

      {currentImageIndex !== null && (
        <div className={styles.fullscreenOverlay}>
          <img
            src={imagesArray[currentImageIndex]}
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

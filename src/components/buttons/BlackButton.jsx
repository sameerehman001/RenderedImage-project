import React from "react";
import styles from "./blackButton.module.css";

const BlackButton = () => {
  const onClickButton = () => {
    window.open("https://www.instagram.com/royali_designs/", "_blank");
  };
  return (
    <div className={styles.BlackButton} onClick={onClickButton}>
      <h4>WATCH OUR REELS</h4>
    </div>
  );
};

export default BlackButton;

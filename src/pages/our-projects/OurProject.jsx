import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./ourProject.module.css";
import { Box, Typography } from "@mui/material";
import image1 from "../../assets/images/ourProject/1.jpg";
import image2 from "../../assets/images/ourProject/2.jpg";
import image3 from "../../assets/images/ourProject/3.jpg";
import image4 from "../../assets/images/ourProject/4.jpg";

const OurProject = () => {
  return (
    <div className={styles.fullPageWrap}>
      <Navbar />
      <Box className={styles.largeImage}>
        {/* <Box className={styles.allTextContainer}> */}
        <Box className={styles.LargeImageTextWrap}>
          <Box className={styles.LargeTextContainer}>
            <Typography variant="p" className={styles.mainText}>
              we create digital enviroments for your projects
            </Typography>
            <Typography variant="p" className={styles.middletext}>
              W-Name
            </Typography>
          </Box>
          <Box className={styles.reelButtonWrap}>
            <Box className={styles.reelButtonText}>Watch our Reels</Box>
          </Box>
        </Box>
        {/* </Box> */}
      </Box>
      {/* first row start */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box className={styles.firstRowWrap}>
          <Box className={styles.firstLeft}>
            <img src={image1} alt="image1" className={styles.firstImage} />
          </Box>
          <Box className={styles.firstRight}>
            <Box className={styles.RightTextWrap}>
              <Typography variant="p" className={styles.rightTitleText}>
                In furniture design
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Palissade
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Gandia Blasko
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={styles.firstRowWrap}>
          <Box className={styles.firstRight}>
            <Box className={styles.RightTextWrap}>
              <Typography variant="p" className={styles.rightTitleText}>
                In furniture design
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Palissade
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Gandia Blasko
              </Typography>
            </Box>
          </Box>
          <Box className={styles.firstLeft}>
            <img src={image2} alt="image1" className={styles.firstImage} />
          </Box>
        </Box>

        <Box className={styles.firstRowWrap}>
          <Box className={styles.firstLeft}>
            <img src={image3} alt="image1" className={styles.firstImage} />
          </Box>
          <Box className={styles.firstRight}>
            <Box className={styles.RightTextWrap}>
              <Typography variant="p" className={styles.rightTitleText}>
                In furniture design
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Palissade
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Gandia Blasko
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={styles.firstRowWrap}>
          <Box className={styles.firstRight}>
            <Box className={styles.RightTextWrap}>
              <Typography variant="p" className={styles.rightTitleText}>
                In furniture design
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Palissade
              </Typography>
              <Typography variant="p" className={styles.rightSmallText}>
                Gandia Blasko
              </Typography>
            </Box>
          </Box>
          <Box className={styles.firstLeft}>
            <img src={image4} alt="image1" className={styles.firstImage} />
          </Box>
        </Box>
      </Box>
      <Box className={styles.footerWrap}>
        <Box>
          <Typography variant="p" className={styles.footerText}>
            Powered by Adobe Portfolio
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default OurProject;

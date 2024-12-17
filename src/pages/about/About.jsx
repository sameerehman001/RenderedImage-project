import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./About.module.css";
import { Box, Typography } from "@mui/material";
import AgentCarousel from "../../components/carousel/TeamCarousel";

const About = () => {
  return (
    <div className={styles.outerContainer}>
      <Navbar />
      <Box className={styles.contentWrap}>
        <Box className={styles.uperTextContainer}>
          <p className={styles.upperText}>
            GRAU creates visuals for architects, artists and agencies, based in
            Berlin and Athens.
          </p>{" "}
          <p className={styles.lowerText}>
            We love creating visuals for unique projects and clients.
          </p>
        </Box>
      </Box>
      <Box className={styles.ourTeaWrap}>
        <Box className={styles.ourTeamText}>
          <Typography variant="h4" className={styles.ourTeamTextStyling}>
            Our Team
          </Typography>
        </Box>
        <AgentCarousel />
      </Box>
    </div>
  );
};

export default About;

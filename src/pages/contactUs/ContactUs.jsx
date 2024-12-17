import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Contact.module.css";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const ContactUs = () => {
  return (
    <Box className={styles.wrapContainer}>
      <Navbar />
      <Box className={styles.textContainer}>
        <p className={styles.websiteName}>WebSiteName</p>
        <p>info@gmail.com</p>
        <Divider sx={{ borderBottom: "1px solid black" }} />
        <Typography variant="subtitle1">Name</Typography>
        <Typography>Address</Typography>
        <Typography>City, Country</Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;

import React from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./muiDrawer.module.css";
import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme();

const menuItems = [
  {
    menuName: "Home",
    path: "/",
  },
  {
    menuName: "Our Projects",
    path: "/our-projects",
  },
  {
    menuName: "Gallery",
    path: "/gallery",
  },
  // {
  //   menuName: "Case Studies",
  //   path: "/case-study",
  // },
  // {
  //   menuName: "Virtual Reality",
  //   path: "/virtual-reality",
  // },
  {
    menuName: "About",
    path: "/aboutUS",
  },
  {
    menuName: "Contact",
    path: "/contact",
  },
];

const MuiDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    onClose();
    setTimeout(() => {
      navigate(path);
    }, 1000);
  };

  return (
    <div>
      <Drawer
        open={open}
        onClose={onClose}
        classes={{ paper: styles.customPaper }}
      >
        <Box role="presentation">
          <Box className={styles.drawerHeading}>
            <Typography variant="h5" sx={{ padding: "30px 0" }}>
              Website Name
            </Typography>

            <Box className={styles.menuItemsContainer}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  style={{ textDecoration: "none" }}
                  // to={item.path}
                  onClick={() => handleNavigation(item.path)}
                >
                  <Typography variant="body1" className={styles.Menutext}>
                    {item.menuName}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
          <ThemeProvider theme={theme}></ThemeProvider>
        </Box>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;

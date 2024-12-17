import React from "react";
import styles from "./Carousel.module.css";
import { Box, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from "@mui/material/styles";

import imag1 from "../../assets/images/Team/1.png";
import imag2 from "../../assets/images/Team/1.png";
import imag3 from "../../assets/images/Team/2.png";
import imag4 from "../../assets/images/Team/3.png";
import imag5 from "../../assets/images/Team/4.png";
import imag6 from "../../assets/images/Team/5.png";

const TeamCarousel = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isCarouselScreen = useMediaQuery("(max-width:600px)");

  const handleGetStartedBtn = () => {
    // const expertPhoneNo = "+923328550015";
    // window.location.href = `https://web.whatsapp.com/send?phone=${expertPhoneNo}`;
  };
  return (
    <div>
      {isCarouselScreen ? (
        <Carousel
          showArrows={true}
          showStatus={false}
          swipeable={false}
          showIndicators={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClickHandler}
                style={{
                  position: "absolute",
                  top: "30%",
                  zIndex: 2,
                  display: "block",
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                  left: 0,
                }}
              >
                <path
                  d="M12 0.5C18.6167 0.5 24 5.88331 24 12.5C24 19.1167 18.6167 24.5 12 24.5C5.38331 24.5 0 19.1167 0 12.5C0 5.88331 5.38331 0.5 12 0.5ZM12 23C17.7898 23 22.5 18.2898 22.5 12.5C22.5 6.71019 17.7898 2 12 2C6.21019 2 1.5 6.71019 1.5 12.5C1.5 18.2898 6.21019 23 12 23ZM6.96975 11.9698C6.67669 12.2628 6.67669 12.7374 6.96975 13.0303L10.7197 16.7803C10.8662 16.9267 11.0582 17 11.25 17C11.4418 17 11.6338 16.9267 11.7803 16.7803C12.0733 16.4872 12.0733 16.0126 11.7803 15.7197L9.3105 13.25H16.5C16.9142 13.25 17.25 12.9146 17.25 12.5C17.25 12.0854 16.9142 11.75 16.5 11.75H9.3105L11.7803 9.28025C12.0733 8.98719 12.0733 8.51262 11.7803 8.21975C11.4872 7.92688 11.0126 7.92669 10.7197 8.21975L6.96975 11.9698Z"
                  fill="#1077B5"
                />
              </svg>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClickHandler}
                style={{
                  position: "absolute",
                  top: "30%",
                  zIndex: 2,
                  display: "block",
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                  right: 0,
                }}
              >
                <path
                  d="M12 0.5C5.38331 0.5 0 5.88331 0 12.5C0 19.1167 5.38331 24.5 12 24.5C18.6167 24.5 24 19.1167 24 12.5C24 5.88331 18.6167 0.5 12 0.5ZM12 23C6.21019 23 1.5 18.2898 1.5 12.5C1.5 6.71019 6.21019 2 12 2C17.7898 2 22.5 6.71019 22.5 12.5C22.5 18.2898 17.7898 23 12 23ZM17.0303 11.9698C17.3233 12.2628 17.3233 12.7374 17.0303 13.0303L13.2803 16.7803C13.1338 16.9267 12.9418 17 12.75 17C12.5582 17 12.3662 16.9267 12.2197 16.7803C11.9267 16.4872 11.9267 16.0126 12.2197 15.7197L14.6895 13.25H7.5C7.08581 13.25 6.75 12.9146 6.75 12.5C6.75 12.0854 7.08581 11.75 7.5 11.75H14.6895L12.2197 9.28025C11.9267 8.98719 11.9267 8.51262 12.2197 8.21975C12.5128 7.92688 12.9874 7.92669 13.2803 8.21975L17.0303 11.9698Z"
                  fill="#1077B5"
                />
              </svg>
            )
          }
          className={styles.carouselMain}
        >
          <Box className={styles.carousel}>
            <Box className={styles.ContactUsimgBox}>
              <img
                src={imag1}
                alt={"zainali"}
                className={styles.ContactProfileImgStyling}
              />
            </Box>
            {/* <img src={zainali} alt={"zainali"} /> */}
            <p className={styles.carouselHeadeing}>Clara Rossi</p>
            <p className={styles.carouselSubHeading}>Real Estate Agent</p>
            <button
              type="submit"
              className={`${styles.signupBtn}`}
              onClick={handleGetStartedBtn}
            >
              Talk to me
            </button>
          </Box>
          <Box className={styles.carousel}>
            {/* <img src={aizal} alt={"zainali"} /> */}
            <Box className={styles.ContactUsimgBox}>
              <img
                src={imag2}
                alt={"zainali"}
                className={styles.ContactProfileImgStyling}
              />
            </Box>
            <p className={styles.carouselHeadeing}>Emma Müller</p>
            <p className={styles.carouselSubHeading}>Property Manager</p>
            <button
              type="submit"
              className={`${styles.signupBtn}`}
              onClick={handleGetStartedBtn}
            >
              Talk to me
            </button>
          </Box>
          <Box className={styles.carousel}>
            {/* <img src={nida} alt={"zainali"} /> */}
            <Box className={styles.ContactUsimgBox}>
              <img
                src={imag3}
                alt={"zainali"}
                className={styles.ContactProfileImgStyling}
              />
            </Box>
            <p className={styles.carouselHeadeing}>Hans Fischer</p>
            <p className={styles.carouselSubHeading}>Senior Agent</p>
            <button
              type="submit"
              className={`${styles.signupBtn}`}
              onClick={handleGetStartedBtn}
            >
              Talk to me
            </button>
          </Box>
        </Carousel>
      ) : (
        <Carousel
          showArrows={true}
          showStatus={false}
          swipeable={false}
          showIndicators={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <svg
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClickHandler}
                style={{
                  position: "absolute",
                  top: "50%",
                  zIndex: 2,
                  display: "block",
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                  left: 0,
                }}
              >
                <path
                  d="M28 0.00195312C43.4389 0.00195312 56 12.563 56 28.002C56 43.4409 43.4389 56.002 28 56.002C12.5611 56.002 0 43.4409 0 28.002C0 12.563 12.5611 0.00195312 28 0.00195312ZM28 52.502C41.5096 52.502 52.5 41.5115 52.5 28.002C52.5 14.4924 41.5096 3.50195 28 3.50195C14.4904 3.50195 3.5 14.4924 3.5 28.002C3.5 41.5115 14.4904 52.502 28 52.502ZM16.2627 26.7647C15.5789 27.4485 15.5789 28.5558 16.2627 29.2392L25.0127 37.9892C25.3544 38.3309 25.8024 38.502 26.25 38.502C26.6976 38.502 27.1456 38.3309 27.4873 37.9892C28.1711 37.3054 28.1711 36.1981 27.4873 35.5147L21.7245 29.752H38.5C39.4664 29.752 40.25 28.9693 40.25 28.002C40.25 27.0346 39.4664 26.252 38.5 26.252H21.7245L27.4873 20.4892C28.1711 19.8054 28.1711 18.6981 27.4873 18.0147C26.8034 17.3313 25.6961 17.3309 25.0127 18.0147L16.2627 26.7647Z"
                  fill="#1077B5"
                />
              </svg>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <svg
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClickHandler}
                style={{
                  position: "absolute",
                  top: "50%",
                  zIndex: 2,
                  display: "block",
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                  right: 0,
                }}
              >
                <path
                  d="M28 0.00195312C12.5611 0.00195312 0 12.563 0 28.002C0 43.4409 12.5611 56.002 28 56.002C43.4389 56.002 56 43.4409 56 28.002C56 12.563 43.4389 0.00195312 28 0.00195312ZM28 52.502C14.4904 52.502 3.5 41.5115 3.5 28.002C3.5 14.4924 14.4904 3.50195 28 3.50195C41.5096 3.50195 52.5 14.4924 52.5 28.002C52.5 41.5115 41.5096 52.502 28 52.502ZM39.7373 26.7647C40.4211 27.4485 40.4211 28.5558 39.7373 29.2392L30.9873 37.9892C30.6456 38.3309 30.1976 38.502 29.75 38.502C29.3024 38.502 28.8544 38.3309 28.5127 37.9892C27.8289 37.3054 27.8289 36.1981 28.5127 35.5147L34.2755 29.752H17.5C16.5336 29.752 15.75 28.9693 15.75 28.002C15.75 27.0346 16.5336 26.252 17.5 26.252H34.2755L28.5127 20.4892C27.8289 19.8054 27.8289 18.6981 28.5127 18.0147C29.1966 17.3313 30.3039 17.3309 30.9873 18.0147L39.7373 26.7647Z"
                  fill="#1077B5"
                />
              </svg>
            )
          }
          className={styles.carouselMain}
        >
          <Box className={styles.carouselUnderMain}>
            <Box className={styles.carousel}>
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag4}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              {/* <img src={zainali} alt={"zainali"} /> */}
              <p className={styles.carouselHeadeing}>Clara Rossi</p>
              <p className={styles.carouselSubHeading}>Real Estate Agent</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
            <Box className={styles.carousel}>
              {/* <img src={aizal} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag5}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Emma Müller</p>
              <p className={styles.carouselSubHeading}>Property Manager</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
            <Box className={styles.carousel}>
              {/* <img src={nida} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag6}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Hans Fischer</p>
              <p className={styles.carouselSubHeading}>Senior Agent</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
          </Box>
          <Box className={styles.carouselUnderMain}>
            <Box className={styles.carousel}>
              {/* <img src={zainali} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag1}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Laila Haddad</p>
              <p className={styles.carouselSubHeading}>Real Estate Agent</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
            <Box className={styles.carousel}>
              {/* <img src={aizal} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag2}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Olivia Novak</p>
              <p className={styles.carouselSubHeading}>Property Manager</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
            <Box className={styles.carousel}>
              {/* <img src={nida} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag3}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Omar Rashid</p>
              <p className={styles.carouselSubHeading}>Senior Agent</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
          </Box>
          <Box className={styles.carouselUnderMain}>
            <Box className={styles.carousel}>
              {/* <img src={zainali} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag4}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Sabrina Al-Farsi</p>
              <p className={styles.carouselSubHeading}>Real Estate Agent</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
            <Box className={styles.carousel}>
              {/* <img src={aizal} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag5}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Victor Larsen</p>
              <p className={styles.carouselSubHeading}>Property Manager</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
            <Box className={styles.carousel}>
              {/* <img src={nida} alt={"zainali"} /> */}
              <Box className={styles.ContactUsimgBox}>
                <img
                  src={imag6}
                  alt={"zainali"}
                  className={styles.ContactProfileImgStyling}
                />
              </Box>
              <p className={styles.carouselHeadeing}>Youssef Abadi</p>
              <p className={styles.carouselSubHeading}>Senior Agent</p>
              <button
                type="submit"
                className={`${styles.signupBtn}`}
                onClick={handleGetStartedBtn}
              >
                Talk to me
              </button>
            </Box>
          </Box>
        </Carousel>
      )}
    </div>
  );
};

export default TeamCarousel;

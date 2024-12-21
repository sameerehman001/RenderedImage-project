import React, { useState } from "react";

const LazyImage = ({ src, alt, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden", // Ensures the scaling doesn't overflow the container
        width: "100%",
        height: "100%",
      }}
    >
      {/* Image with hover and transition effects */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onClick={onClick}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease, transform 0.3s ease", // Transition for smooth scaling
        }}
        className="lazy-image"
      />

      {/* Hover Effect */}
      <style>
        {`
          .lazy-image:hover {
            transform: scale(1.2); /* Scale on hover */
          }
        `}
      </style>
    </div>
  );
};

export default LazyImage;

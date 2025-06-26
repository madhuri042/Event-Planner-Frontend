import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#1f3a93", // navy blue
        color: "white",
        textAlign: "center",
        padding: "15px",
        marginTop: "auto",
      }}
    >
      &copy; {new Date().getFullYear()} EventPlanner. All rights reserved.
    </footer>
  );
};

export default Footer;

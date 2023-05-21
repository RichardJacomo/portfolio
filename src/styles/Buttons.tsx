import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";
import { keyframes } from "@stitches/react";

const glowing = keyframes({
  "0%": { backgroundPosition: "0 0" },
  "50%": { backgroundPosition: "400% 0" },
  "100%": { backgroundPosition: "0 0" },
});

export const ButtonNeon = styled("button", {
  width: "220px",
  height: "50px",
  outline: "none",
  color: "$brand1",
  background: "$brand1",
  cursor: "pointer",
  position: "relative",
  zIndex: "0",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid $brand1",

  "&::before": {
    content: '""',
    background:
      "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
    position: "absolute",
    top: "-2px",
    left: "-2px",
    backgroundSize: "400%",
    zIndex: "-1",
    filter: "blur(5px)",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: `${glowing} 20s linear infinite`,
    opacity: "0",
    transition: "opacity .3s ease-in-out",
    borderRadius: "10px",
  },
  "&:active": {
    color: "#000",
  },
  "&:active::after": {
    background: "transparent",
  },
  "&:hover:before": {
    opacity: "1",
  },
  "&:after": {
    zIndex: "-1",
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#111",
    left: "0",
    top: "0",
    borderRadius: "10px",
  },
});


export const Button = styled("button", {

  height: "3rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey1",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  whiteSpace: "nowrap",

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
        fontWeight: "500",
        "&:hover": {
          color: "$brand2",
        },
      },
      primary: {
        background: "$brand1",
        borderColor: "$brand1",
        color: "$whiteFixed",
        zIndex: "99999",
        "&:hover": {
          backgroundColor: "$brand2",
          borderColor: "$brand2",
        },

        "@mobile": {
          height: "2.5rem",
          minHeight: "2.5rem",
          borderRadius: "0.5rem",
        },
      },
      outline: {
        borderColor: "$grey4",
        color: "$grey4",
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: "$grey4",
          color: "$grey1",
        },
      },
      toggleTheme: {
        height: "2.2rem",
        minWidth: "3rem",
        maxWidth: "3rem",
        padding: "",
        borderRadius: "2rem",
        borderColor: "$grey4",
        color: "$grey4",
        backgroundColor: "transparent",
        position: "relative",

        "&::before": {
          content: "",
          width: "1.5rem",
          height: "1.5rem",
          backgroundColor: "$grey4",
          position: "absolute",
          borderRadius: "50%",
          left: "0.25rem",
        },
        "&::after": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          content: "🌙",     
          height: "100%",
          width: "100%",
          backgroundColor: "",
          right: "0.25rem",
          position: "absolute",
          borderRadius: "50%",
        },
        
        "@mobile": {
          position: "absolute",
          right: "5rem",
          top: "0.375rem",
        },
      },

      icon: {
        borderColor: "$grey1",
        backgroundColor: "$grey1",
        paddingInline: "1rem",
        "& svg": {
          fill: "$grey2",
        },
        "&:hover": {
          backgroundColor: "$grey1",
        },
      },
      circle: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        minWidth: "2.75rem",
        minHeight: "2.75rem",
        ["& + a"]: {
          marginLeft: "$2",
        },
        ["&.instagram"]: {
          backgroundColor: "$socialInstagram",
          borderColor: "$socialInstagram",
          color: "$whiteFixed",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$socialInstagram",
            color: "$socialInstagram",
          },
        },
        ["&.facebook"]: {
          backgroundColor: "$socialFacebook",
          borderColor: "$socialFacebook",
          color: "$whiteFixed",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$socialFacebook",
            color: "$socialFacebook",
          },
        },
        ["&.linkedin"]: {
          backgroundColor: "$socialLinkedin",
          borderColor: "$socialLinkedin",
          color: "$whiteFixed",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$socialLinkedin",
            color: "$socialLinkedin",
          },
        },
        "&:hover": {
          backgroundColor: "$grey5",
        },
        "@mobile": {
          width: "5rem",
          height: "2.7rem",
          minWidth: "5rem",
          minHeight: "2.7rem",
          borderRadius: "0.5rem",
        },
      },

      darkMode: {
        height: "2.2rem",
        minWidth: "3rem",
        maxWidth: "3rem",
        padding: "",
        borderRadius: "2rem",
        borderColor: "$grey4",
        color: "$grey4",
        backgroundColor: "transparent",
        position: "relative",
        "&::before": {
          content: "",
          width: "1.5rem",
          height: "1.5rem",
          backgroundColor: "$grey4",
          position: "absolute",
          right: "0.25rem",
          borderRadius: "50%",
        },
        "&::after": {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
  
          content: "☀️",
          height: "100%",
          width: "100%",
          backgroundColor: "",
          left: "0.25rem",
          position: "absolute",
          borderRadius: "50%",
        },
        "@mobile": {
          position: "absolute",
          right: "5rem",
          top: "0.375rem",
        },
      },
    },
    ...colors,
  },
});

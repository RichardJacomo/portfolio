import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import { keyframes } from "@stitches/react";
import { BlackWhiteContext } from "@/contexts/BlackWhiteProvider.";
import { useContext } from "react";

const glowing = keyframes({
  "0%": { backgroundPosition: "0 0" },
  "50%": { backgroundPosition: "400% 0" },
  "100%": { backgroundPosition: "0 0" },
});

export const HeaderWhite = styled("header", {
  backgroundColor: "$grey1",
  padding: "12rem 0 8rem 0",
  borderBottom: "2px solid $grey5",
  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    padding: "9rem 0 6rem 0",
    backgroundImage: `none`,
  },
  "@mobileLittle": {
    padding: "9rem 0 0 0",
  },
});

export const Header = styled("header", {
    width: "100vw",
    padding: "12rem 0 11rem 0",
    color: "$brand1",
    background: "$brand1",
    position: "relative",
    zIndex: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    border: "5px solid $grey1",

  "&::before": {
    content: '""',
    background:
    "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
    position: "absolute",
    backgroundSize: "400%",
    zIndex: "-1",
    filter: "blur(5px)",
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
    animation: `${glowing} 20s linear infinite`,
    opacity: "0",
    transition: "opacity .3s ease-in-out",
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
  },
  "@tablet": {
    backgroundPosition: "right -10% center",
    width: "100%",
    overflow: "hidden",
  },
  "@mobile": {
    padding: "9rem 0 6rem 0",
    width: "100vw",
  },
  "@mobileLittle": {
    padding: "9rem 0 0 0",
    width: "100vw",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  
  [`& ${Button}`]: {
    marginRight: "$2",
    overflow: "hidden",
  },

  "@mobile": {
    [`& ${Button}`]: {
      marginRight: "$2",
      overflow: "hidden",
      width: "100%",
    },

    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gridGap: "$2",
    marginBottom: "$2",
  },
});

export const UserImage = styled("img", {
  borderRadius: "50%",
  width: "10rem",
  height: "10rem",
});

export const StackSection = styled("div", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const Techs = styled("h1",{
  marginTop: "$5",
  color: "$grey5",
  textAlign: "flex-start",
  fontSize: "$title1",
  "@mobile": {
    fontSize: "$title2",
  }
})

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "6rem",

  "@tablet": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  "@mobile": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@mobileLittle": {
    display: "flex",
    overflow: "auto",
    margin: "0 -1rem",
    paddingInline: "1rem",
  },
});

export const ProjectsArea = styled("section", {
  padding: "$section 0",
  backgroundColor: "$grey0",
  "@tablet": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
  },
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "4rem",
  "@mobile": {
    gridTemplateColumns: "1fr",
    overflow: "hidden",
  },
});

export const ProjectAreaWrapperColumns = styled("div", {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});

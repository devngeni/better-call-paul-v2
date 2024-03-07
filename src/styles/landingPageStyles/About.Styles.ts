import styled from "styled-components";

export const AboutContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
  height: "auto",
  minHeight: "810px",
  width: "100vw",
  background: "#1A3F34",
  padding: "5% 0",
  "@media (max-width: 800px)": {
    display: "none",
  },
}));

export const TextContainer = styled("div")((props: any) => ({
  display: "flex",
  flexDirection: "column",
  width: "683px",
  alignItems: "flex-start",
  justifyContent: "start",
  h1: {
    color: "#BC9364",
    fontSize: "3.75",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
  p: {
    color: "#BC9364",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    marginTop: "24px",
  },
  "@media (max-width: 1366px)": {
    marginTop: "20px",
  },

  "@media (max-width: 899px)": {
    padding: "auto",
    h1: {
      marginTop: "20px",
      fontSize: "2.5rem",
    },
    p: {
      marginTop: "10px",
      fontSize: "1.25rem",
    },
  },

  "@media (max-width: 800px)": {
    width: "100%",
    padding: "20px 5%",
  },
  "@media (max-width: 599px)": {
    padding: "10px 3%",
    h1: {
      fontSize: "1.25rem",
      textAlign: "center",
    },
    p: {
      fontSize: "1rem",
      textAlign: "center",
    },
  },
}));

export const ExploreBtn = styled("button")((props: any) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 0",
  padding: "14px 16px 14px 16px",
  maxHeight: "48px",
  minWidth: "93px",
  borderRadius: "999px",
  background: "#BC9364",
  border: "none ",
  cursor: "pointer",
  color: "#FFF",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",

  "&:hover": {
    background: "rgba(188, 147, 100, 0.8)",
  },

  "@media (max-width: 599px)": {
    fontSize: "0.875rem",
    margin:"24px auto 0 auto",
    padding: "10px 16px 10px 16px",
  },
}));

export const ImagesContainer = styled("div")(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "600px",
  height: "800px",
  marginTop: "32px",
  "@media (max-width: 599px)": {
    height: "auto",
    gap: "10px",
    margin: "2%",
  },
}));

const ImageCardCommons = {
  "@media (max-width: 599px)": {
    top: "auto",
    left: "auto",
    width: "206px",
    height: "200px",
  },
  "@media (max-width: 440px)": {
    width: "46%",
    height: "200px",
  },
};
export const ImageCard = styled("div")((props: any) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "50px",
  color: "#FFF",
  fontStyle: "normal",
  lineHeight: "normal",
  fontWeight: "700",
  fontSize: "32px",
  "&.airBnb": {
    background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
    width: "341px",
    height: "420px",
    fontSize: "56px",
    top: "0",
    left: "0",
    paddingLeft: "56px",
    zIndex: "1",
    ...ImageCardCommons,
  },
  "&.luggageStorage": {
    width: "206px",
    height: "200px",
    top: "0",
    left: "393px",
    paddingLeft: "18.5px",
    zIndex: "1",
    ...ImageCardCommons,
  },
  "&.propertyMngt": {
    width: "243px",
    height: "261px",
    top: "227px",
    left: "356px",
    paddingLeft: "21px",
    zIndex: "1",
    ...ImageCardCommons,
  },
  "&.nannyService": {
    width: "245px",
    height: "302px",
    top: "456px",
    left: "81px",
    paddingLeft: "13px",
    zIndex: "1",
    ...ImageCardCommons,
  },
  "&.shoppingruns": {
    width: "192px",
    height: "200px",
    top: "533px",
    left: "375px",
    paddingLeft: "13px",
    zIndex: "1",
    ...ImageCardCommons,
  },

  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    borderRadius: "inherit",
    zIndex: "-1",
  },

  "@media (max-width: 599px)": {
    position: "relative",
    margin: "auto",
    borderRadius: "40px",

    "*": {
      fontSize: "1.125rem",
    },
  },
}));

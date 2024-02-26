import styled from "styled-components";

export const TasteOfKenyaAdWrapper = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "0 12%",
  marginTop: "40px",
  paddingBottom: "40px",

  ".title": {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#333",
    fontFamily: props.theme.fontFace.fonts.bcpFont,
    "@media (max-width: 768px)": {
      fontSize: "22px",
    },
  },
  ".description": {
    fontSize: "16px",
    fontFamily: props.theme.fontFace.fonts.bcpFont,
    color: "#666",
    fontWeight: "400",
    lineHeight: "1.5",
    lineSpacing: "1.5",
    marginTop: "20px",
    "@media (max-width: 768px)": {
      fontSize: "14px",
      marginTop: "15px",
    },
  },
  "@media (max-width: 1400px)": {
    padding: "0 5%",
  },
}));

export const PricelistContainer = styled("div")((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  border: "1px solid #000000",
  marginTop: "20px",
  fontFamily: props.theme.fontFace.fonts.bcpFont,

  ".title": {
    display: "flex",
    width: "100%",
    height: "40px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    background: "orange",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },

  ".wrapper": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTop: "1px solid #000000",

    "@media (max-width: 599px)": {
      flexDirection: "column",
    },
  },
  ".item-box": {
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #000000",
    width: "100%",
    height: "auto",
    padding: "2%",
    gap: "10px",
    "@media (max-width: 599px)": {
      alignItems: "center",
      borderRight: "none",
      borderBottom: "1px solid #000000",
      minHeight: "40px",
      flexDirection: "row",
      justifyContent: "space-around",
      gap: "0px",
    },
  },
  ".item-box.last-item": {
    borderBottom: "none",
    borderRight: "none",
  },

  ".itemTitle": {
    fontSize: "16px",
    fontWeight: "300",
    color: "#666",
  },
  ".itemPrice": {
    fontSize: "16px",
    fontWeight: "Bold",
    color: "#666",
  },
}));

export const TheDrinksWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "50px",

  ".gridItem": {
    width: "100%",
    height: "auto",
    flexWrap: "wrap",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  "@media (max-width: 899px)": {
    flexDirection: "column",
  },
}));

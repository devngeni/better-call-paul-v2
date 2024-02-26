import styled from "styled-components";

export const ShoppingAdContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  minHeight: "350px",
  width: "98%",
  marginLeft: "2%",
  marginRight: "2%",

  img: {
    width: "inherit",
    height: "220px",
    objectFit: "cover",
  },

  ".Adtitle": {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1A3F34",
    marginTop: "15px",
    marginBottom: "10px",
  },
  ".AdSub_title": {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#1A3F34",
    marginTop: "10px",
  },
  ".AdDescription": {
    fontSize: "12px",
    color: "#1A3F34",
  },
  ".ReadMoreLink": {
    fontStyle: "italic",
    fontSize: "12px",
    marginTop: "10px",
  },
});

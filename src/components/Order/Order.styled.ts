import { styled } from "@mui/system";

export const OrderWrapper = styled("div")((_) => {
  return {
    position: "relative",
    display: "flex",
    padding: "1.71rem 1.71rem 0",
    alignItems: "center",
    gap: "1.14rem",

    "@media (max-width: 35rem)": {
      flexDirection: "column",
      alignItems: "start",
    },

    "@media (max-width: 25rem)": {
      flexDirection: "column",
      alignItems: "center",
    },

    "& > span.order-price": {
      fontSize: "2.57rem",
      color: "var(--secondPrimaryColor)",
    },

    "& > div.add-wrapper": {
      display: "flex",
      gap: "1.14rem",

      "@media (max-width: 35rem)": {
        width: "100%",
        justifyContent: "space-between",
      },

      "@media (max-width: 25rem)": {
        flexDirection: "column",
        alignItems: "center",
      },

      "& > button": {
        padding: "0 2rem",
        border: "0.1rem solid transparent",
        borderRadius: "1rem",
        backgroundColor: "var(--secondPrimaryColor)",
        color: "var(--basicWhiteColor)",
        fontSize: "1.71rem",

        "&:hover": {
          border: "0.1rem solid var(--basicDarkColor)",
          backgroundColor: "var(--hoverCardColor)",
          color: "var(--secondPrimaryColor)",
        },
      },
    },

    "& > div > div.counter": {
      display: "flex",
      lineHeight: "2.71rem",
      transition: "color 0.1s ease-in-out",

      "& > button": {
        borderRadius: 0,
        border: "0.1rem solid var(--basicDarkColor)",
        color: "var(--secondPrimaryColor)",

        "&:disabled": {
          color: "var(--basicGreyColor)",
        },
      },

      "& > .count": {
        minWidth: "7.14rem",
        borderTop: "0.1rem solid var(--basicDarkColor)",
        borderBottom: "0.1rem solid var(--basicDarkColor)",
        textAlign: "center",
        fontSize: "1.7rem",
        lineHeight: "3.14rem",
      },
    },

    "& > button.order-favorite": {
      "@media (max-width: 35rem)": {
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translateY(70%) translateX(-40%)",
      },

      "svg > path:nth-of-type(1)": {
        opacity: 0,
      },

      color: "inherrit",

      "&:hover": {
        color: "var(--hoverColor)",
        "svg > path:nth-of-type(1)": {
          opacity: 1,
        },
      },
    },

    "&.has-like": {
      "& > button.order-favorite": {
        color: "var(--secondPrimaryColor)",
        transition: "color 0.1s ease-in-out",

        "&  > svg > path:nth-of-type(1)": {
          opacity: 1,
          transition: "opacity 0.1s ease-in-out",
        },
      },
    },
  };
});

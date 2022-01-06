import { createTheme } from "@mui/material/styles"
import "./css/typography.css"

let theme = createTheme({
  palette: {
    primary: {
      //ffd984
      main: "#ffd984",
      light: "#fef7ec",
    },
    secondary: {
      main: "#fd5983",
    },
    button: {
      main: "#070707",
    },
    text: {
      primary: "#0e0e0e",
      secondary: "#7e7e7d",
    },
    typography: {
      fontFamily: `Averta, -apple-system, BlinkMacSystemFont, sans-serif`,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "secondary" },
          style: {
            "&:hover": {
              backgroundColor: "#fef7ec",
              color: "black",
            },
          },
        },
        {
          props: { color: "primary" },
          style: {
            "&:hover": {
              backgroundColor: "#ffc84c",
            },
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 25,
        },
        outlined: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 25,
          fontSize: 14,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fef7ec",
          },
        },
        contained: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 25,
          fontSize: 14,
          padding: "10px 25px 10px 25px",
          boxShadow: "none",
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "default" },
          style: {
            backgroundColor: "unset",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: "#fd5983",
            color: '#fff'
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: "#ffd984",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 14,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          fontSize: 56,
          fontWeight: 1000,
        },
        h4: {
          fontSize: 24,
          fontWeight: 800,
        },
        h5: {
          fontSize: 14,
          fontWeight: "bold",
          color: "#333333",
        },
        subtitle1: {
          color: "#7e7e7d",
          fontSize: 18,
        },
        subtitle2: {
          color: "#7e7e7d",
          fontSize: 12,
          display: "flex",
          alignItems: "center",
        },
        subtitle3: {
          color: "#808191",
          fontSize: 14,
        },
        subtitle4: {
          color: "#7e7e7d",
          fontSize: 16,
        },
      },
    },
  },
})

export default theme

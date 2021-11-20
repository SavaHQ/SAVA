import _ from "lodash";
import { colors, createTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseConfig = {
  direction: "ltr",
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
};

const themeConfig = {
  name: "LIGHT",
  overrides: {
    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
  },
  palette: {
    type: "light",
    action: {
      active: "#5C6C8D", // small icons
      hover: "#F8F8F8",
    },
    background: {
      default: colors.common.white,
      dark: "#f4f6f8",
      paper: colors.common.white, // background
    },
    primary: {
      main: "#ffffff", // for header and loader
      navBar: {
        mobile: {
          iconColor: "#ffffff",
          searchIcon: "#2D303F",
          searchBackground: "#ffffff",
        },
        desktop: {
          searchBackground: "rgba(150, 150, 150, 0.14)",
        },
      },
      footer: {
        background: "#000000",
      },
    },
    secondary: {
      default: "#51BFA5",
      main: "#CA5454",
      iconColor: "#DADEEB",
    },
    error: {
      main: "#FF9D9D",
    },
    text: {
      primary: "#2D303F",
      secondary: "#808080",
    },
  },
};

const createThemes = () => {
  let theme = createTheme(
    _.merge({}, baseConfig, themeConfig, {
      direction: "ltr",
      mixins: {
        denseToolbar: {
          minHeight: 20,
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 450,
          md: 624,
          lg: 1024,
          xl: 1200,
        },
      },
    })
  );

  theme = responsiveFontSizes(theme);

  return theme;
};

export { createThemes };

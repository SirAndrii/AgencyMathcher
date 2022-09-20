import {createTheme} from '@mui/material/styles';
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"

const breakpoints = createBreakpoints({}); //outputs {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}

export const fontFamily = [
    'Sofia Pro',
    'Helvetica Neue',
    'sans-serif'
].join(',');

export const maxWidth = '1200px';

export const palette = {
    common: {
        black: '#1b1b33',
        white: '#fff'
    },
    primary: {
        light: '#a5a4bf',
        main: '#43425d',
        dark: '#1b1b33',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff6089',
        main: '#e61f5c',
        dark: '#ad0033',
        contrastText: '#fff',
    },
    grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161',
    },
    text: {
        primary: 'rgba(27, 27, 51, 0.87)',
        secondary: 'rgba(27, 27, 51, 0.54)',
        disabled: 'rgba(27, 27, 51, 0.38)',
        hint: 'rgba(27, 27, 51, 0.38)',

    },
    divider: "rgba(27, 27, 51, 0.12)"

};

let aclippTheme = createTheme({
    palette, //to use some colors in overriding block

    typography: {
        //for MUI v5
        allVariants: {
            fontFamily: fontFamily,
            maxWidth: maxWidth,
        },
        hero: {
            color: '#001632 !important',
            marginBottom:'15px',
            fontWeight: 700,
            lineHeight: 1.2,
            textTransform: "uppercase",
            [breakpoints.down('sm')]:{fontSize:'36px'},
            [breakpoints.up('sm')]:{fontSize:'42px'},
            [breakpoints.up('lg')]:{fontSize:'56px'},

        },
        title3: {
            maxWidth: "500px",
            marginBottom: "15px",
            color: palette.secondary.main,
            fontSize: "14px",
            fontWeight: 700,
            textAlign: "left",
            letterSpacing: "3px",
            textTransform: "uppercase"
        },


        h1: {
            fontSize: 28,
        },
        h2: {
            marginTop: "0",
            marginBottom: "20px",
            color: "#1a3066",
            fontSize: "46px",
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: "-.5px"
        },
        subtitle1: {
            color: palette.primary.main,
            fontSize: "18px",
            lineHeight: 1.5,
        },
        subtitle2: {
            color: '#546681',
            fontSize: 18,
            lineHeight: '1.5',
        },
        button: {
            textTransform: 'none',
        }

    },
    components: {
        MuiMenu: {
            defaultProps: { //MUIv5 https://mui.com/material-ui/migration/v5-component-changes/#change-default-anchororigin-vertical-value
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'standard',
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    color: palette.primary.main,
                    backgroundColor: 'transparent',
                },
                dense: {
                    minHeight: 60
                }
            },
        },
        MuiBadge: {
            styleOverrides: {
                dot: {
                    height: '8px',
                    minWidth: '8px'
                },
                colorPrimary: {
                    backgroundColor: palette.secondary.light
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.primary.main,
                },
                message: {
                    width: '100%'
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    minWidth: 160
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                elevation1: {
                    boxShadow: '0px 2px 6px rgba(0,0,0,0.04)'
                },
                rounded: {
                    borderRadius: 0,
                }
            },
        },
        MuiTypography: {
            styleOverrides: {
                fontFamily: fontFamily,
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                fontFamily: fontFamily,
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                fontFamily: fontFamily,
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                   // backgroundColor: palette.secondary.main,
                    padding: '18px 35px',
                    borderRadius: '50px',
                    color: '#fff',
                    fontSize: '16px',
                    transition: 'box-shadow .3s ease-in-out',
                    lineHeight:1,
                    "&:hover": {
                        boxShadow: '4px 4px 0 1px rgb(27 27 51 / 23%)',
                    }
                }

            },
        }
    },

})
;
//aclippTheme = responsiveFontSizes(aclippTheme);

export default aclippTheme
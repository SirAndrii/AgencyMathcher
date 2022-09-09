import {createTheme} from '@mui/material/styles';

export const fontFamily = [
    'Sofia Pro',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
].join(',');

let aclippTheme = createTheme({
    palette: {
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
    },
});

aclippTheme = createTheme(aclippTheme, {
    typography: {
        //for MUI v5
        allVariants: {
            fontFamily: fontFamily,
        },

        h1: {
            fontSize: 28,
        },
        h2: {
            fontSize: 18,
        },
        body1: {
            fontSize: 14,
        },
        subtitle1: {
            fontSize: 25,
        },
        subtitle2: {
            fontSize: 18,

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
                    color: '#43425d',
                    backgroundColor: '#fff'
                },
            },
        },
        MuiBadge: {
            styleOverrides: {
                dot: {
                    height: '8px',
                    minWidth: '8px'
                },
                colorPrimary: {
                    backgroundColor: '#FFCA83'
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: '#43425d'
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
        // MuiButton: {
        //     styleOverrides: {
        //         outlined: {
        //             backgroundColor: aclippTheme.palette.primary.dark,
        //         },
        //     }
        // },
    },
});

export default aclippTheme
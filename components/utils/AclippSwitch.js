import withStyles from '@mui/styles/withStyles';
import {Switch} from "@mui/material";

export const AclippSwitch = withStyles(theme => ({
    root: {
        width: 57,
        height: 26,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 3,
        color: '#A5A4BF',
        '& .Mui-checked': {
            transform: 'translateX(31px)',
            color: theme.palette.common.white,
            '& .Mui-track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        padding: 2,
        width: 18,
        height: 18,
        boxShadow: 'none',
    },
    track: {
        width: 55,
        height: 24,
        border: '1px solid #A5A4BF',
        borderRadius: 24 / 2,
        opacity: 1,
        backgroundColor: '#F0F0F7',
    },
    checked: {},
}))(Switch);
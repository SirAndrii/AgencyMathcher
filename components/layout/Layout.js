import {Box} from "@mui/material";


const style = {
    home:
        {
            textAlign: "center",
            backgroundColor: "#282c34",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "calc(10px + 2vmin)",
            scrollBehavior: 'smooth',
            color: "white",
        }
}

export default function Layout (props) {

    return (
        <Box style={style.home}>
            {props.children}
        </Box>

    );
}
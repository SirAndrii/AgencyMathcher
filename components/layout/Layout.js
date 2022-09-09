import {Box} from "@mui/material";


const style = {
    home:
        {
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }
}

export default function Layout (props) {

    return (
        <Box style={style.home}>
            {props.children}
        </Box>

    );
}
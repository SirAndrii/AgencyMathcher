import {Grid} from "@mui/material";

export default function Layout(props) {

    return (
        <Grid container
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{
                  textAlign: "center",
                  minHeight: "100vh",
              }}>
            {props.children}
        </Grid>
    );
}
import {Grid} from "@mui/material";

export default function Layout(props) {

    return (
        <Grid container
              direction={'column'}
              justifyContent={'space-between'}
              alignItems={'center'}

              sx={{
                  textAlign: "center",
                  minHeight: "100vh",
                  backgroundImage: 'radial-gradient(ellipse at top, rgba(230, 31, 92, 0.1), transparent 80%)'
              }}>
            {props.children}
        </Grid>
    );
}
import Header from '../components/Header'
import {Grid, Paper, Typography} from "@mui/material";
import CustomLink from "../components/CustomLink";

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
            scrollBehavior:'smooth',
            color: "white",
        },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 40,
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        minHeight: '50vh'
    }


}

export default function Home() {
    return (
        <div style={style.home}>
            <Header/>
            <Grid container>
                <Grid item>
                    <Typography variant="h1">HOME PAGE is here!</Typography>
                </Grid>

                <Grid item
                      id="whatCanYouDo">
                    <Paper style={style.paper}>
                        <Typography variant="h2">whatCanYouDo</Typography>

                        <Typography variant={"subtitle1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aliquam at blanditiis
                            doloribus est ex expedita facere fugit laborum molestias non perspiciatis quos,
                            reprehenderit sint ullam veritatis vitae voluptas voluptate.</Typography>

                        <CustomLink type="button" href="/quiz">
                        Let's Start
                        </CustomLink>
                    </Paper>

                </Grid>

                <Grid item
                      id="howItWorks">
                    <Paper style={style.paper}>
                        <Typography variant="h2">howItWorks</Typography>

                        <Typography variant={"subtitle1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aliquam at blanditiis
                            doloribus est ex expedita facere fugit laborum molestias non perspiciatis quos,
                            reprehenderit sint ullam veritatis vitae voluptas voluptate.</Typography>
                    </Paper>

                </Grid>
                <Grid item
                      id="whoWeAre">
                    <Paper style={style.paper}>
                        <Typography variant="h2">whoWeAre</Typography>

                        <Typography variant={"subtitle1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aliquam at blanditiis
                            doloribus est ex expedita facere fugit laborum molestias non perspiciatis quos,
                            reprehenderit sint ullam veritatis vitae voluptas voluptate.</Typography>
                    </Paper>

                </Grid>

            </Grid>
        </div>
    );
}

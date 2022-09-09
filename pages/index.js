import Header from '../components/Header'
import {Grid, Paper, Typography} from "@mui/material";
import CustomLink from "../components/CustomLink";

const style = {

    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 40,
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        minHeight: '50vh',
        maxWidth:1000
    }


}

export default function Home() {
    return (
            <Grid container
                  direction={'column'}
            alignContent={'center'}
            >
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

                        <CustomLink type="button" href="/quiz" variant={'contained'}>
                        Let's Start
                        </CustomLink>
                    </Paper>

                </Grid>

                <Grid item
                      id="howItWorks"
                      xs={12}
                     >
                    <Paper style={style.paper}
                           xs={12}>
                        <Typography variant="h2">howItWorks</Typography>

                        <Grid container
                        direction={"row"}
                        gap={5}
                              justifyContent={'center'}

                        >

                            <Grid item
                            >
                                <Paper
                                sx={{maxWidth:400, p:'20px'}}>
                                    <Typography variant="h3">User</Typography>
                                    <Typography variant={"subtitle2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusamus aliquam at blanditiis
                                        doloribus est ex expedita facere fugit laborum molestias non perspiciatis quos,
                                        reprehenderit sint ullam veritatis vitae voluptas voluptate.</Typography>

                                    <CustomLink type={"button"} href='#' variant={'outlined'}> Sing up as User</CustomLink>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper
                                    sx={{maxWidth:400, p:'20px'}}>
                                    <Typography variant="h3">Agency</Typography>
                                    <Typography variant={"subtitle2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusamus aliquam at blanditiis
                                        doloribus est ex expedita facere fugit laborum molestias non perspiciatis quos,
                                        reprehenderit sint ullam veritatis vitae voluptas voluptate.</Typography>
                                    <CustomLink type={"button"} href='#' variant={'outlined'}> Sing up as Agency</CustomLink>
                                </Paper>
                            </Grid>


                        </Grid>

                    </Paper>

                </Grid>
                <Grid item
                      id="whoWeAre">
                    <Paper style={style.paper}>
                        <Typography variant="h2">whoWeAre</Typography>
                        <iframe width="700px" height="350px" src="https://www.youtube.com/embed/qq2E4z1m_uQ"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <Typography variant={"subtitle1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus aliquam at blanditiis
                            doloribus est ex expedita facere fugit laborum molestias non perspiciatis quos,
                            reprehenderit sint ullam veritatis vitae voluptas voluptate.</Typography>
                    </Paper>

                </Grid>

            </Grid>

    );
}

import {Box, Grid, Typography} from "@mui/material";


export default function CopyTextBlock() {

    return (
        <Grid
            id={'whatCanYouDo'}
            container
            alignContent={"center"}
            alignItems={'center'}
            justifyContent={"space-between"}

            sx={{
                maxWidth: '1280px',
                m: '0 auto 60px',
                p: '0 20px',
            }}>
            <Grid item
                  sx={{
                      minHeight: '350px',
                      padding: "25px 55px 25px 10px",
                      //justifyContent: 'space-around',
                      alignItems: 'center',
                      width: {xs: '100%', md: '50%'},
                  }}
            >
                <Box sx={{
                    maxWidth: '590px',
                    textAlign: 'left'
                }}>
                    <Typography variant={'title3'} paragraph>
                        Alles in einer software
                    </Typography>

                    <Typography variant={'h2'}>
                        Messe deine PR, <br/>egal aus welcher Quelle.
                    </Typography>

                    <Typography variant={'subtitle1'} paragraph
                                sx={{
                                    maxWidth: "450px",
                                }}>
                        Das Clipping-Chaos hat ein Ende! Mit aclipp verwaltest du die Ergebnisse aus allen Kanälen und
                        Medienbeobachtern zentral. Daraus erstellt das Tool perfekte Präsentationen, Tabellen oder
                        Dashboards.
                    </Typography>
                </Box>

            </Grid>

            <Grid item
                  sx={{
                      width: {xs: '100%', md: '50%'},
                      minHeight: "350px",
                      padding: "30px",
                      justifyContent: "center",
                      alignItems: "center",

                  }}
            >

                <img
                    src="https://assets.website-files.com/5cee91bb4e34b50600b09271/630f7b95bc0f505ae8840135_Group%2010696.svg"
                    data-w-id="fae13c26-f754-52c5-ed3f-19c93bf35bc8" loading="lazy" alt=""
                    style={{willChange: 'opacity', opacity: 1, maxWidth: "90%",}}/>

            </Grid>

        </Grid>

    )
}

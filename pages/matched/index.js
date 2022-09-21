import {Avatar, Box, LinearProgress, Paper, Stack, Typography} from "@mui/material";
import {maxWidth} from "../../styles/theme/aclippTheme";
import CustomLink from "../../components/CustomLink";
import {getFilteredData} from "../api/filterAgency";
import Button from "@mui/material/Button";
import {useState} from "react";
import DialogInfo from "../../components/matched/DialogInfo";

export default function AgencyMatch(props) {
    const [selectedAgency, setSelectedAgency] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <>
            <DialogInfo {...{openDialog, setOpenDialog, selectedAgency}}/>
            <Stack sx={{
                pt: '60px',
            }}>
                <Typography variant={'h2'}>Best agencies by your criteria</Typography>

                {props.agencyMatch.map(el =>

                    <Paper elevation={2}
                           sx={{
                               m: '15px',
                               minWidth: {xs:0,  lg: '1000px'},
                               border: '1px solid rgba(230, 31, 92, 0.7)',
                               borderRadius: '4px'
                           }}>

                        <Stack
                            direction={{xs: 'column', sm: 'row'}}
                            justifyContent={'space-between'}
                            alignItems='center'
                        >
                            <Box sx={{
                                p: '10px',
                                m: '10px',
                                borderRadius: '5px',
                                border: '1px solid lightgrey',
                            }}>
                                <Avatar src={el.logo} style={{width: '90px', height: '90px'}} variant="square"/>
                            </Box>

                            <Stack sx={{width:'100%'}}>
                                <Stack direction={{xs: 'column', sm: 'row'}}
                                       alignItems={{xs: 'center', sm: 'start'}}
                                       spacing={{xs:2, sm:0}}
                                       justifyContent={'space-between'}
                                       sx={{m: '10px'}}
                                >
                                    <Stack direction={"row"}>
                                        <Typography variant={"h4"}>{el.name}</Typography>
                                        <Button
                                            color={'secondary'}
                                            variant={'outlined'}
                                            onClick={() => {
                                                setSelectedAgency(el);
                                                setOpenDialog(true)
                                            }}
                                            sx={{
                                                ml: '10px',
                                                height: '20px',
                                                lineHeight: 1,
                                                display: {xs: 'none', md: 'flex'}
                                            }}
                                        >
                                            More info
                                        </Button>
                                    </Stack>


                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        minWidth: '170px'
                                    }}>

                                        <CustomLink
                                            href={"#"}
                                            type={'button'}
                                            variant={'contained'}
                                            color={'secondary'}
                                            sx={{height: '24px'}}
                                        >
                                            Contact
                                        </CustomLink>

                                    </Box>
                                </Stack>

                                <Stack direction={"row"}
                                       flexWrap={'wrap'}
                                       justifyContent={'space-between'}
                                       sx={{
                                           '&>div': {
                                               borderRight: {xs: 'none', md: '2px solid lightgrey'},
                                               flexBasis: {xs: '50%', md: '24%'},
                                              // flexGrow: {xs: 0, md: 1},
                                              // minWidth: '180px',
                                               //borderBottom: {xs: '2px solid lightgrey', md: 'none'}
                                           },
                                           '&>div:last-child ': {

                                               border: 'none'
                                           }
                                       }}>
                                    <Box>
                                        <Typography variant={'subtitle1'}>Location</Typography>
                                        <Typography variant={'subtitle2'} paragraph>{el.location}</Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant={'subtitle1'}>Founded at</Typography>
                                        <Typography variant={'subtitle2'} paragraph>{el.founded}</Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant={'subtitle1'}>Budget</Typography>
                                        <Typography variant={'subtitle2'} paragraph>from ${el.budget}</Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant={'subtitle1'}>Matched {el.match}%</Typography>
                                        <LinearProgress variant={"determinate"} value={el.match} color={"secondary"}
                                                        sx={{
                                                            width: 100,
                                                            margin: '10px auto',
                                                            height: '7px'
                                                        }}
                                        />
                                    </Box>


                                </Stack>
                            </Stack>

                        </Stack>
                        <Button
                            color={'secondary'}
                            variant={'outlined'}
                            onClick={() => {
                                setSelectedAgency(el);
                                setOpenDialog(true)
                            }}
                            sx={{
                                width: '100%',
                                height: '30px',
                                borderRadius: '0',
                                borderBottom:0,
                                borderLeft:0,
                                borderRight:0,
                                display: {md: 'none'}
                            }}
                        >
                            More info
                        </Button>
                    </Paper>
                )}
            </Stack>
        </>
    )
}


export async function getServerSideProps(context) {

    const {query, params, req, res} = context;

//    const filter = JSON.parse(query.filter);
//console.log({1: filter})
    // const {data} = await axios.post(
    //     '/api/filterAgency',
    //     query.filter,// query is JSON
    //     {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })

    const data = await getFilteredData(query.filter)


    return {
        props: {
            agencyMatch: data
        },
    };

}
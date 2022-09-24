import {Avatar, Box, LinearProgress, Paper, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import DialogContact from "../contact/DialogContact";
import Image from 'next/image'

export default function AgencyCard({setSelectedAgency, setOpenInfo, agency}) {

    return (

        <Paper elevation={2}
               sx={{
                   m: '15px',
                   minWidth: {xs: 0, lg: '1000px'},
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
                    <Avatar
                        // children={agency.name.split(' ')[0]}
                        //alt={agency.name}
                        //src={agency.logo}
                        style={{width: '90px', height: '90px'}}
                        variant="square">
                        {agency.logo ?
                            <Image src={agency.logo} alt={agency.name} width={90} height={90}/>
                            :
                            agency.name.split(' ')[0]
                        }
                    </Avatar>
                </Box>

                <Stack sx={{width: '100%'}}>
                    <Stack
                           direction={{xs: 'column', sm: 'row'}}
                           alignItems={{xs: 'center', sm: 'start'}}
                           spacing={{xs: 2, sm: 0}}
                           justifyContent={'space-between'}
                           sx={{m: '10px'}}
                    >
                        <Stack direction={"row"}>
                            <Typography variant={"h4"}>
                                {agency.name}
                            </Typography>

                            <Button
                                color={'secondary'}
                                variant={'outlined'}
                                onClick={() => {
                                    setSelectedAgency(agency);
                                    setOpenInfo(true)
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

                            <DialogContact agency={agency.name}/>

                        </Box>
                    </Stack>

                    <Stack direction={"row"}
                           flexWrap={'wrap'}
                           justifyContent={'space-between'}
                           sx={{
                               '&>div': {
                                   borderRight: {xs: 'none', md: '2px solid lightgrey'},
                                   flexBasis: {xs: '50%', md: '24%'},
                               },
                               '&>div:last-child ': {

                                   border: 'none'
                               }
                           }}>
                        <Box>
                            <Typography variant={'subtitle1'}>Location</Typography>
                            <Typography variant={'subtitle2'} paragraph>{agency.location}</Typography>
                        </Box>

                        <Box>
                            <Typography variant={'subtitle1'}>Founded at</Typography>
                            <Typography variant={'subtitle2'} paragraph>{agency.founded}</Typography>
                        </Box>

                        <Box>
                            <Typography variant={'subtitle1'}>Budget</Typography>
                            <Typography variant={'subtitle2'} paragraph>from ${agency.budget}</Typography>
                        </Box>

                        <Box>
                            <Typography variant={'subtitle1'}>Matched {agency.match}%</Typography>
                            <LinearProgress variant={"determinate"} value={agency.match} color={"secondary"}
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
                    setSelectedAgency(agency);
                    setOpenInfo(true)
                }}
                sx={{
                    width: '100%',
                    height: '30px',
                    borderRadius: '0',
                    borderBottom: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    display: {md: 'none'}
                }}
            >
                More info
            </Button>

        </Paper>
    )
}
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Grid from "@mui/system/Unstable_Grid";
import {maxWidth} from "../../styles/theme/aclippTheme";
import {Avatar, Stack} from "@mui/material";
import DialogContact from "../contact/DialogContact";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogInfo(props) {
    const {selectedAgency, openInfo, setOpenInfo} = props;

    const handleClickOpen = () => {
        setOpenInfo(true);
    };

    const handleClose = () => {
        setOpenInfo(false);
    };

    if (!selectedAgency) return null;

    return (
        <div>
            <Dialog
                fullScreen
                open={openInfo}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>

                        <Typography variant={'h4'}> More Info</Typography>
                    </Toolbar>
                </AppBar>

                <Grid

                    sx={{
                        m: '0 auto',
                        maxWidth: maxWidth,
                        p: {xs: '10px', sm: '30px'}
                    }}>
                    <Stack direction={"row"} columnGap='20px' alignItems='center'>
                        <Avatar
                            children={selectedAgency.name.split(' ')[0]}
                            src={selectedAgency.logo}
                            sx={{mb: '20px'}}
                        />

                        <Typography variant={'h2'}>
                            {selectedAgency.name}
                        </Typography>

                    </Stack>
                    <Typography paragraph>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores cumque doloribus
                        enim et excepturi hic ipsa laudantium magnam nam neque, nostrum perferendis porro quas qui
                        reiciendis sapiente sint tempore.


                    </Typography>

                    <Typography paragraph>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores cumque doloribus
                        enim et excepturi hic ipsa laudantium magnam nam neque, nostrum perferendis porro quas qui
                        reiciendis sapiente sint tempore.


                    </Typography>

                    <Typography paragraph>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores cumque doloribus
                        enim et excepturi hic ipsa laudantium magnam nam neque, nostrum perferendis porro quas qui
                        reiciendis sapiente sint tempore.


                    </Typography>




                    <DialogContact agency={selectedAgency.name}/>

                </Grid>
            </Dialog>

        </div>
    );
}

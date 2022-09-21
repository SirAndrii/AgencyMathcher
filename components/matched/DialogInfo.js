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
import {Avatar} from "@mui/material";
import CustomLink from "../CustomLink";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogInfo(props) {
    const {selectedAgency, openDialog, setOpenDialog} = props;

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    if (!selectedAgency) return null;
    return (
        <div>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Grid

                    sx={{
                        m: '0 auto',
                        maxWidth: maxWidth,
                        p: {xs: '10px', sm: '30px'}
                    }}>
                    <Avatar src={selectedAgency.logo}/>

                    <Typography variant={'h2'}>
                        {selectedAgency.name}
                    </Typography>

                    <Typography paragraph>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores cumque doloribus
                        enim et excepturi hic ipsa laudantium magnam nam neque, nostrum perferendis porro quas qui
                        reiciendis sapiente sint tempore.


                    </Typography>

                    <CustomLink
                        href={"#"}
                        type={'button'}
                        variant={'contained'}
                        color={'secondary'}
                        sx={{height: '24px'}}
                    >
                        Contact
                    </CustomLink>

                </Grid>
            </Dialog>

        </div>
    );
}

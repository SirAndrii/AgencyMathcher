import {Stack} from "@mui/material";
import Head from "next/head";
import Image from 'next/image'
import CustomLink from "../components/CustomLink";
import Typography from "@mui/material/Typography";

export default () => {
    return (
        <>
            <Head>
                <title>Page not found</title>
            </Head>

            <Stack
                alignItems={'center'}
                gap={'20px'}
                sx={{m: 'auto', p:'50px 0'}}
            >
                <img
                    alt="404"
                    src='https://assets.website-files.com/5cee91bb4e34b50600b09271/602506d3f35d4ffd76bf45b2_undraw_void_3ggu.svg'
                    layout="intrinsic"
                    width={221}
                    height={231}
                />
                <Typography variant={'h2'}>
                    Seite nicht gefunden.
                </Typography>
                <CustomLink
                    href={'/'}
                    type={'button'}
                    variant={'contained'}
                    color={'secondary'}
                >
                    Home page
                </CustomLink>

            </Stack>
        </>
    );

}
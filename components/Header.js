// import { useRouter } from 'next/router'
// import {Grid} from "@mui/material";
//
// export default function Header() {
//   return (
//     <Grid
//     container
//     direction={"row"}
//     >
//       <Link href="/">Home</Link>
//       <Link href="/about">About</Link>
//         <Link href="/quiz">Quiz</Link>
//     </Grid>
//   )
// }

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavBar from './layout/NavBar'
import {useRouter} from "next/router";
import {routes} from "../constants/routes";
// import { mainShadow } from '~/styles/app-theme/custom-shadows'

const AppHeader = () => {
    const router = useRouter();
    if (router.pathname === routes.QUIZ.route) return null;

  return (
      <>
        <AppBar color='common' /*sx={ { boxShadow: mainShadow } }*/>
          <NavBar />
        </AppBar>
        <Toolbar sx={ { height: { xs: '56px', sm: '72px', md: '80px' } } } />
      </>
  )
}

export default AppHeader

//
// const Link = ({ children, href }) => {
//   const router = useRouter()
//   return (
//     <a
//       href="#"
//       onClick={(e) => {
//         e.preventDefault()
//         // typically you want to use `next/link` for this usecase
//         // but this example shows how you can also access the router
//         // and use it manually
//         router.push(href)
//       }}
//     >
//       {children}
//       <style jsx>{`
//         a {
//           margin-right: 10px;
//         }
//       `}</style>
//     </a>
//   )
// }

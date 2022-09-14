import {useRouter} from "next/router";

import {AppBar, Toolbar} from '@mui/material'
import NavBar from './NavBar'

import {routes} from "../../constants/routes";

const AppHeader = () => {
    const router = useRouter();
    if (router.pathname === routes.QUIZ.route) return null;

  return (
      <>
        <AppBar color='common'>
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

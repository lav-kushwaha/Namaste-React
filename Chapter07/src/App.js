import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from './components/About';
import Contact from './components/contact';
import Error from './components/Error'

//App Layout.
const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            {/* Outlet is display path from the children according to path.
             ex- if path is slash "/" then <Body/> component will be display from the children*/}
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
    //show path for routing if path is slash "/" then <AppLayout/> will be display.
    path: "/",
    //AppLayout is Parent.
    element: <AppLayout />, 
    // show component for particular path.
    // "childen" is a children of AppLayout.
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
    errorElement: <Error />, // show error component for path is different or not match.
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);//render RouterProvider and use router as props and pass value appRouter
// root.render(<AppLayout/>);
import React,{lazy,Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from './components/About';
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


//Lazy Loading - it is load when its required.
const Contact = lazy(()=>import('./components/contact'));

//App Layout.
const AppLayout = ()=>{
    return(
      <Provider store={appStore}>
      <div className='app'>
          <Header/>
          <Outlet/>
      </div>
      </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />, 
    errorElement: <Error />, // show error component for path is different or not match.
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
        element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Contact />
                 </Suspense>     
      },
      // {/*Dynamic Route and Dynamic Component */}
      {
        path:"/restaurants/:resID",
        element:<Suspense fallback={<h1>Loading...</h1>}>
                <RestaurantMenu/>
               </Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
              
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);//render RouterProvider and use router as props and pass value appRouter
// root.render(<AppLayout/>);
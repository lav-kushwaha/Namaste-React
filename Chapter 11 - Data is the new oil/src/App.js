import React,{lazy,Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from './components/About';
// import Contact from './components/contact';
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';


//Lazy Loading - it is load when its required.
const Contact = lazy(()=>import('./components/contact'));

//App Layout.
const AppLayout = ()=>{
     const[userName,setUserName]=useState();

     //Make an API call and send username.
     useEffect(()=>{
      const data = {
        name:"Lav Kushwaha"
      }
      setUserName(data.name);
     },[])

    return(
      <UserContext.Provider value={{LoggedInUser:userName,setUserName}}>
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>

    );
}

const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />, 
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
      }
    ],
    errorElement: <Error />, // show error component for path is different or not match.
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);//render RouterProvider and use router as props and pass value appRouter
// root.render(<AppLayout/>);
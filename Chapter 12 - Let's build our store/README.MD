#REDUX TOOLKIT
=>INSTALL @reduxjs/toolkit and react-redux.
=>Build our store.
=>connect our store to our app.
=>Slice (Cart slice)
=>dispatch(action)
=>we will read the data by using selector.

#App.js
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const AppLayout = ()=>{
    return(
      <Provider action={appStore}>
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    );
}

#Header.jsx
    //useSelector Hooks - subscribing to the store or selecting data from redux store.
    //useSelector hooks gives us access to our store.
    //This data coming from appStore.
    const cartItems = useSelector((items)=>items.cart.items)
    console.log(cartItems);

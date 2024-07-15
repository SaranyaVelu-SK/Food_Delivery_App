import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import BodyComp from './components/BodyComponent';
import Footer from './components/Footer';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantDetails from './components/RestaurantDetails';
import { lazy } from 'react';
import { Suspense } from 'react';

const AppLayout = () =>{
    
    return(
        <div>
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    )
}
const Grocery = lazy(()=> import('./components/Grocery'))
 const routing = createBrowserRouter([
    {path:'/',element:<AppLayout/>,errorElement:<Error />,children:[
        {path:'/',element:<BodyComp/>},
        {path:'/aboutus',element:<AboutUs/>},
    {path:'/contactus',element:<ContactUs/>},
    {path:'/resDetails/:resName',element: <RestaurantDetails/>},
    {path:'/grocery', element:<Suspense fallback={<h2>Please wait saro...</h2>}><Grocery/></Suspense>}
    ]},
    
 ])
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<RouterProvider router={routing}></RouterProvider>);
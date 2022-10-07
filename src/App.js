import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import { productsAndCartLoader } from './Loader/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: () => fetch('products.json') ,
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          // loader: () => fetch('products.json') ,
          loader: productsAndCartLoader ,
          element: <Order></Order>
        },
        {
          path:'/inventory',
          element: <Inventory></Inventory>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
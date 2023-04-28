import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import AllProduct from './pages/AllProduct';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children:[
      { index: true, element: <Home />},
      { path: '/products', element: <AllProduct />},
      { path: '/products/new', 
        element:
          <ProtectedRoute requireAdmin>
              <NewProduct />
          </ProtectedRoute>},
      { path: '/products/:id', element: <ProductDetail />},
      { path: '/carts', 
        element: 
          <ProtectedRoute>
              <MyCart />
          </ProtectedRoute>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

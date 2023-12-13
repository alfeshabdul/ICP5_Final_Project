import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import Buy from "./views/Buy/Buy";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MyOrder from './views/MyOrders/MyOrders';

const root = ReactDom.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        "path": "/",
        "element": <Home />
    },
    {
        "path":"/signup",
        "element":<Signup/>
    },
    {
        "path":"/login",
        "element":<Login/>
    },
    {
        "path":"/buy/:id",
        "element":<Buy/>
    },
    {
        "path":"/my-orders",
        "element":<MyOrder/>
    }
])

root.render(<RouterProvider router={router} />);
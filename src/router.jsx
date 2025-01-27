import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import ProductDetailes from "./pages/ProductDetailes/ProductDetailes";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '',
                element: <Home /> 
            },
            {
                path: 'pd',
                element: <ProductDetailes /> 
            },
        ]
    },
    /*{
        path: '*',
        element: <PageNotFound />
    },*/
],{
    basename:"/alli-baba/"
})
export default routes
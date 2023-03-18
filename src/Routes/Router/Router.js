import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import LiveChat from "../../Pages/LiveChat/LiveChat";
import Login from "../../Pages/Sheard/Login/Login";
const { default: Home } = require("../../Pages/Home/Home/Home");


 const router=createBrowserRouter([
    {path:'/', element:<Main></Main>,
    children:[
        {path:'/', element:<Home></Home>},
        {path:'/chat', element:<LiveChat></LiveChat>},
        {path:'/login', element:<Login></Login>},
    ]
}
])

export default router;
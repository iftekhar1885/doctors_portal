import DashBoardLayout from "../../layout/DashboardLayout/DashBoardLayout";
import Main from "../../layout/Main";
import MyAppointMent from "../../layout/MyAppointMent/MyAppointMent";
import AllUsers from "../../pages/AllUsers/AllUsers";
import AppointMent from "../../pages/Appointment/Appointment/AppointMent";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
// import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
// import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../pages/Dashboard/ManageDoctors/ManageDoctors";
import PayMent from "../../pages/Dashboard/payment/PayMent";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Home/login/Login";
import SignUp from "../../pages/SIgnUp/SignUp";
import DIsplayError from "../../Shared/DIsplayError/DIsplayError";
import AdminRoute from "./AdminRoutes/AdminRoutes";
import PrivateRoute from "./privateRoute/PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DIsplayError></DIsplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/appointment',
                element: <AppointMent></AppointMent>

            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DIsplayError></DIsplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointMent></MyAppointMent>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PayMent></PayMent>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-navy-seven.vercel.app/bookings/${params.id}`)
            }
        ]
    }


])
export default router;

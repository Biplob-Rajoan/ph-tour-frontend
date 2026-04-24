import App from '@/App';
import AdminLayout from '@/components/layout/AdminLayout';
import About from '@/pages/About';
import Analytics from '@/pages/Analytics';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { createBrowserRouter } from 'react-router-dom';
/* eslint-disable @typescript-eslint/no-unused-vars */

// Router configuration will be added here after installing react-router-dom


export const router = createBrowserRouter([
    {
    // element: <App />,
    Component: App,
    path: '/',
    children:[
        {
            Component: About,
            path: 'about',
        }
    ]
    },
    {
        Component: AdminLayout,
        path: '/admin',
        children:[
            {
                Component: Analytics ,
                path: "analytics"

            }
        ]
    },
    {
        Component: Login,
        path: '/login',
    },
    {
        Component: Register,
        path: '/register',
    }
])
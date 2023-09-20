import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ListArticle from "./pages/articles/ListArticle";
import AddArticle from "./pages/articles/AddArticle";
import EditArticle from "./pages/articles/EditArticle";
import ShowArticle from "./pages/articles/ShowArticle";


export const routers = createBrowserRouter([
    {path: '/', element: <SiteLayout />, children: [
        {path: '', element: <Home />},
        {path: 'about', element: <About />},
        {path: 'contact', element: <Contact />}
    ]},
    {path: '/blog', element: <SiteLayout />, children: [

        {path: '', element: <ListArticle />},
        {path: 'add', element: <AddArticle />},
        {path: 'edit', element: <EditArticle />},
        {path: 'show', element: <ShowArticle />},
    ]}
  ])
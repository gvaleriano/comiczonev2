import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage";
import { HomeComics } from "./pages/home-comics/home-comics";
import { AboutPage } from "./pages/about/aboutpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/comics",
    element: <HomeComics/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  }
]);

export function App() {
  return(
    <RouterProvider router={router} />
  )
}

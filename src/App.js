import Layout from "./components/Layout";
import Error from "./components/Error";
import Index from "./components/Index";
// import About from "./components/About";
// import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Index /> },
        // { path: "about", element: <About /> },
        // { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

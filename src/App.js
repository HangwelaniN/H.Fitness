import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  import Navbar from "./Navbar";
  import Home from "./Home";
  import About from "./About";
  import Pricing from "./Pricing";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Pricing" element={<Pricing />} />
      </Route>
    )
  );
  
  export default function App() {
    return <RouterProvider router={router} />;
  }
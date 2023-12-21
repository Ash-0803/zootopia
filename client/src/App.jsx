import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

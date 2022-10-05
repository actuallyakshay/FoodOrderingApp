
import { Button, useColorMode } from "@chakra-ui/react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import AllRoutes from "./Pages/AllRoutes";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <LoginPage /> */}
    </>
  );
}

export default App;

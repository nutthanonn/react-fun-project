import React from "react";
import ImageLight from "./assets/background-light.jpeg";
import ImageDark from "./assets/background-dark.jpeg";
import Navbar from "./Components/navbar";
import Finder from "./Components/Finder";
import Footer from "./Components/footer";

const App: React.FC = () => {
  return (
    <div
      className="bg-cover h-screen bg-center"
      style={{ backgroundImage: `url(${ImageDark})` }}
    >
      <Navbar />
      <Finder />
      <Footer />
    </div>
  );
};

export default App;

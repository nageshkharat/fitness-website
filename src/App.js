import "./App.css";
import { useEffect } from "react";
import Aos from "aos";   
import Footer from "./UI/Footer";    
import Header from "./component/Header";
import AllRoutes from "./component/AllRoutes";  
import Chatbot from "./UI/Chatbot"; // Import Chatbot 

function App() {  
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <> 
      <Header />
      <AllRoutes />
      <Footer />
      <Chatbot /> {/* Include Chatbot */}
      {/* <Login /> */}
    </>
  );
}

export default App;

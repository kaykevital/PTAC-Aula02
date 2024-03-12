import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./globals.css";

export default function App() {

  return(
   <div className="principal">
      <Header/>
      <Card/>
      <Footer/>
   </div>
   
  );

}
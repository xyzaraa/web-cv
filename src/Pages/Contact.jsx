import Navbar from "../Features/navbar";
import Footer from "../Features/footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {   
    const navigate = useNavigate();
    return(
        <>
        <Navbar/>
      
        
        <Footer/>
        </>
    )
}

export default Contact;
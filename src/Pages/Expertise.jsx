import Exp1 from "./img/BULB2C 2.png"
import Exp2 from "./img/Convocation capnew1 2.png"
import Exp3 from "./img/globe5 3.png"
import Exp4 from "./img/book new one 2.png"
import Navbar from "../Features/navbar";
import Footer from "../Features/footer";
import { useNavigate } from "react-router-dom";

const Expertise = () => {   
    const navigate = useNavigate();
    return(
        <>
        <Navbar/>
        <section>
    <div class="container">
        <h2 class="what">What I'm Doing?</h2>
        <hr/>
    </div>
    <div class="gap-3-container">
        <div class="gap-3-item">
                <img class="icon-expertise1" src={Exp1} alt="BULB2C"/>
                <p class="txt-expertise">As a dedicated Data Scientist, I bring experience in designing and implementing data analysis models to support strategic decision-making. My primary focus is extracting patterns from complex data and applying machine learning solutions to forecast future trends. </p>
        </div>
        <div class="gap-3-item">
            <img class="icon-expertise2" src={Exp2} alt=""/>
            <p class="txt-expertise2">With a strong background in machine learning, <br />I have applied advanced algorithms to solve real-world problems. This includes developing recommendation systems, classification models, and clustering analyses to extract meaningful information from diverse datasets.</p>
        </div>
      </div>
      <div class="gap-3-container">
        <div class="gap-3-item">
            <img class="icon-expertise3" src={Exp3} alt=""/>
            <p class="txt-expertise">My problem-solving approach revolves around leveraging data-driven methodologies. I have successfully tackled complex business challenges by identifying key variables, creating hypotheses, and validating solutions through rigorous data analysis.</p>
        </div>
        <div class="gap-3-item">
            <img class="icon-expertise4" src={Exp4} alt=""/>
            <p class="txt-expertise">In the dynamic field of data science, I am committed to continuous learning and staying abreast of the latest advancements. This dedication allows me to integrate innovative approaches and technologies into my data science toolkit.</p>
        </div>
      </div>
      
  </section>
        
        <Footer/>
        </>
    )
}

export default Expertise;
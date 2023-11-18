import { useNavigate } from "react-router-dom";
import Navbar from "../Features/navbar";
import Footer from "../Features/footer";
import FolderIcon from "./img/Folder-icon.png";


const Home = () => {
    const navigate = useNavigate();
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/pdf/resume.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
    };

    return (
        <>

            <Navbar />

            <section>
                <div class="container">
                    <div class="rectangle-home">
                        <div class="row">
                            <div class="col-md-2">
                                <img class="folder-icon" src={FolderIcon} alt="folder-icon" />
                            </div>
                            <div class="col">
                                <div class="txt-display txt">
                                    200 <br />Project Completed
                                </div>
                            </div>
                            <div class="col-md-2">
                                <img class="folder-icon" src={FolderIcon} alt="folder-icon" />
                            </div>
                            <div class="col">
                                <div class="txt-display txt">
                                    653+ <br />Happy Clients
                                </div>
                            </div>
                            <div class="col-md-2">
                                <img class="folder-icon" src={FolderIcon} alt="folder-icon" />
                            </div>
                            <div class="col">
                                <div class="txt-display txt">
                                    234 <br />Achievements
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col">
                                    <div class="display-text-below col">
                                        <h3>About Me</h3>
                                        <p>My name is Kiara Azzahra, 5th semester student of Universitas Muhammadiyah Malang with
                                            S1 study program Informatics who is currently also a UMM informatics laboratory assistant. I
                                            have an interest in data science. I also have some experience in web development.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />


        </>
    )
}


export default Home;
import Navbar from "../Features/navbar";
import Footer from "../Features/footer";
import { useNavigate } from "react-router-dom";
import Valo from "./img/valorant.jpg"
import Swim from "./img/swimming.jpg"
import Travel from "./img/travelling .png"
import Anime from "./img/listening.png"
import Frog from "./img/shopping.png"
import "bootstrap"

const Hobbies = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <section>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Valo} className="c-image" onClick={() => window.open("https://tracker.gg/valorant/profile/riot/CreamyX404%23404/overview", "_blank")} alt="Valorant" style={{ cursor: 'pointer' }} />
                            <div class="carousel-caption d-none d-md-block text-center" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                                VALORANT
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={Swim} className="c-image" />
                            <div class="carousel-caption d-none d-md-block text-center" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                                SWIMMING
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img
                                src={Anime}
                                className="c-image"
                                onClick={() => window.open("https://open.spotify.com/playlist/2pMOlNffdF2O4ai8d3X7Dr?si=1bb0ca23fec244cf", "_blank")}
                                alt="Anime"
                                style={{ cursor: 'pointer' }}
                            /> 
                            <div class="carousel-caption d-none d-md-block text-center" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                                LISTEN TO MUSIC
                            </div>
                        </div>


                        <div class="carousel-item">
                            <img src={Travel} className="c-image" />
                            <div class="carousel-caption d-none d-md-block text-center" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                                TRAVELLING
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={Frog} className="c-image" />
                            <div class="carousel-caption d-none d-md-block text-center" style={{ color: 'black', fontSize: '24px', fontWeight: 'bold' }}>
                                SHOPPING
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>

            <Footer />
        </>
    )
}

export default Hobbies;
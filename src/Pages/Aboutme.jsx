import { useNavigate } from "react-router-dom";
import Navbar from "../Features/navbar";
import Footer from "../Features/footer";
import FotoProfil from "./img/kth.jpeg"
import Calendar from "./img/calendar-01.png"
import Phone from "./img/Icon.png"
import Marker from "./img/marker-02.png"
import Mail from "./img/mail-03.png"


const Aboutme = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section>
                <div className="container">
                    <div className="rectangle-aboutme">
                        <div className="row">
                            <div className="foto-aboutme col">
                                <h2 className="txt-aboutme">About Me</h2><img className="profile-aboutme" src={FotoProfil} alt="profile-pics" />
                            </div>
                            <div className="bioname col">
                                <h3 className="name-aboutme">Kiara Azzahra</h3>
                                <p className="paragraf-aboutme">My name is Kiara Azzahra, 5th semester student of Universitas Muhammadiyah Malang with
                                    S1 study program Informatics who is currently also a UMM informatics laboratory assistant. I
                                    have an interest in data science. I also have some experience in web development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-aboutme-contact">
                        <div className="container text-center">
                            <div className="row">
                                <div className="prabowo col-md-3">
                                    <div className="column "><img className="jokowi" src={Calendar} alt="calendar-icon" />
                                        <p className="enhypen">March 23, 2003</p>
                                    </div>
                                </div>
                                <div className="prabowo col-md-3">
                                    <div className="column"><img className="jokowi" src={Marker} alt="marker-icon" />
                                        <p className="enhypen">Batu City, East Java</p>
                                    </div>
                                </div>
                                <div className="prabowo col-md-3">
                                    <div className="column"><img className="jokowi" src={Mail} alt="mail-03" />
                                        <p className="enhypen">kiarazzahraaa@gmail.com</p>
                                    </div>
                                </div>
                                <div className="prabowo col-md-3">
                                    <div className="column"></div><img className="jokowi" src={Phone} alt="phone" />
                                    <p className="enhypen">(+62)87788153752</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <h2 className="title-edu">Education</h2>
                <div className="timeline">
                    {/* first */}
                    <div className="timeline__event animated fadeInUp delay-3s timeline__event--type1">
                        <div className="timeline__event__icon ">
                            {/* <i class="lni-sport"></i>*/}
                        </div>
                        <div className="timeline__event__date"> 2008 </div>
                        <div className="timeline__event__content ">
                            <div className="timeline__event__title"> Citra Bunda Kindergarten </div>
                            <div className="timeline__event__description">
                                <p>Even though this is kindergarten, I was awarded as a model student. You could say that I was already an outstanding student from kindergarten.</p>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            {/* <i class="lni-sport"></i>*/}
                        </div>
                        <div className="timeline__event__date"> 2010 </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title"> Elementary School Graduation </div>
                            <div className="timeline__event__description">
                                <p>I graduated from elementary school with a national exam score of 27.95 where I scored 90 and above for each subject (Science, Bahasa Indonesia, Math). I was also awarded the highest score in religion, local language, environment, English, Bahasa Indonesia, social studies, and civics. In addition, I was awarded 1st place in my class at graduation.</p>
                            </div>
                        </div>
                    </div>
                    {/* third */}
                    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                        <div className="timeline__event__icon">
                            {/* <i class="lni-sport"></i>*/}
                        </div>
                        <div className="timeline__event__date"> 2015 </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title"> Junior High School </div>
                            <div className="timeline__event__description">
                                <p>I once served as chief librarian for the students. I also participated in several provincial level scouting competitions and of course received awards as the 2nd overall champion in East Java. I also actively participated in the scouting organization and became a squad leader.</p>
                            </div>
                        </div>
                    </div>
                    {/* forth */}
                    <div className="timeline__event animated fadeInUp timeline__event--type1">
                        <div className="timeline__event__icon">
                            {/* <i class="lni-sport"></i>*/}
                        </div>
                        <div className="timeline__event__date"> 2018 </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title"> Senior High School </div>
                            <div className="timeline__event__description">
                                <p>I go to Al-Izzah International Islamic Boarding School which requires all students to memorize 15 juz of the Quran. Apart from being a graduation requirement, I also managed to do 3 juz in one sitting and 5 juz in one sitting. I participated as a science student and was very interested in Chemistry. In addition, I have also participated in the chemistry olympiad. </p>
                            </div>
                        </div>
                    </div>
                    {/* first */}
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                        <div className="timeline__event__icon ">
                            {/* <i class="lni-sport"></i>*/}
                        </div>
                        <div className="timeline__event__date"> 2021</div>
                        <div className="timeline__event__content ">
                            <div className="timeline__event__title"> College </div>
                            <div className="timeline__event__description">
                                <p>I continued my studies at Muhammadiyah Malang University majoring in informatics. Until now, I managed to become a laboratory assistant and became the treasurer of Infotech. In addition, I am currently doing an internship at PT Novo Indonesia Learning, which is creating an AI program. I took data science as my field of interest. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Aboutme
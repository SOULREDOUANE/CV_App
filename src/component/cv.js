
import React from 'react';
import profile from './icons2/profile.jpeg';
import calender from './icons2/calendar.png';
import home from './icons2/home.png';
import tele from './icons2/telephone.png';
import email from './icons2/email.png';
import linkedin from './icons2/linkedin.png';
import github from './icons2/github.png';

import { useOutletContext} from 'react-router-dom';
function Cv(){
    const object=useOutletContext();
    return (
       
        <div className="container">
        <div className="Profile">
            <div  className="profile">
                <img className="image_profile" src={profile} alt=""/>
                <h2 className="name">{object.title}</h2>
            </div>
            <div className="personal_detail">
                <div className="personal"><h3>Information personnalis√©</h3></div>
                <div className="icons">
                    <div className="icon_age"><img src={calender} alt="calender" className="icon_size"/></div>
                    <div className="age">{object.age} </div>
                </div>
                    <div className="icons">
                    <div className="icon_add"><img src={home} alt="" className="icon_size"/></div>
                    <div className="address">DR ALAADAMNA AGUERD ESSAOUIRA</div>
                </div>

                <div className="icons">
                    <div className="icon_tel"><img src={tele} alt="" className="icon_size"/></div>
                    <div className="tel">06.26.13.43.40</div>
                </div>
                <div className="icons">
                    <div className="icon_email"><a href="mailto:soulredouane@gmail.com"><img className="icon_size" src={email} alt=""/></a></div>
                    <div className="email">soulredouane@gmail.com</div>
                </div>
                <div className="icons">
                    <div className="icon_linkedin"><a href="https://www.linkedin.com/in/redouane-soul-672a43237/"><img src={linkedin}alt="" className="icon_size"/></a></div>
                    <div className="linkedin">@redouane soul</div>
                </div>
                <div className="icons">
                    <div className="icon_github"><a href="https://github.com/SOULREDOUANE"><img src={github} alt="" className="icon_size"/></a></div>
                    <div className="github">https://github.com/SOULREDOUANE</div>
                <div className="language_skills"><h3>Comp√©tances Languistiques</h3></div>
                <div className="language">Arabic</div>
                <div className="line_language"><div className="second_line_language arabic"></div></div>
                <div className="language">Francais</div>          
                <div className="line_language "><div className="second_line_language francais"></div></div>
                <div className="language">Englais</div>
                <div className="line_language">
                <div className="second_line_language english"></div></div>

                <div className="centre_interet" > <h3>Centre d'int√©ret</h3></div>
                <div className="course">Entra√ģnement de course </div>
                <div className="course">basketball</div>
            </div>
                
            </div>
            <div>
                
            </div>
        </div>
        <div className="Main"> 
            <div>
                <h2 className="Profil">Profil</h2>
                <div className="line"></div>
                <p className="about_me">El√®ve ing√©nieur polyvalente en g√©nie informatique, je suis int√©ress√© par l'intelligence artficielle.&nbsp; J'ai fait pas mal de projet en ce qui concerne cette derni√®re.</p>
            </div>

            <div>
                <h2 className="Profil">Exp√©rience Profisionnelle</h2>
                <div className="line"></div>
                
                <h3 className="technique">Comp√©tances Technique</h3>
                 
                    <div className="container_techinque">
                        <div className="skills"><ul><li>Language python</li></ul></div>
                        <div className="score"><div className="python"></div></div>
                        <div className="skills"><ul><li>Language C</li></ul></div>
                        <div className="score"><div className="c"></div></div>
                        <div className="skills"><ul><li>Language Java</li></ul></div>
                        <div className="score"><div className="java"></div></div>
                        <div className="skills"><ul><li>Language Javascript</li></ul></div>
                        <div className="score"><div className="js"></div></div>
                        <div className="skills"><ul><li>HTML </li></ul></div>
                        <div className="score"><div className="html"></div></div>
                        <div className="skills"><ul><li> CSS</li></ul></div>
                        <div className="score"><div className="css"></div></div>
                    </div>
                <h3 className="technique">Outils de Travail</h3>
                    <ul>
                        <li>Vscode</li>
                        <li>Git et Github</li>
                        <li>Linux</li>
                    </ul>
                    
            </div>
            
            <div>
                <h2 className="Profil">Formation</h2>
                <div className="line"></div>
                <h3 className="formation">Formation et Dipl√īme </h3>
                

                    <ul>
                        <li className="list_formation"><i>actuallement&nbsp;</i>:&nbsp;El√®ve ing√©nieur d'√©tat en g√©nie informatique √† l'Ecole Mohammaedia d'Ing√©nieur.</li>
                        <li className="list_formation"><i>2019-2022&nbsp;</i>: &nbsp;Classes Pr√©paratoires aux grandes √©coles d'ing√©nieurs(Option MP au Lyc√©e Moulay Abdallah).</li>
                        <li className="list_formation"><i>juin 2019&nbsp;</i>:&nbsp;Baccalaur√©at Sciences Math√©matique 'B',mention Bien.</li>
                    </ul>   
            </div>
    


        
            
        </div>
    </div>
  
    );
}
export default Cv;
import React from "react";
import {Link ,Outlet} from 'react-router-dom'

let data= {title:"redouane",age:"lie"
}

function Formulaire(){
    return(
        <div class="container0_grid">

        <div class="personal_information ">
            <form action="">
            <div class="container1_grid">
                <h3 >Informations Personnels</h3>
                <div>Photo</div>
                <div class="photo style"><input type="file" name="" id=""/></div>
                <div>Prénom</div>
                <div class="prenom style"><input id="first_name" class="style_input" type="text"  placeholder="mon_prénom" required/></div>
                <div>Nom de famille</div>
                <div class="nom style"><input id="second_name" class="style_input" type="text" placeholder="mon_name" required/></div>
                <div>Date de Naissance</div>
                <div class="age style"><input class="style_input" type="date" name="" id="date" onChange={(event)=>{data.age=event.target.value}}/></div>
                <div>Adresse e-mail</div>
                <div class="email style"><input class="style_input" type="email" name="" id="email" placeholder="exemple@gmail.com"/></div>
                <div>Titre de profil</div>
                <div class="title_profile style"> <input class="style_input" id="title" type="text" placeholder="PRENOM NOM" onChange={(event)=>{data.title=event.target.value}}/></div>
                <div>Numéro de téléphone</div>
                <div class="phone style"><input class="style_input" type="tel" placeholder="06.23.43.32.56" required /></div>
                <div>Adress</div>
                <div class=" style "> <textarea id="adress" placeholder="Ecrire ici votre adress." required class="style_input"></textarea></div>
                <div> Votre lien de Github </div>
                <div class="github style"><input class="style_input" type="text" name="" id=""/></div>
                <div>Linkedin username</div>
                <div class="linkedin style"><input class="style_input" type="text" name="" id="" placeholder="@prenom_nom"/></div>
            </div>
            </form>   
        </div>

        <div class="language_skills"> 
                <div class="container1_grid language ">
                    <h3>Compétance Languistique</h3>
                    <div class="style_language">Langue Mère</div>
                    <div><input class="style_input" type="text" name="" id="" required placeholder="francais"/></div>
                    <div ><button className="ajouter" >ajouter</button></div>
                </div>

            
            
        </div>
        <div class=""> 
            <form action="">
                <div class="container1_grid">
                    <h3>Centre d'intéret</h3>
                    <div class="style_language">Entrer votre cente d'intéret</div>
                    <div><input class="style_input" type="text" name="" id="" placeholder="sport"/></div>
                    <div ><button className="ajouter">ajouter</button></div>

                    
                
                </div>
            </form>
            
        </div>

        <div class=""> 
            <form action="">
                <div class="container1_grid">
                    <h3>Profil</h3>
                    <div class="style_language">donnée quelque Informations sur vous</div>
                    <div><textarea id="objectif_profitionnel" rows="4" placeholder="ici,tu peut decrire ce que vous distinguez des autres, votre interet, objectif information supplimentaire ... etc"></textarea></div>
 
                </div>
            </form>
            
        </div>
        <div class=""> 
            <form action="">
            <div class="container1_grid">
                <h3>Expérience profisionnelle</h3>
                <h4>Compétance technique</h4>
                <div class="style_language"></div>
                <div><input class="style_input" type="text" name="" id="" placeholder="Language Python"/></div>
                <div ><button className="ajouter">ajouter</button></div>
                
                <h4>Outils de travail</h4>
                <div class="style_language"></div>
                <div><input class="style_input" type="text" name="" id="" placeholder="Vscode"/></div>
                <div ><button className="ajouter">ajouter</button></div>
                
            </div>
        </form>
        </div>

        <div class=""> 
            <form action="">
                <div class="container1_grid">
                    <h3>Formation</h3>
                    <div class="style_language">Entrer votre cente d'intéret</div>
                    <div><input class="style_input" type="text" name="" id="" placeholder="juin2019: Baccalauréat Sciences Mathématique 'B',mention Bien."/></div>
                    <div ><button className="ajouter">ajouter</button></div>

                    
                
                </div>
            </form>
            
        </div>

    <a href="#"><button class="telecharger" id="boutton">telecharger</button></a>
    <Outlet context={data}></Outlet>
    <Link to={{
    pathname: "/cv",}}>continue</Link>
    </div>
   
    )
}
export default Formulaire;
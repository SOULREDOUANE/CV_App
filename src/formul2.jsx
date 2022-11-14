import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { data } from './formul1'




function Formul2() {
    const navigate=useNavigate()

    const check=(e)=>{
        
  
  if (include_special(data.titre)==0) {
      document.getElementById("erreur_tit").innerHTML=" titre ne contient pas des caractères spéciaux"
     
  }
  e.preventDefault()
    }

    function include_special(table){
        // special characters
        let special_characters="1234567890-+=/*()!@#$%^&~`[]{}'?,.<>;:_";
        let result=1;
        for (let i= 0; i < table.length; i++) {
            if (special_characters.includes(table[i],0)) {
                result=0;    
            }
        }
        return result;
      }
      





    return (
    <div>
        <div className='nav_container'>
            <div><Link  to="/">Home</Link ></div>
            <div><Link to="/formul1">Crée mon CV</Link></div>
            <div><Link>Sign up</Link></div>
        </div>
    <div className="container_formul"> 
    <div>
    <h3 className='h3'> Profile</h3>
    <form action="">
    <div className='grid_container'>
        <div>Titre de votre CV</div>
        <div className="erreur" id="erreur_tit"></div>
    </div>
    <input type="text" className="input_style" onChange={event=>{data.titre=event.target.value}}/>

    <div>A propos de vous</div>
    <input type="text" className="input_style"  onChange={event=>{data.about_me=event.target.value}}/>

    <div>Lien de votre github</div>
    <input type="text" className="input_style" onChange={event=>{data.github=event.target.value}}  />
    
    <div>Lien de votre Linkedin</div>
    <input type="text" className="input_style" onChange={event=>{data.linkedin=event.target.value}}  />
    <div ></div>
    <button className='buton_formul_retour' onClick={()=>{navigate("/formul1")}} >Retour</button>


    <button type='submit' to="formul3" className='buton_formul_next' onClick={check} >save</button>

    </form>
    
        <button id="suivant" onClick={()=>{navigate("/formul3")}} >Suivant</button>
    </div>
    </div>
    </div>
  )
}

export default Formul2
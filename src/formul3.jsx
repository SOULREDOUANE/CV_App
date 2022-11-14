import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { data } from './formul1'

const lis=["element_1","element_2","element_3"]
function Formul3() {

    const add_child=()=>{
        // const parent=document.getElementById('competance_parent')
        // const child = document.createElement("input");
        // const textnode = document.createTextNode("Water");
        // node.appendChild(textnode);
        
        // parent.append(child);
        // e.prevent.Default()

        }


const navigate=useNavigate();
  return (
    <div>

        
        <div className='nav_container'>
            <div><Link  to="/">Home</Link ></div>
            <div><Link to="/formul1">Crée mon CV</Link></div>
            <div><Link>Sign up</Link></div>
        </div>




    <div className='container_formul'> 

    <h3 className='h3'>Compétance Technique</h3>
    <form action="">
    <div>
        
        

        <form action="">
        <div>Saisir Votre Compétance Technique</div>
        <div id='competance_parent'>
        <input type="text" className="input_style" onChange={event=>{data.competance_techn=event.target.value}}/>
        </div>
        <button className='add' onClick={add_child}>Ajouter</button>
        </form>

    </div>


    <h3 className='h3'>Compétance linguistique</h3>
    <div>
    <form action="">
        <div>Saisir Votre competance Linguistique</div>
        <div id='competance_parent'>
        <input type="text" className="input_style" onChange={event=>{data.competance_lingui=event.target.value}} />
        </div>
        <button className='add'>Ajouter</button>
    </form>
    </div>



    <div>
    <h3 className='h3'>Formation et Diplome</h3>
    <form action="">
        <div>Saisir Votre Formation et Diplome</div>
        <div id='competance_parent'>
        <input type="text" className="input_style" onChange={event=>{data.formation=event.target.value}} />
        </div>
        <button className='add'>Ajouter</button>
    </form>
    </div>




        <div id='space'></div>
    <button className='buton_formul_retour' onClick={()=>{navigate("/formul2")}}>Retour</button>


    <button type='submit' to="formul2" className='buton_formul_next'  
    >save</button>

    </form>
    <div></div>
    <button id="suivant" onClick={()=>{navigate("/cv")}} >Suivant</button>
    </div>
    </div>
  )



    
}

export default Formul3


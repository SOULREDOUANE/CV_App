
import {Link,useNavigate} from 'react-router-dom'

export let data={nom:"", prenom:"",date_naiss:"",numero_tel:"",email:"",adress:"" ,titre:"",about_me:"",github:"",linkedin:"" ,competance_lingui:"",competance_techn:"",formation:""}


function Formul1() {
  const  navigate=useNavigate();
  let x=1
  const afterClick=(e,x)=> {
    // let valeur=document.getElementById('nom');
     x=0
    // nom de famille
    if (data.nom.toUpperCase()!==data.nom) {
      document.getElementById('erreur_no').innerHTML="Nom ne respecte pas la forme"
      x=0;
      ;
    }
    // nom personel
    if (data.prenom[0].toUpperCase!==data.prenom[0]) {
      document.getElementById('prenom_er').innerHTML=" prénom ne respecte pas la form"
      x=0;
    }
    // la date de naissance
      let date= new Date();
      let date_input= new Date(data.date_naiss) ;
      let reference_year=18*24*365*3600*1000;
      console.log(date.getTime()-date_input.getTime());
      if (date.getTime()-date_input
      <reference_year) {
          document.getElementById('erreur_nais').innerHTML="age mineur"
      }

    // the adress
    if (data.adress.length>300 || include_special(data.adress)===0) {
        document.getElementById('erreur_ad').innerHTML="n'est pas correct"
    }
    // le numero de telephone
    if (include_special_tel(data.numero_tel)===0) {
    document.getElementById('erreur_te').innerHTML="ce n'est pas un numéro"
    }



    // if (x===0) {
    //   <Navigate to="formul2"/>
    //   // navigate("/formul2")
    // }
    e.preventDefault()
  }

  function include_special_tel(table){
    // special characters
    let special_character="abcdefghijklmnopqrstuvxwyz=/*()!@#$%^&~`[]{}'?,.<>;:_";
    let result=1;
    for (let i= 0; i < table.length; i++) {
        if (special_character.includes(table[i],0)) {
            result=0;
        }    
    }
    return result;
}
function include_special(table){
  // special characters
  let special_characters="-+=/*()!@#$%^&~`[]{}'?,.<>;:_";
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
      {/* nav */}
      <div className='nav_container'>
            <div><Link  to="/">Home</Link ></div>
            <div><Link to="/formul1">Crée mon CV</Link></div>
            <div><Link>Sign up</Link></div>
        </div>

      <div className="container_formul">
        <div className='form1'>
          <h3 className='h3'>Information Personnelles</h3>
            <form action="" >

            <div className="grid_container">
            <div >Nom </div>
            <div id="erreur_no" className="erreur"></div>
            </div>
            <div><input type="text" className='input_style' id='nom' placeholder='Nom de famille' onChange={event=>{data.nom=event.target.value}}  required /></div>
           
            <div className="grid_container">
            <div>Prénom</div>
            <div id="prenom_er" className="erreur"></div>
            </div>
            {/* <div id='prenom_erreur' className='erreur'>{erreur.prenom}</div> */}

            
            <div><input type="text"  className='input_style' id='prenom' placeholder='Prénom' onChange={event=>{data.prenom=event.target.value;
           
            }} required/></div>

            <div className="grid_container">
              <div>Date de naissance</div>
              <div id="erreur_nais" className=" erreur"></div>
            </div>
            <div><input type="date" className='input_style'id='date_naissance' onChange={event=>{data.date_naiss=event.target.value}} required/></div>

            <div className="grid_container">
              <div>Adress</div>
              <div id="erreur_ad" className="erreur"></div>
            </div>
            <div><input type="text" className='input_style'id='adress' onChange={event=>{data.adress=event.target.value}} required/></div>

            <div className="grid_container">
              <div>Numéro de téléphone</div>
              <div id="erreur_te" className="erreur"></div>
            </div>
            <div><input type="text" id="numero_tele"  className='input_style'placeholder='06.43.34.23.67' onChange={event=>{data.numero_tel=event.target.value}} required /></div>


            <div>Email</div>
            <div><input type="email" className='input_style' placeholder='exemple@gamil.com' onChange={event=>{data.email=event.target.value}} required/></div>


            <button className='buton_formul_retour' >Retour</button>


            <button type='submit' to="formul2" className='buton_formul_next' onClick={afterClick} 
             >save</button>


            {/* <Link to='/formul2'>continue</Link> */}
            </form>
            <button id="suivant" onClick={()=>{
              if (x==1) {
                navigate("/formul2")
              }
              }} >Suivant</button>
            </div>
      </div>
      </div>
  )

}

// onClick={()=>{
//   if (!verification(erreur)) {
//     alert(erreur);
//   } else {
//     navigate("/formul2")
//   }
  




// const Verifier=()=>{
    
//     return navigate("formul2");

// }

// function Verifier(){
// }
export default Formul1;










// function verification(erreur){
//       let r=true;
//   if (data.nom.toUpperCase()!=data.nom){ 
//     r=false
//     erreur=erreur+"Il faut que votre nom soit ecrit en majuscule.\n"}
//   if (data.prenom[0].toUpperCase()!==data.prenom){
//     r=false
//     erreur= erreur+"Il faut que la premier lettre de votre prenom soit ecrit en majuscule.\n";
//   }
//   return r;

// }


// let prenom1=document.getElementById("prenom");
// prenom1.addEventListener('input',verify())

// function verify(e){
//   if (data.prenom[0].toUpperCase()!==data.prenom) {
//     prenom1.style.border = "2px solid red";
//     document.getElementsByClassName('erreur_prenom').innerHTML="votre nom n'est pas correct";
    
//     form.addEventListener('submit',(e)=>{
//       e.preventDefault()
//     })
//   }
// }




// function first_next(){
// // la chaine de caractere qui va contient tous les erreur
//   let erreur="";
//   // prenom
//   // if (data.nom.toUpperCase()!==data.nom) {

//   //     erreur= erreur+"Il faut que votre nom soit ecrit en majuscule.\n";
//   // }
//   // prenom
//   // if (data.prenom[0].toUpperCase()!=data.prenom[0]) {
//   //     erreur= erreur+"Il faut que la premier lettre de votre prenom soit ecrit en majuscule.\n";
//   // }
//   // la date de naissance
//   let date= new Date();
//   let date_input= new Date(data.date_naiss) ;
//   let reference_year=18*24*365*3600*1000;
//   console.log(date.getTime()-date_input.getTime());
//   if (date.getTime()-date_input
//   <reference_year) {
//       erreur=erreur+"Vous n'ete pas agé de 20 ans pour remplir cette formule.\n";
//   }

//   // the adress
//   // if (data.adress.length>300 || include_special(data.adress)===0) {
//   //     erreur=erreur+"Il faut que l'adres ne contient pas des charactères spéciaux et ne dépasse pas 300 charactères.\n";
//   // }

//   // titre
//   // let titre=document.getElementById("title").value;
//   // if (include_special(titre)==0) {
//   //     erreur=erreur+"Il fout que le titre ne contient pas des charactères spéciaux.\n";
//   // }

//   // objectif profitionnel
//   // let objectif1=document.getElementById("objectif_profitionnel").value;
//   // if (include_number_special(objectif1)==0) {
//   //     erreur=erreur+"Il faut que votre profile ne contient pas ni de chiffres ni de charactères spéciaux.\n";
//   // }

//   // localStorage.setItem("titre",titre);
//   // localStorage.setItem("nom",second_name1);
//   alert(erreur);
  
// }

// cette fonction verifier si une chaine de caractere contient des cracteres special
// function include_special(table){
//   // special characters
//   let special_characters="-+=/*()!@#$%^&~`[]{}'?,.<>;:_";
//   let result=1;
//   for (let i= 0; i < table.length; i++) {
//       if (special_characters.includes(table[i],0)) {
//           result=0;
          
//       }
      
//   }
//   return result;
// }

// function include_number_special(table){
//   // special characters
//   let special_characters="1234567890-+=/*()!@#$%^&~`[]{}'?,.<>;:_";
//   let result=1;
//   for (let i= 0; i < table.length; i++) {
//       if (special_characters.includes(table[i],0)) {
//           result=0;
          
//       }
      
//   }
//   return result;
// }




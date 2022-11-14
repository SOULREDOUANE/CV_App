import React from 'react';
import {  Routes, Route, BrowserRouter, } from "react-router-dom";

import Cv from './cv';
import Formul1 from './formul1';
import Formul2 from './formul2';
import Formul3 from './formul3';
import Home from './home';

function App(){
  return(
    <div >
      <BrowserRouter>
        <Routes>    
          <Route path='/'element={<Home/>} />    
          <Route path='/formul1'element={<Formul1/>}/>
          <Route path='formul2' element={<Formul2/>}/>
          <Route path='/formul3' element={<Formul3/>}/>
          <Route path='/cv' element={<Cv/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    

  )
}
export default App;
/* <Todos/>  */

    //  <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Picture/>
    //     </Route>
    //     <Route path="/input_test">
    //       <Myapp/>
    //     </Route>
    //   </Switch>
    //  </Router>




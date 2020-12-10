import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"; //destructuring the import so has BrowserRouter as Router and Route is different
import Home from "./components/Home"
import About from "./components/About"
import Pricing from "./components/Pricing"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Shop from "./components/Shop"

const App = ()=> {
  
  return (
   <Router>
     <>
      <NavBar />  {/*this shows on all the router */}
     {/* All done inside the browser, not a server request */}
      <Route exact path="/" component={Home}/>  
      <Route path="/about" component={About}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/shop" component={Shop}/>

     </>
   </Router>
  )

}

export default App;

//download react router library npm install react-router-dom on terminal
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"; //destructuring the import so has BrowserRouter as Router and Route is different
import Home from "./components/Home"
import About from "./components/About"
import Pricing from "./components/Pricing"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Shop from "./components/Shop"

const App = ()=> {

  const [pricing, setPricing] = useState([
    {level: "Hobby", cost:0},
    {level: "Start Up", cost:10},
    {level: "Small business", cost:100},
    {level: "Enterprice", cost:1000}
  ]);
  
  return (
   <Router>
     <>
      <NavBar />  {/*this shows on all the router */}
     {/* All done inside the browser, not a server request */}
      <Route exact path="/" component={Home}/>  
      <Route path="/about" component={About}/>
      <Route path="/pricing" render={()=><Pricing prices={pricing}/>}/>
      {/* render takes in a callback with the react component we want to return, then we pass in a prices prop with the value of pricing */}
      {/* pricing takes pricing data as props so dont need the compoennt argument and returns the full Pricing component*/}
      <Route path="/contact" component={Contact}/>
      <Route path="/shop" component={Shop}/>

     </>
   </Router>
  )

}

export default App;

//download react router library npm install react-router-dom on terminal
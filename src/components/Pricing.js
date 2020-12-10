import React, {useState} from "react";

const Pricing = () => {

  const [pricing, setPricing] = useState([
    {level: "Hobby", cost:0},
    {level: "Start Up", cost:10},
    {level: "Small business", cost:100},
    {level: "Enterprice", cost:1000}
  ]);

  return (
    <div>
      <h4>Pricing</h4>
      <p>£££££££</p>
    </div>
  )

};

export default Pricing;

import React from "react";

const Pricing = ({prices}) => {

  const getPrices = prices.map( (price, index) => {
    return <li key={index}>{price.level} - £{price.cost}</li>
  })

  return (
    <div>
      <h4>Pricing</h4>
      <ul>
        {getPrices}
      </ul>
    </div>
  )

};

export default Pricing;

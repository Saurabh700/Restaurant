import React from "react";
// ya to main images ko locally import kar sakta hu by using import
// import Offer1 from "../assets/offer1.jpeg";
// import Offer2 from "../assets/offer2.jpeg";
// import Offer3 from "../assets/offer3.jpeg";
// import Offer4 from "../assets/offer4.jpeg";
// but if i want to use images by using array of url --> data>offers.json then use props and map

// while using map dont forget to use parenthesis or using return statement
const Offers = (props) => {
  return (
    <section className="offers">
      <div className="container">
        {/* yaha par sirf jaldi jaldi ke liye index ko key bana diya but it is a bad practice */}
        {props.offers.map((offer, index) => (
          <img key={index} className="offer" alt="foodImg" src={offer} />
        ))}
        {/* <img className="offer" src={Offer1} />
        <img className="offer" src={Offer2} />
        <img className="offer" src={Offer3} />
        <img className="offer" src={Offer4} /> */}
      </div>
    </section>
  );
};

export default Offers;

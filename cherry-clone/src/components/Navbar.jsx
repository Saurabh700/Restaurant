import React from "react";

const navbarOptions = [
  {
    key: 1,
    iconName: "person_outline",
    label: "Sign In",
  },
  {
    key: 2,
    iconName: "shopping_bag",
    label: "Cart",
  },
  {
    key: 3,
    iconName: "support",
    label: "Help",
  },
  {
    key: 4,
    iconName: "search",
    label: "search",
  },
];

const Navbar = (props) => {
  return (
    //   just copy paste navbar section (line 11 to 36) inside return
    <section className="navbar">
      <div className="container">
        <img
          className="logo"
          alt="logo"
          src="https://img.icons8.com/emoji/48/000000/cherries.png"
        />
        <div className="location">
          <span className="city"> {props.city}</span>
          <span className="state">
            {props.state}, {props.country}
          </span>
        </div>
        <div className="navbar-options">
          {navbarOptions.map((navbarOptions) => (
            <div key={navbarOptions.key} className="navbar-option">
              <span className="material-icons"> {navbarOptions.iconName} </span>{" "}
              {navbarOptions.label}
            </div>
          ))}

          {/* We passed the below info using map */}
          {/* <div className="navbar-option">
            <span className="material-icons">shopping_bag</span> Cart
          </div>
          <div className="navbar-option">
            <span className="material-icons">support</span> Help
          </div>
          <div className="navbar-option">
            <span className="material-icons">search</span> Search
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Navbar;

import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";
import userInfo from "./data/userInfo.json";
import offers from "./data/offers.json";
import restaurants from "./data/restaurants.json";
import { useState } from "react";

// reason of using this const filters is explained in lecture after 2h 3min
const filters = {
  1: "Cost High to Lost",
  2: "Cost Lost to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance",
};

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restaurants);

  const updateFilter = (newFilter) => {
    // console.log(newFilter);
    switch (newFilter) {
      case "1": {
        setFilterBy(1);
        data.sort((a, b) => b.costForTwo - a.costForTwo);
        setData([...data]);
        break;
      }
      case "2": {
        setFilterBy(2);
        data.sort((a, b) => a.costForTwo - b.costForTwo);
        setData([...data]);
        break;
      }
      default: {
        setData(restaurants);
        break;
      }
    }
  };
  return (
    <div>
      {/* this is very imp to remember that where we have to use spread operator and where we have to use attributes and value pair */}
      <Navbar {...userInfo.location} />
      <Offers offers={offers} />
      <section className="near-you">
        <Filters
          filters={filters}
          currentFilteredBy={filterBy}
          updateFilter={updateFilter}
        />
        <Restaurants restaurants={data} />
      </section>
      {/* here userInfo is a big object in which location is another obj --> thats why we have to spread userInfo to get location .. but offers is already a small obj thats why we can directly access key and values inside offers thats why we dont need to spread it */}
    </div>
  );
}

export default App;

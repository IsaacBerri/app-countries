import React, { useState } from "react";
import { useGetCountry } from "../hooks/useGetCountry";
import CountryCard from "../components/CountryCard";

const ContainerCountries = () => {
  const { country } = useGetCountry();
  const [filter, setFilter] = useState("");

  return (
    <section className="sectionCountries">
      <h3 id="introduction">
        Start exploring and discover what the world has to show you, look for
        your <span>next destination.</span>
      </h3>
      <div className="containerSearch">
        <input
          type="text"
          placeholder="search country"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button>Filter</button>
      </div>
      <section className="containerCountries">
        {country.map((country) => {
          if (country.name.toLowerCase().startsWith(filter.toLowerCase())) {
            return <CountryCard key={country.code} data={country} />;
          }else {
            return null
          }
        })}
      </section>
    </section>
  );
};

export default ContainerCountries;

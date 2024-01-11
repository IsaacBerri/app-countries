import { useState } from "react";
import { useGetCountry } from "../hooks/useGetCountry";
import "../style/App.css";

function App() {
  const { country, setCode } = useGetCountry();

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setCode(inputValue.toUpperCase());
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>Search country</h1>
      <input
        id="searchCountry"
        type="text"
        onBlur={handleChange}
        maxLength={2}
      />
      <button onClick={() => handleClick()}>Get Country</button>
      {country == null ? (
        <p>No country found</p>
      ) : (
        <article>
          <ul id="dataCountry">
            <li>Code: {country.code}</li>
            <li>Name: {country.name}</li>
            <li>Capital: {country.capital}</li>
            <li>Continent: {country.continent && country.continent.name}</li>
          </ul>
        </article>
      )}
    </>
  );
}

export default App;

// import { useState } from 'react';

// // Definir el hook personalizado
// function useContadorInicial(initialValue) {
//   const [contador, setContador] = useState(initialValue);

//   const incrementar = () => {
//     setContador(contador + 1);
//   };

//   const decrementar = () => {
//     if (contador > 0) {
//       setContador(contador - 1);
//     }else{
//       console.log("El valor es 0 no puede bajar mas");
//     }
//   };


//   return {
//     contador,
//     incrementar,
//     decrementar
//   };
// }

// // Uso del hook en un componente
// function MiComponente() {
//   // Utilizar el hook personalizado
//   const { contador, incrementar, decrementar } = useContadorInicial(0);

//   return (
//     <div>
//       <p>Contador: {contador}</p>
//       <button onClick={incrementar}>Incrementar</button>
//       <button onClick={decrementar}>Decrementar</button>
//     </div>
//   );
// }

// export default MiComponente;
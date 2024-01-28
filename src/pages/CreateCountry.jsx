import ImputFileCreate from "../components/ImputFileCreate"
import "../style/CreateCountry.css"
import DecorativeSection from "../components/DecorativeSection"
import HeaderCreateCountry from "../components/HeaderCreateCountry"


const CreateCountry = () => {
  return (
    <>
      <HeaderCreateCountry/>
      <DecorativeSection/>
      <ImputFileCreate/>
   </>
  )
}

export default CreateCountry



const ImputFileCreate = () => {
  return (
   
    <section className="sectionInput">
       <div className="blackBar"></div>
      <h2>Imput Fields</h2>
      <p>
        Bring your own world to life: Design, Build and Register your Unique
        Country. Your Vision, Our Commitment: Explore Creating your Own Reality
        in Our Exclusive Database!
      </p>
      <section className="containerInput">
        <input type="text" placeholder="Code" />
        <input type="text" placeholder="Name" disabled />
        <input type="text" placeholder="Capital" disabled/>
        <input type="text" placeholder="Continet" disabled/>
        <input type="text" placeholder="Currency" disabled/>
        
      </section>
      <div className="buttonCreate">
        <button>Clear Fields</button>
        <button>Add Country</button>
      </div>
    </section>
  );
};

export default ImputFileCreate;

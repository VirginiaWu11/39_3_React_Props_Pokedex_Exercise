import "./Pokecard.css";

const Pokecard = ({ name, img, type, base_experience }) => {
  return (
    <div className="Pokecard">
      <h2 className="Pokecard-title">{name}</h2>
      <img src={img} alt="pokemon" />
      <p>{type}</p>
      <p>{base_experience}</p>
    </div>
  );
};

export default Pokecard;

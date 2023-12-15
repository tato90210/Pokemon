
const Data = () => {
  return (
    <div>
      <div className="text-center">
        <h1>POKEMON</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="image-container">
              <img
                src="../../imagen/1-PhotoRoom.png-PhotoRoom.png"
                alt="Descripción de la imagen"
                style={{ maxWidth: '150%', height: '15rem', margin: 'auto' }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <p>
              Los Pokémon, son criaturas de todo tipo de formas y tamaños que viven
              bien en un medio salvaje o junto a los seres humanos. La mayoría de
              los Pokémon solo hablan para decir sus nombres. En la actualidad,
              hay más de 700 criaturas que habitan el universo Pokémon.
              <br />
              Los dueños de los Pokémon (denominados “Entrenadores”) los crían y
              los cuidan. Durante sus aventuras, los Pokémon crecen y adquieren
              más experiencia, e incluso, en ocasiones, evolucionan para
              convertirse en Pokémon más fuertes.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

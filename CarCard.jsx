function CarCard({ name, image, price, year, fuel }) {
  return (
    <div className="car-card">

      <img src={image} alt={name} />

      <div className="car-info">

        <h2>{name}</h2>

        <div className="car-details">
          <span>{year}</span>
          <span>{fuel}</span>
        </div>

        <h3>{price}</h3>

        <button>
          View Details
        </button>

      </div>

    </div>
  );
}

export default CarCard;
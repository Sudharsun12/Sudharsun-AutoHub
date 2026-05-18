import CarCard from "../components/CarCard";

function Cars() {

  const cars = [

    {
      id:1,
      name:"BMW M4 Competition",
      image:"https://images.unsplash.com/photo-1555215695-3004980ad54e",
      price:"₹ 45 Lakhs",
      year:"2022",
      fuel:"Petrol",
    },

    {
      id:2,
      name:"Audi R8 Spyder",
      image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      price:"₹ 72 Lakhs",
      year:"2021",
      fuel:"Petrol",
    },

    {
      id:3,
      name:"Mercedes AMG GT",
      image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      price:"₹ 68 Lakhs",
      year:"2023",
      fuel:"Diesel",
    },

    {
      id:4,
      name:"Range Rover Velar",
      image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
      price:"₹ 55 Lakhs",
      year:"2020",
      fuel:"Diesel",
    },

    {
      id:5,
      name:"Toyota Fortuner Legender",
      image:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
      price:"₹ 38 Lakhs",
      year:"2022",
      fuel:"Diesel",
    },

    {
      id:6,
      name:"Hyundai Verna Turbo",
      image:"https://images.unsplash.com/photo-1502877338535-766e1452684a",
      price:"₹ 14 Lakhs",
      year:"2021",
      fuel:"Petrol",
    },

    {
      id:7,
      name:"Mahindra Scorpio N",
      image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      price:"₹ 19 Lakhs",
      year:"2023",
      fuel:"Diesel",
    },

    {
      id:8,
      name:"Kia Seltos X-Line",
      image:"https://images.unsplash.com/photo-1489824904134-891ab64532f1",
      price:"₹ 21 Lakhs",
      year:"2022",
      fuel:"Petrol",
    },

    {
      id:9,
      name:"Volkswagen Virtus GT",
      image:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa",
      price:"₹ 16 Lakhs",
      year:"2023",
      fuel:"Petrol",
    },

    {
      id:10,
      name:"Skoda Slavia",
      image:"https://images.unsplash.com/photo-1493238792000-8113da705763",
      price:"₹ 15 Lakhs",
      year:"2022",
      fuel:"Petrol",
    },

    {
      id:11,
      name:"Porsche 911 Carrera",
      image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
      price:"₹ 1.2 Crore",
      year:"2021",
      fuel:"Petrol",
    },

    {
      id:12,
      name:"Lamborghini Huracan",
      image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
      price:"₹ 3.5 Crore",
      year:"2020",
      fuel:"Petrol",
    }

  ];

  return (
    <section className="page">

      <p className="section-tag">
        FEATURED COLLECTION
      </p>

      <h1 className="page-title">
        Explore Premium Vehicles
      </h1>

      <p
        style={{
          marginBottom:"40px",
          color:"#555",
          lineHeight:"1.8"
        }}
      >
        Discover a wide range of luxury, sports,
        SUV, and budget-friendly vehicles carefully
        inspected and verified by Sudharsun AutoHub.
        Scroll through our premium collection and
        choose your dream car today.
      </p>

      <div className="cars-grid">

        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            image={car.image}
            price={car.price}
            year={car.year}
            fuel={car.fuel}
          />
        ))}

      </div>

    </section>
  );
}

export default Cars;
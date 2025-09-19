// EquipmentSection.jsx
import React from "react";

const equipmentData = [
  {
    name: "Safety Vest",
    image: "https://i.pinimg.com/736x/38/46/4e/38464e8c0233dd3bb6036a65237131bc.jpg",
  },
  {
    name: "Safety Helmet",
    image: "https://i.pinimg.com/1200x/1a/67/48/1a67486ca93f3aa47ae19c826ce88cda.jpg",
  },
  {
    name: "Crane",
    image: "https://i.pinimg.com/736x/97/fa/df/97fadfe4535bf41bc21948ed5f8d9d09.jpg",
  },
  {
    name: "Vernier",
    image: "https://i.pinimg.com/1200x/7d/39/99/7d39999b9a4bd134949821586cf66a4e.jpg",
  },
  {
    name: "Safety Vest",
    image: "https://i.pinimg.com/736x/38/46/4e/38464e8c0233dd3bb6036a65237131bc.jpg",
  },
  {
    name: "Safety Helmet",
    image: "https://i.pinimg.com/1200x/1a/67/48/1a67486ca93f3aa47ae19c826ce88cda.jpg",
  },
  {
    name: "Crane",
    image: "https://i.pinimg.com/736x/97/fa/df/97fadfe4535bf41bc21948ed5f8d9d09.jpg",
  },
  {
    name: "Vernier",
    image: "https://i.pinimg.com/1200x/7d/39/99/7d39999b9a4bd134949821586cf66a4e.jpg",
  },
];

const EquipmentCard = ({ equipment }) => {
  return (
    <div className="bg-[#10B981] rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden relative">
      <div className="relative overflow-hidden rounded-t-2xl h-64 sm:h-72 md:h-80 lg:h-96">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-3 sm:p-1 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1">
          {equipment.name}
        </h3>
      </div>
    </div>
  );
};

const EquipmentSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-14 text-gray-900">
          Our Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {equipmentData.map((eq, index) => (
            <EquipmentCard key={index} equipment={eq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;

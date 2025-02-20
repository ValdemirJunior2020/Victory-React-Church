import React from "react";

interface EventProps {
  title: string;
  date: string;
  description: string;
}

const EventCard: React.FC<EventProps> = ({ title, date, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{date}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default EventCard;

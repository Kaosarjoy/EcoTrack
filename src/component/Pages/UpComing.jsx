import React, { useEffect, useState } from 'react';
import { IoMdPeople } from 'react-icons/io';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4500/events?limit=5') 
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <div key={event._id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-500 text-sm mb-1">
              📅 {new Date(event.date).toLocaleDateString()} | 📍 {event.location || 'Online'}
            </p>
            <div className='flex justify-between items-center  text-sm mb-1'>
              <p className='flex justify-between items-center gap-2' > <IoMdPeople />{event.maxParticipants}  maxParticipants</p>
              <p className='flex justify-between items-center gap-2'> <IoMdPeople />{event.currentParticipants}  currentParticipants</p>
            </div>
            <p className="text-gray-700 mt-2">{event.description.slice(0, 100)}{event.description.length > 100 ? '...' : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

import React, { useState } from 'react';
import calendar from '../assets/calendar.svg';
import hourglass from '../assets/hourglass.svg';
import team from '../assets/team.svg';

const EventsPage = ({ onViewMore, onCreateEvent }) => {
  const [activeFilter, setActiveFilter] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample events data - you can modify these manually
  const events = [
    {
      id: 1,
      name: 'Tech4Good',
      description:
        'IEEE Tech4Good is a global initiative that inspires students and professionals to build technology-driven solutions that tackle real-world social challenges. From healthcare to sustainability, education to inclusivity, the focus is on using innovation for positive impact.',
      startDate: '01 Aug 2025',
      endDate: '30 Sep 2025',
      teamsRegistered: 12,
      time: '10:00 AM',
      location: 'Main Auditorium',
      status: 'active',
      applicants: 45,
    },
    {
      id: 2,
      name: 'Innovation Challenge Hackathon',
      description:
        '24-hour coding challenge focusing on sustainable technology solutions.',
      startDate: '15 Oct 2025',
      endDate: '17 Oct 2025',
      teamsRegistered: 8,
      time: '9:00 AM',
      location: 'Computer Lab 101',
      status: 'active',
      applicants: 32,
    },
    {
      id: 3,
      name: 'IEEE Leadership Summit',
      description:
        'Networking event for IEEE chapter leaders and industry professionals.',
      startDate: '05 Jan 2025',
      endDate: '06 Jan 2025',
      teamsRegistered: 5,
      time: '2:00 PM',
      location: 'Conference Room A',
      status: 'inactive',
      applicants: 18,
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesStatus = event.status === activeFilter;
    const matchesSearch =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleViewMore = (eventId) => {
    onViewMore(eventId);
  };

  const handleCreateEvent = () => {
    onCreateEvent();
  };

  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-primary">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Events Manager</h1>
        <button
          onClick={handleCreateEvent}
          className="w-full sm:w-auto bg-transparent hover:bg-[var(--color-primary)] text-[var(--color-hovered)] px-2 sm:px-4 py-2 rounded-md font-bold transition-colors border-1"
        >
          Create Event +
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-row gap-4 mb-6">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search events"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveFilter('active')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === 'active'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveFilter('inactive')}
            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === 'inactive'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Events Grid (single column like the design) */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="p-4 sm:p-6">
              <div className="flex gap-4 sm:gap-6">
                {/* Logo placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-xs">
                    Logo
                  </div>
                </div>

                {/* Right content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {event.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          event.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      />
                      <span
                        className={
                          event.status === 'active' ? 'text-green-700' : 'text-red-700'
                        }
                      >
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <p className="mt-1 text-gray-600 text-sm leading-6 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-14 gap-y-4 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                      <img src={calendar} alt="Calendar" className="w-4 h-4 text-blue-500" />
                      <span>
                        <span className="font-medium text-gray-900">Start:</span> {event.startDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <img src={hourglass} alt="Hourglass" className="w-4 h-4 text-orange-500" />
                      <span>
                        <span className="font-medium text-gray-900">End:</span> {event.endDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <img src={team} alt="Team" className="w-4 h-4 text-purple-500" />
                      <span>
                        <span className="font-medium text-gray-900">Teams:</span> {event.teamsRegistered} registered
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-end sm:ml-30 md:ml-60 lg:ml-90">
                      <button
                        onClick={() => handleViewMore(event.id)}
                        className="text-hovered hover:text-blue-700 font-bold"
                      >
                        View more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-hovered border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hovered hover:text-primary w-full sm:w-auto"
        >
          Previous
        </button>
        
        <div className="flex space-x-1">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-hovered text-primary'
                  : 'text-hovered border border-gray-300 hover:bg-hovered hover:text-primary'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
          disabled={currentPage === 3}
          className="px-4 py-2 text-hovered border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hovered hover:text-primary w-xs sm:w-auto"
        >
          Next
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs sm:text-sm border-t border-gray-200 pt-4 sm:pt-6">
        Created by Spark Invotech and Sairam Incubator Techno Centre
      </div>
    </div>
  );
};

export default EventsPage;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EventsPage from './EventsPage';
import EventsMorePage from './EventsMorePage';
import EventCreationForm from './EventCreationForm';
import MentorList from './MentorList';
import ProjectList from './ProjectList';
import LoginPage from './LoginPage';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('events');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentEventId, setCurrentEventId] = useState(null);

  const handleLogin = (credentials) => {
    // This will be implemented later for actual authentication
    console.log('Login credentials:', credentials);
    // For now, just authenticate with any credentials
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActivePage('events');
    setCurrentEventId(null);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setCurrentEventId(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleViewMore = (eventId) => {
    setCurrentEventId(eventId);
    setActivePage('eventsMore');
  };

  const handleBackToEvents = () => {
    setCurrentEventId(null);
    setActivePage('events');
  };

  const handleCreateEvent = () => {
    setActivePage('eventCreation');
  };

  const handleEventSubmit = (formData) => {
    // This will be implemented later to handle event creation
    console.log('Event creation data:', formData);
    alert('Event created successfully!');
    setActivePage('events');
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} onBack={() => console.log('Back button clicked')} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case 'events':
        return <EventsPage onViewMore={handleViewMore} onCreateEvent={handleCreateEvent} />;
      case 'eventsMore':
        return <EventsMorePage eventId={currentEventId} onBack={handleBackToEvents} />;
      case 'eventCreation':
        return <EventCreationForm onBack={handleBackToEvents} onSubmit={handleEventSubmit} />;
      case 'mentors':
        return <MentorList />;
      case 'projects':
        return <ProjectList />;
      default:
        return <EventsPage onViewMore={handleViewMore} onCreateEvent={handleCreateEvent} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 w-full">
      <Sidebar
        activePage={activePage}
        onPageChange={handlePageChange}
        onLogout={handleLogout}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />
      
      <main className="flex-1 overflow-y-auto relative">
        {/* Mobile header with menu button */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-gray-900 p-2 rounded-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            {activePage === 'events' && 'Events'}
            {activePage === 'eventsMore' && 'Student Applications'}
            {activePage === 'eventCreation' && 'Event Creation'}
            {activePage === 'mentors' && 'Mentors'}
            {activePage === 'projects' && 'Projects'}
          </h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        {renderPage()}
      </main>
    </div>
  );
};

export default Dashboard;
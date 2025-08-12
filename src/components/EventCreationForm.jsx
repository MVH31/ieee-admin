import React, { useState } from 'react';

const EventCreationForm = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    // Event Details
    eventTitle: '',
    eventDescription: '',
    eventGuidelines: null,
    
    // Important Dates
    submissionStartDate: '',
    submissionEndDate: '',
    
    // Project Submission Criteria
    eligibleDomains: '',
    maxTeamSize: '',
    maxFunding: '',
    sdgGoals: '',
    applicationFormType: '',
    
    // Coordinator Details
    scopeMembersName: '',
    contact: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      eventGuidelines: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-primary py-8 text-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logos */}
        <div className="flex gap-10 items-center mb-8">

        <div className="mb-6">
          <button
            onClick={onBack}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Back to Events
          </button>
        </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-hovered uppercase">Event Creation Form</h1>
          </div>
          
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          
          {/* Event Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-hovered uppercase mb-6 pb-2 border-b-2 border-hovered">
              Event Details
            </h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="eventTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Title *
                </label>
                <input
                  type="text"
                  id="eventTitle"
                  name="eventTitle"
                  value={formData.eventTitle}
                  onChange={handleInputChange}
                  required
                  className="w-full text-gray-600 font-regular px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-hovered focus:border-transparent"
                  placeholder="Enter event title"
                />
              </div>

              <div>
                <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Description *
                </label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  value={formData.eventDescription}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:hovered focus:border-transparent resize-none"
                  placeholder="Enter event description (max 500 words)"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.eventDescription.length}/500 characters
                </div>
              </div>

              <div>
                <label htmlFor="eventGuidelines" className="block text-sm font-semibold text-gray-700 mb-2">
                  Event Guidelines PDF
                </label>
                  <input
                   type="file"
                   id="eventGuidelines"
                   name="eventGuidelines"
                   onChange={handleFileChange}
                   accept=".pdf"
                   className="w-80 px-4 py-3 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-hovered hover:file:bg-blue-100"
                 />
              </div>
            </div>
          </div>

          {/* Important Dates Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-hovered uppercase mb-6 pb-2 border-b-2">
              Important Dates
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="submissionStartDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Submission Start Date *
                </label>
                <input
                  type="date"
                  id="submissionStartDate"
                  name="submissionStartDate"
                  value={formData.submissionStartDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="submissionEndDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Submission End Date *
                </label>
                <input
                  type="date"
                  id="submissionEndDate"
                  name="submissionEndDate"
                  value={formData.submissionEndDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Project Submission Criteria Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-hovered uppercase mb-6 pb-2 border-b-2">
              Project Submission Criteria
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eligibleDomains" className="block text-sm font-medium text-gray-700 mb-2">
                  Eligible Domains *
                </label>
                <input
                  type="text"
                  id="eligibleDomains"
                  name="eligibleDomains"
                  value={formData.eligibleDomains}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., AI, IoT, Blockchain, etc."
                />
              </div>

              <div>
                <label htmlFor="maxTeamSize" className="block text-sm font-medium text-gray-700 mb-2">
                  Max Team Size *
                </label>
                <input
                  type="number"
                  id="maxTeamSize"
                  name="maxTeamSize"
                  value={formData.maxTeamSize}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 4"
                />
              </div>

              <div>
                <label htmlFor="maxFunding" className="block text-sm font-medium text-gray-700 mb-2">
                  Max Funding *
                </label>
                <input
                  type="text"
                  id="maxFunding"
                  name="maxFunding"
                  value={formData.maxFunding}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., $10,000"
                />
              </div>

              <div>
                <label htmlFor="sdgGoals" className="block text-sm font-medium text-gray-700 mb-2">
                  SDG Goals *
                </label>
                <input
                  type="text"
                  id="sdgGoals"
                  name="sdgGoals"
                  value={formData.sdgGoals}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., SDG 7, SDG 13"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="applicationFormType" className="block text-sm font-medium text-gray-700 mb-2">
                  Application Form Type *
                </label>
                <input
                  type="text"
                  id="applicationFormType"
                  name="applicationFormType"
                  value={formData.applicationFormType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Online form, PDF submission, etc."
                />
              </div>
            </div>
          </div>

          {/* Coordinator Details Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-hovered uppercase mb-6 pb-2 border-b-2 border-blue-600">
              Coordinator Details
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="scopeMembersName" className="block text-sm font-medium text-gray-700 mb-2">
                  Scope Members Name *
                </label>
                <input
                  type="text"
                  id="scopeMembersName"
                  name="scopeMembersName"
                  value={formData.scopeMembersName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter scope members name"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact *
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter contact number"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-hovered hover:bg-transparent hover:border-1 hover:text-hovered text-primary px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Create Event
            </button>
          </div>
        </form>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-200">
          Created by Spark Invotech and Sairam Incubator Techno Centre
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;

import React, { useState } from 'react';

const MentorList = () => {
  const [staffType, setStaffType] = useState('internal');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for internal staff
  const internalStaff = [
    {
      id: 'INT001',
      name: 'Dr. Sarah Johnson',
      department: 'Computer Science',
      email: 'sarah.johnson@ieee.edu',
      specialization: 'Artificial Intelligence, Machine Learning',
      projectsAssigned: 3
    },
    {
      id: 'INT002',
      name: 'Prof. Michael Chen',
      department: 'Electrical Engineering',
      email: 'michael.chen@ieee.edu',
      specialization: 'IoT, Embedded Systems',
      projectsAssigned: 2
    },
    {
      id: 'INT003',
      name: 'Dr. Emily Rodriguez',
      department: 'Data Science',
      email: 'emily.rodriguez@ieee.edu',
      specialization: 'Big Data Analytics, Statistics',
      projectsAssigned: 4
    },
    {
      id: 'INT004',
      name: 'Prof. David Kim',
      department: 'Robotics',
      email: 'david.kim@ieee.edu',
      specialization: 'Robotics, Control Systems',
      projectsAssigned: 1
    },
    {
      id: 'INT005',
      name: 'Dr. Lisa Wang',
      department: 'Cybersecurity',
      email: 'lisa.wang@ieee.edu',
      specialization: 'Network Security, Cryptography',
      projectsAssigned: 2
    }
  ];

  // Sample data for external staff
  const externalStaff = [
    {
      id: 'EXT001',
      name: 'Dr. Robert Smith',
      department: 'Industry Partner',
      email: 'robert.smith@techcorp.com',
      specialization: 'Cloud Computing, DevOps',
      projectsAssigned: 2
    },
    {
      id: 'EXT002',
      name: 'Prof. Jennifer Lee',
      department: 'Research Institute',
      email: 'jennifer.lee@research.org',
      specialization: 'Quantum Computing, Physics',
      projectsAssigned: 1
    },
    {
      id: 'EXT003',
      name: 'Dr. Thomas Brown',
      department: 'Startup Incubator',
      email: 'thomas.brown@startup.io',
      specialization: 'Entrepreneurship, Innovation',
      projectsAssigned: 3
    }
  ];

  const currentStaff = staffType === 'internal' ? internalStaff : externalStaff;
  const totalStaff = currentStaff.length;
  const totalProjects = currentStaff.reduce((sum, staff) => sum + staff.projectsAssigned, 0);
  const projectsLeft = 15 - totalProjects;

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(currentStaff.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStaffPage = currentStaff.slice(startIndex, endIndex);

  const filteredStaff = currentStaff.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-primary">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Mentor List</h1>
      </div>

      {/* Stats and Toggle Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-600">Projects Left</div>
            <div className="text-2xl font-bold text-blue-600">{projectsLeft}</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="text-sm text-gray-600">Staff Available</div>
            <div className="text-2xl font-bold text-green-600">{totalStaff}</div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setStaffType('internal')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              staffType === 'internal'
                ? 'bg-hovered text-primary'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Internal
          </button>
          <button
            onClick={() => setStaffType('external')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              staffType === 'external'
                ? 'bg-hovered text-primary'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            External
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search staff by name, department, or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium uppercase tracking-wider">
                  Staff ID
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff Name
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email ID
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialization
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No of Projects Assigned
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStaff.slice(startIndex, endIndex).map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {staff.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {staff.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {staff.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {staff.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    <div className="truncate" title={staff.specialization}>
                      {staff.specialization}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {staff.projectsAssigned}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-hovered border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hovered hover:text-primary w-full sm:w-auto"
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

export default MentorList;

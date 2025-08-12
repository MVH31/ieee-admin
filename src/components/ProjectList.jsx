import React, { useState } from 'react';

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');

  // Sample projects data
  const projects = [
    {
      id: 1,
      applicationId: 'APP001',
      studentName: 'Alex Johnson',
      domain: 'Artificial Intelligence',
      projectTitle: 'Smart Home Automation using AI'
    },
    {
      id: 2,
      applicationId: 'APP002',
      studentName: 'Sarah Chen',
      domain: 'Internet of Things',
      projectTitle: 'IoT-based Environmental Monitoring System'
    },
    {
      id: 3,
      applicationId: 'APP003',
      studentName: 'Michael Rodriguez',
      domain: 'Blockchain',
      projectTitle: 'Decentralized Supply Chain Management'
    },
    {
      id: 4,
      applicationId: 'APP004',
      studentName: 'Emily Wang',
      domain: 'Cybersecurity',
      projectTitle: 'Advanced Threat Detection System'
    },
    {
      id: 5,
      applicationId: 'APP005',
      studentName: 'David Kim',
      domain: 'Machine Learning',
      projectTitle: 'Predictive Analytics for Healthcare'
    },
    {
      id: 6,
      applicationId: 'APP006',
      studentName: 'Lisa Brown',
      domain: 'Robotics',
      projectTitle: 'Autonomous Navigation Robot'
    },
    {
      id: 7,
      applicationId: 'APP007',
      studentName: 'Robert Smith',
      domain: 'Cloud Computing',
      projectTitle: 'Multi-Cloud Resource Optimization'
    },
    {
      id: 8,
      applicationId: 'APP008',
      studentName: 'Jennifer Lee',
      domain: 'Data Science',
      projectTitle: 'Big Data Analytics Platform'
    }
  ];

  // Get unique domains for filter
  const domains = ['all', ...Array.from(new Set(projects.map(project => project.domain)))];

  // Filter projects based on search and domain
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.applicationId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDomain = selectedDomain === 'all' || project.domain === selectedDomain;
    
    return matchesSearch && matchesDomain;
  });

  // Calculate stats
  const totalProjects = projects.length;
  const projectsNeededToAssign = Math.floor(totalProjects * 0.3); // Assuming 30% need assignment

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjectsPage = filteredProjects.slice(startIndex, endIndex);

  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-primary">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Project List</h1>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Projects Needed to be Assigned</div>
          <div className="text-2xl font-bold text-orange-600">{projectsNeededToAssign}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Total Projects</div>
          <div className="text-2xl font-bold text-blue-600">{totalProjects}</div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search projects by student name, project title, or application ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="sm:w-48">
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {domains.map(domain => (
              <option key={domain} value={domain}>
                {domain === 'all' ? 'All Domains' : domain}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium uppercase tracking-wider">
                  S.No
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium uppercase tracking-wider">
                  Application ID
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium uppercase tracking-wider">
                  Domain
                </th>
                <th className="px-6 py-3 bg-hovered text-white text-left text-xs font-medium uppercase tracking-wider">
                  Project Title
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentProjectsPage.map((project, index) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {startIndex + index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.applicationId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.studentName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.domain}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    <div className="truncate" title={project.projectTitle}>
                      {project.projectTitle}
                    </div>
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

export default ProjectList;

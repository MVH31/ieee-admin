import React, { useState } from 'react';
import './admin.css';

const EventsMorePage = ({ eventId, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [mentorAssignments, setMentorAssignments] = useState({});
  
  // Sample mentors data
  const mentors = [
    { id: 1, name: "Dr. John Smith", dept: "Computer Science" },
    { id: 2, name: "Dr. Sarah Johnson", dept: "Electrical Engineering" },
    { id: 3, name: "Dr. Michael Brown", dept: "Mechanical Engineering" },
    { id: 4, name: "Dr. Emily Davis", dept: "Computer Science" },
    { id: 5, name: "Dr. Robert Wilson", dept: "Information Technology" }
  ];

  // Sample students data - you can modify these manually
  const students = [
    {
      id: 1,
      studentId: "STU001",
      studentName: "Alex Johnson",
      dept: "Computer Science",
      projectTitle: "AI-Powered Chatbot Development",
      domain: "Artificial Intelligence",
      applicationId: "APP001",
      mentor: null
    },
    {
      id: 2,
      studentId: "STU002",
      studentName: "Maria Garcia",
      dept: "Electrical Engineering",
      projectTitle: "Smart Home Automation System",
      domain: "IoT",
      applicationId: "APP002",
      mentor: null
    },
    {
      id: 3,
      studentId: "STU003",
      studentName: "David Chen",
      dept: "Computer Science",
      projectTitle: "Blockchain-based Voting System",
      domain: "Blockchain",
      applicationId: "APP003",
      mentor: null
    },
    {
      id: 4,
      studentId: "STU004",
      studentName: "Lisa Wang",
      dept: "Mechanical Engineering",
      projectTitle: "Renewable Energy Monitoring",
      domain: "Green Technology",
      applicationId: "APP004",
      mentor: null
    },
    {
      id: 5,
      studentId: "STU005",
      studentName: "James Wilson",
      dept: "Information Technology",
      projectTitle: "Cybersecurity Framework",
      domain: "Cybersecurity",
      applicationId: "APP005",
      mentor: null
    },
    {
      id: 6,
      studentId: "STU006",
      studentName: "Emma Thompson",
      dept: "Computer Science",
      projectTitle: "Machine Learning for Healthcare",
      domain: "Healthcare AI",
      applicationId: "APP006",
      mentor: null
    },
    {
      id: 7,
      studentId: "STU007",
      studentName: "Ryan Lee",
      dept: "Electrical Engineering",
      projectTitle: "Electric Vehicle Charging Station",
      domain: "Electric Vehicles",
      applicationId: "APP007",
      mentor: null
    },
    {
      id: 8,
      studentId: "STU008",
      studentName: "Sophia Rodriguez",
      dept: "Computer Science",
      projectTitle: "Augmented Reality Education Platform",
      domain: "AR/VR",
      applicationId: "APP008",
      mentor: null
    },
    {
      id: 9,
      studentId: "STU009",
      studentName: "Kevin Kim",
      dept: "Mechanical Engineering",
      projectTitle: "3D Printing for Medical Devices",
      domain: "Medical Technology",
      applicationId: "APP009",
      mentor: null
    },
    {
      id: 10,
      studentId: "STU010",
      studentName: "Amanda Foster",
      dept: "Information Technology",
      projectTitle: "Cloud-based Data Analytics",
      domain: "Cloud Computing",
      applicationId: "APP010",
      mentor: null
    }
  ];

  const filteredStudents = students.filter(student => {
    return student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
           student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
           student.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
           student.projectTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
           student.domain.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const studentsPerPage = 5;
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  const handleMentorChange = (studentId, mentorId) => {
    setMentorAssignments(prev => ({
      ...prev,
      [studentId]: mentorId
    }));
  };

  const handleAssignMentors = () => {
    // This will be implemented later to save mentor assignments
    console.log('Mentor assignments:', mentorAssignments);
    alert('Mentors assigned successfully!');
  };

  const handleDownload = (studentId) => {
    // This will be implemented later to download student application
    console.log(`Downloading application for student ${studentId}`);
    alert(`Downloading application for student ${studentId}`);
  };

  return (
    <div className="p-3 sm:p-4 lg:p-6 bg-primary">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="bg-gray-700 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ← Back to Events
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Student Applications</h1>
        </div>
        <button
          onClick={handleAssignMentors}
          className="w-full sm:w-auto bg-transparent text-hovered px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-hovered hover:border-1 hover:text-white"
        >
          Assign Mentors
        </button>
      </div>

      {/* Search Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search students, departments, projects, or domains..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-120 text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="bg-hovered px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">S.No</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Student ID</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Student Name</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Dept</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Project Title</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Domain</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Application ID</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Mentor</th>
                <th className="bg-hovered px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Download</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentStudents.map((student, index) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{startIndex + index + 1}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{student.studentId}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{student.studentName}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{student.dept}</td>
                  <td className="px-4 py-4 text-sm text-gray-900 max-w-xs truncate" title={student.projectTitle}>
                    {student.projectTitle}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{student.domain}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{student.applicationId}</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <select
                      value={mentorAssignments[student.id] || ''}
                      onChange={(e) => handleMentorChange(student.id, e.target.value)}
                      className="block text-black w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs"
                    >
                      <option value="">Select Mentor</option>
                      {mentors.map(mentor => (
                        <option key={mentor.id} value={mentor.id}>
                          {mentor.name} ({mentor.dept})
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDownload(student.id)}
                      className="bg-transparent text-hovered border-1 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors"
                    >
                      Download
                    </button>
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
          className="text-hovered px-4 py-2 border border-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 w-full sm:w-auto"
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
                  ? 'bg-transparent text-hovered border-1'
                  : 'text-hovered border border-1 hover:bg-gray-50 opacity-20'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="text-hovered px-4 py-2 border border-1 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 w-full sm:w-auto"
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

export default EventsMorePage;

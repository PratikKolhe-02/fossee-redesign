import { useState } from 'react';
import mockData from '../mockData.json';

const WorkshopList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredWorkshops = mockData.filter(workshop => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || workshop.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Upcoming Workshops</h1>
          <p className="mt-2 text-sm text-gray-500">Browse and register for technical training sessions.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search by title or instructor..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full sm:w-64 shadow-sm"
          />
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full sm:w-auto bg-white shadow-sm"
          >
            <option value="All">All Status</option>
            <option value="Open">Open Seats</option>
            <option value="Full">Currently Full</option>
          </select>
        </div>
      </div>

      {filteredWorkshops.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No workshops found</h3>
          <p className="mt-1 text-sm text-gray-500">We couldn't find anything matching "{searchTerm}".</p>
          <button 
            onClick={() => { setSearchTerm(''); setFilterStatus('All'); }}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none transition"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight pr-4">{workshop.title}</h3>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full border ${workshop.status === 'Open' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    {workshop.status}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 space-y-3 mb-6">
                  <p className="flex items-center">
                    <span className="font-semibold min-w-[85px] text-gray-900">Date:</span> 
                    {workshop.date}
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold min-w-[85px] text-gray-900">Instructor:</span> 
                    {workshop.instructor}
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold min-w-[85px] text-gray-900">Seats:</span> 
                    {workshop.seats} available
                  </p>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <button 
                  disabled={workshop.status !== 'Open'}
                  className={`w-full py-3 rounded-lg font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${workshop.status === 'Open' ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                >
                  {workshop.status === 'Open' ? 'Book Workshop' : 'Currently Full'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopList;
import mockData from '../mockData.json';

const WorkshopList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex justify-between items-end border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Upcoming Workshops</h1>
          <p className="mt-2 text-sm text-gray-500">Browse and register for technical training sessions.</p>
        </div>
        <button className="hidden sm:block text-sm text-blue-600 font-medium hover:text-blue-800">
          Filter Options
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.map((workshop) => (
          <div key={workshop.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200 flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-4">{workshop.title}</h3>
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${workshop.status === 'Open' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                  {workshop.status}
                </span>
              </div>
              
              <div className="text-sm text-gray-600 space-y-2.5 mb-6">
                <p className="flex items-center">
                  <span className="font-medium min-w-[80px]">Date:</span> 
                  {workshop.date}
                </p>
                <p className="flex items-center">
                  <span className="font-medium min-w-[80px]">Instructor:</span> 
                  {workshop.instructor}
                </p>
                <p className="flex items-center">
                  <span className="font-medium min-w-[80px]">Seats:</span> 
                  {workshop.seats} available
                </p>
              </div>
            </div>
            
            <div className="p-6 pt-0 mt-auto">
              <button 
                disabled={workshop.status !== 'Open'}
                className={`w-full py-2.5 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${workshop.status === 'Open' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                {workshop.status === 'Open' ? 'Book Workshop' : 'Currently Full'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopList;
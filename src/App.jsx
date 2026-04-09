import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mt-10">
          Welcome to the FOSSEE Redesign
        </h1>
      </main>
    </div>
  )
}

export default App;
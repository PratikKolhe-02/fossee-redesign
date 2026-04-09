import { useState } from 'react';
import Navbar from './components/Navbar';
import WorkshopList from './components/WorkshopList';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('workshops');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-16">
      <Navbar onLoginClick={() => setCurrentView('login')} />
      
      <main className="flex-grow">
        {currentView === 'workshops' ? (
          <WorkshopList />
        ) : (
          <Login onBack={() => setCurrentView('workshops')} />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App;
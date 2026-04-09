import { useState } from 'react';
import Navbar from './components/Navbar';
import WorkshopList from './components/WorkshopList';
import Login from './components/Login';

function App() {
  const [currentView, setCurrentView] = useState('workshops');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar onLoginClick={() => setCurrentView('login')} />
      
      <main>
        {currentView === 'workshops' ? (
          <WorkshopList />
        ) : (
          <Login onBack={() => setCurrentView('workshops')} />
        )}
      </main>
    </div>
  )
}

export default App;
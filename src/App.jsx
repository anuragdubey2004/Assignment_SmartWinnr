import { useState, useEffect } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import Analytics from './components/Analytics';

const generateMockData = () => ({
  users: Math.floor(Math.random() * 10000) + 5000,
  signups: Math.floor(Math.random() * 500) + 100,
  sales: Math.floor(Math.random() * 50000) + 20000,
  activeUsers: Math.floor(Math.random() * 5000) + 2000,
});

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [metrics, setMetrics] = useState(generateMockData());
  const [users, setUsers] = useState(mockUsers);

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(() => {
        setMetrics(generateMockData());
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="flex-1 overflow-y-auto">
        <Header activeTab={activeTab} currentUser={currentUser} />

        <div className="p-6">
          {activeTab === 'dashboard' && <Dashboard metrics={metrics} />}
          {activeTab === 'users' && <UserManagement users={users} setUsers={setUsers} />}
          {activeTab === 'analytics' && <Analytics />}
        </div>
      </main>
    </div>
  );
}

export default App;
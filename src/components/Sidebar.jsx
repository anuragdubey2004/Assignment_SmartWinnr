import { TrendingUp, Users, Menu, X, LogOut } from 'lucide-react';

function Sidebar({ sidebarOpen, setSidebarOpen, activeTab, setActiveTab, onLogout }) {
  return (
    <aside className={`bg-gray-900 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4 flex items-center justify-between">
        <h1 className={`font-bold text-xl ${!sidebarOpen && 'hidden'}`}>Admin Panel</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded">
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="mt-8">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition ${activeTab === 'dashboard' ? 'bg-gray-800 border-l-4 border-blue-500' : ''}`}
        >
          <TrendingUp size={20} />
          {sidebarOpen && <span>Dashboard</span>}
        </button>
        
        <button
          onClick={() => setActiveTab('users')}
          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition ${activeTab === 'users' ? 'bg-gray-800 border-l-4 border-blue-500' : ''}`}
        >
          <Users size={20} />
          {sidebarOpen && <span>User Management</span>}
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition ${activeTab === 'analytics' ? 'bg-gray-800 border-l-4 border-blue-500' : ''}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {sidebarOpen && <span>Analytics</span>}
        </button>
      </nav>

      <div className="absolute bottom-4 left-0 right-0 px-4">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-600 bg-red-500 rounded-lg transition"
        >
          <LogOut size={20} />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
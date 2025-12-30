function Header({ activeTab, currentUser }) {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">
        {activeTab === 'dashboard' && 'Dashboard Overview'}
        {activeTab === 'users' && 'User Management'}
        {activeTab === 'analytics' && 'Analytics & Reports'}
      </h2>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-800">{currentUser.name}</p>
          <p className="text-xs text-gray-500">{currentUser.role}</p>
        </div>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {currentUser.name.charAt(0)}
        </div>
      </div>
    </header>
  );
}

export default Header;
import { useState } from 'react';
import UserModal from './UserModal';

function UserManagement({ users, setUsers }) {
  const [editingUser, setEditingUser] = useState(null);

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleEditUser = (user) => {
    setEditingUser({ ...user });
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditingUser(null);
  };

  const handleToggleStatus = (id) => {
    setUsers(users.map(u => 
      u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u
    ));
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h3 className="text-lg font-bold text-gray-800">User Management</h3>
          <p className="text-sm text-gray-500">Manage users and their permissions</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button onClick={() => handleEditUser(user)} className="text-blue-600 hover:text-blue-800">
                      Edit
                    </button>
                    <button onClick={() => handleToggleStatus(user.id)} className="text-orange-600 hover:text-orange-800">
                      Toggle
                    </button>
                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingUser && (
        <UserModal
          user={editingUser}
          onSave={handleSaveUser}
          onClose={() => setEditingUser(null)}
        />
      )}
    </>
  );
}

export default UserManagement;
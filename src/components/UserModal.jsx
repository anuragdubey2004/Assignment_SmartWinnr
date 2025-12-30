import { useState } from 'react';

function UserModal({ user, onSave, onClose }) {
  const [editedUser, setEditedUser] = useState(user);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Edit User</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              value={editedUser.role}
              onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option>User</option>
              <option>Admin</option>
              <option>Moderator</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onSave(editedUser)}
              className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
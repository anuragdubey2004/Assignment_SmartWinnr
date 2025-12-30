import { useState } from 'react';
import { Shield } from 'lucide-react';

function Login({ onLogin }) {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email === 'admin@.com' && loginForm.password === 'admin123') {
      onLogin({ name: 'Admin User', email: 'admin@.com', role: 'Admin' });
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Try: admin@.com / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Sign in to access analytics</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="admin@.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="admin123"
            />
          </div>

          {loginError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {loginError}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            Demo credentials:<br />
            <span className="font-mono">admin@.com / admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
// components/AdminAuthWrapper.tsx
'use client';

import { useState } from 'react';

export default function AdminAuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'krishna') {
      setIsAuthed(true);
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthed) {
    return (
      <div className="h-screen flex items-center justify-center bg-neutral-900 text-white">
        <div className="bg-neutral-800 p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">🔐 Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white mb-3 outline-none"
          />
          {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

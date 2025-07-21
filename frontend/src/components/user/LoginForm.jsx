// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginForm = () => {
//   const signinUrl = `${import.meta.env.VITE_BACKEND_URL}/customers-login`;
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signInError, setSignInError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     setSignInError(false);
//     setLoading(true);

//     try {
//       const response = await axios.post(signinUrl, { email, password });

//       // Save token
//       localStorage.setItem('token', response.data.token);

//       // Redirect to intended page
//       navigate('/AdminDashboard');

//     } catch (error) {
//       const status = error.response?.status;

//       if (status === 301) {
//         localStorage.setItem('token', error.response.data.token);
//         navigate(`${error.response.data.redirectUrl}`);
//       } else {
//         console.error('Login error:', error.response?.data?.message || error.message);
//         setSignInError(true);
//       }

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-sky-500 to-indigo-500 min-h-screen flex justify-center items-center p-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-cyan-600">
        
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img src="./logo.svg" alt="Logo" className="w-36 h-auto" />
//         </div>

//         {/* Heading */}
//         <div className="text-center mb-6">
//           <h1 className="text-xl font-bold text-gray-800">Sign In</h1>
//           <p className="text-gray-600">Enter your credentials to access your account</p>
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
//           <input
//             id="email"
//             type="email"
//             className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600 focus:outline-none"
//             placeholder="abc@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
//           <input
//             id="password"
//             type="password"
//             className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600 focus:outline-none"
//             placeholder="Your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="button"
//           onClick={handleLogin}
//           disabled={loading}
//           className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors disabled:opacity-50"
//         >
//           {loading ? 'Signing In...' : 'Sign In'}
//         </button>

//         {/* Error Message */}
//         {signInError && (
//           <p className="mt-4 text-red-500 text-center text-sm">
//             The ID/password combination is incorrect
//           </p>
//         )}

//         {/* Signup Redirect */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don&apos;t have an account?{' '}
//             <Link to="/customer-register" className="text-cyan-600 font-bold hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setSignInError(false);
    setLoading(true);

    // Dummy auth logic
    setTimeout(() => {
      if (email === 'afraj@gmail.com' && password === 'pass123') {
        localStorage.setItem('token', 'dummy-token');
        localStorage.setItem('role', 'Admin');
        navigate('/dashboard');
      } else {
        setSignInError(true);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Branding Panel */}
        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex flex-col items-center justify-center p-8">
          <img src="./logo.svg" alt="Logo" className="w-36 mb-6" />
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-center text-sm">Log in to your dashboard and manage your account</p>
        </div>

        {/* Right Form Panel */}
        <div className="p-8">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

          <div className="mb-4 relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          {signInError && (
            <p className="text-red-500 text-center mt-4 text-sm">
              The email/password combination is incorrect
            </p>
          )}

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link to="/customer-register" className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios'; // ❌ Commented out for dummy use

// const LoginForm = () => {
//   // const signinUrl = `${import.meta.env.VITE_BACKEND_URL}/customers-login`;
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signInError, setSignInError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     setSignInError(false);
//     setLoading(true);

//     // Dummy auth logic
//     setTimeout(() => {
//       if (email === 'afraj@gmail.com' && password === 'pass123') {
//         localStorage.setItem('token', 'dummy-token');
//         localStorage.setItem('role', 'Admin');
//         navigate('/dashboard'); // redirects to AdminDashboard
//       } else {
//         setSignInError(true);
//       }
//       setLoading(false);
//     }, 1000);


//     // ✅ Uncomment below for real API use
//     /*
//     try {
//       const response = await axios.post(signinUrl, { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/AdminDashboard');
//     } catch (error) {
//       const status = error.response?.status;
//       if (status === 301) {
//         localStorage.setItem('token', error.response.data.token);
//         navigate(`${error.response.data.redirectUrl}`);
//       } else {
//         console.error('Login error:', error.response?.data?.message || error.message);
//         setSignInError(true);
//       }
//     } finally {
//       setLoading(false);
//     }
//     */
//   };

//   return (
//     <div className=" min-h-screen flex justify-center items-center p-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border ">
//         <div className="flex justify-center mb-6">
//           <img src="./logo.svg" alt="Logo" className="w-36 h-auto" />
//         </div>
//         <div className="text-center mb-6">
//           <h1 className="text-xl font-bold text-gray-800">Sign In</h1>
//           <p className="text-gray-600">Enter your credentials to access your account</p>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
//           <input
//             id="email"
//             type="email"
//             className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600 focus:outline-none"
//             placeholder="admin@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
//           <input
//             id="password"
//             type="password"
//             className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600 focus:outline-none"
//             placeholder="password123"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="button"
//           onClick={handleLogin}
//           disabled={loading}
//           className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors disabled:opacity-50"
//         >
//           {loading ? 'Signing In...' : 'Sign In'}
//         </button>
//         {signInError && (
//           <p className="mt-4 text-red-500 text-center text-sm">
//             The ID/password combination is incorrect
//           </p>
//         )}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Don&apos;t have an account?{' '}
//             <Link to="/customer-register" className="text-cyan-600 font-bold hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

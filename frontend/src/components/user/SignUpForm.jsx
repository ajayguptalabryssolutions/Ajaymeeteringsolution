// import React from 'react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignUpForm = () => {
//   const navigate = useNavigate();
//   const registerApi = `${import.meta.env.VITE_BACKEND_URL}/create-customers`;

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     countryCode: '',
//     phoneNumber: '',
//     companyName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       firstName,
//       lastName,
//       countryCode,
//       phoneNumber,
//       email,
//       password,
//       confirmPassword,
//     } = formData;

//     if (
//       !firstName ||
//       !lastName ||
//       !countryCode ||
//       !phoneNumber ||
//       !email ||
//       !password ||
//       !confirmPassword
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//       return;
//     }

//     try {
//       const response = await axios.post(registerApi, formData);

//       if (response.status === 201) {
//         alert('Registration successful!');
//         navigate('/');

//         // Reset form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           countryCode: '',
//           phoneNumber: '',
//           companyName: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//         });
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       const message =
//         error.response?.data?.message || 'An error occurred. Please try again.';
//       alert(`Error: ${message}`);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-6">
//       <div className="w-full md:max-w-[40%] sm:max-w-[50%] bg-white p-6 rounded-xl shadow-lg border ">
//         <div className="flex justify-center mb-3">
//           <img src="./logo.svg" alt="Logo" className="w-40 h-20" />
//         </div>

//         <h2 className="text-xl font-semibold mb-6 text-center">Get Started Now</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Fields */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//           </div>

//           {/* Phone Fields */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               name="countryCode"
//               placeholder="Country Code"
//               value={formData.countryCode}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//             <input
//               type="text"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//           </div>

//           {/* Company Name */}
//           <input
//             type="text"
//             name="companyName"
//             placeholder="Company Name (Optional)"
//             value={formData.companyName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           {/* Password */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors"
//           >
//             Submit
//           </button>
//         </form>

//         <p className="mt-4 text-center">
//           Already have an account?{' '}
//           <Link to="/" className="text-cyan-600 hover:underline">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

//////////////////////////////////////////



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, Building } from 'lucide-react';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '',
    phoneNumber: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      countryCode,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = formData;

    if (!firstName || !lastName || !countryCode || !phoneNumber || !email || !password || !confirmPassword) {
      alert('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setTimeout(() => {
      alert(' Dummy registration successful!');
      navigate('/login');
      setFormData({
        firstName: '',
        lastName: '',
        countryCode: '',
        phoneNumber: '',
        companyName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-blue-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side */}
        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex flex-col justify-center items-center p-8">
          <img src="./logo.svg" alt="Logo" className="w-36 mb-6" />
          <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
          <p className="text-center text-sm">Start your journey by creating a free account with us.</p>
        </div>

        {/* Right Side */}
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="relative w-1/2">
                <User className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="relative w-1/2">
                <User className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative w-1/2">
                <Phone className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Country Code"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="relative w-1/2">
                <Phone className="absolute left-2 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <Building className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name (Optional)"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-8 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-8 pr-10 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-2 top-3.5 text-gray-400" size={18} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-8 pr-10 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 cursor-pointer text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{' '}
            <Link to="/" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios'; // ❌ Commented out for dummy use

// const SignUpForm = () => {
//   const navigate = useNavigate();
//   // const registerApi = `${import.meta.env.VITE_BACKEND_URL}/create-customers`; // ❌ Commented for dummy use

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     countryCode: '',
//     phoneNumber: '',
//     companyName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       firstName,
//       lastName,
//       countryCode,
//       phoneNumber,
//       email,
//       password,
//       confirmPassword,
//     } = formData;

//     if (
//       !firstName || !lastName || !countryCode || !phoneNumber ||
//       !email || !password || !confirmPassword
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//       return;
//     }

//     // ✅ Dummy registration logic
//     setTimeout(() => {
//       alert('Dummy registration successful!');
//       navigate('/login');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         countryCode: '',
//         phoneNumber: '',
//         companyName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       });
//     }, 1000);

//     // ✅ Real API code (commented out)
//     /*
//     try {
//       const response = await axios.post(registerApi, formData);
//       if (response.status === 201) {
//         alert('Registration successful!');
//         navigate('/');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           countryCode: '',
//           phoneNumber: '',
//           companyName: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//         });
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       const message = error.response?.data?.message || 'An error occurred.';
//       alert(`Error: ${message}`);
//     }
//     */
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-6">
//       <div className="w-full md:max-w-[40%] sm:max-w-[50%] bg-white p-6 rounded-xl shadow-lg border">
//         <div className="flex justify-center mb-3">
//           <img src="./logo.svg" alt="Logo" className="w-40 h-20" />
//         </div>

//         <h2 className="text-xl font-semibold mb-6 text-center">Get Started Now</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//           </div>

//           <div className="flex flex-col md:flex-row gap-4">
//             <input
//               type="text"
//               name="countryCode"
//               placeholder="Country Code"
//               value={formData.countryCode}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//             <input
//               type="text"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//               className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//             />
//           </div>

//           <input
//             type="text"
//             name="companyName"
//             placeholder="Company Name (Optional)"
//             value={formData.companyName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-600"
//           />

//           <button
//             type="submit"
//             className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors"
//           >
//             Submit
//           </button>
//         </form>

//         <p className="mt-4 text-center">
//           Already have an account?{' '}
//           <Link to="/" className="text-cyan-600 hover:underline">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   User, Mail, Phone, Building, Lock, Eye, EyeOff, CheckCircle, AlertCircle
// } from 'lucide-react';

// const SignUpForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     countryCode: '',
//     phoneNumber: '',
//     companyName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.countryCode.trim()) newErrors.countryCode = 'Country code is required';
//     if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
//     else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       alert('Registration successful! Welcome aboard!');
//       navigate('/login');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         countryCode: '',
//         phoneNumber: '',
//         companyName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       });
//     }, 2000);
//   };

//   const InputField = ({
//     icon: Icon,
//     type = 'text',
//     name,
//     placeholder,
//     value,
//     onChange,
//     required = false,
//     className = '',
//     showPasswordToggle = false,
//     showPassword = false,
//     onTogglePassword = () => {}
//   }) => (
//     <div className={`relative ${className}`}>
//       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//         <Icon className="h-5 w-5 text-gray-400" />
//       </div>
//       <input
//         type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className={`w-full pl-10 pr-${showPasswordToggle ? '10' : '4'} py-3 border rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 ${
//           errors[name] ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
//         }`}
//       />
//       {showPasswordToggle && (
//         <button
//           type="button"
//           onClick={onTogglePassword}
//           className="absolute inset-y-0 right-0 pr-3 flex items-center"
//         >
//           {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" /> : <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />}
//         </button>
//       )}
//       {errors[name] && (
//         <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
//           <AlertCircle className="h-4 w-4 mr-1" />
//           {errors[name]}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
//         <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-2 text-center">
//             <div className="flex justify-center">
//               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//                 <User className="h-8 w-8 text-blue-600" />
//               </div>
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
//             <p className="text-blue-100">Join us and start your journey today</p>
//           </div>

//           {/* Replace this with <form> */}
//           <form onSubmit={handleSubmit} className="px-4 py-2 space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField icon={User} name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
//               <InputField icon={User} name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField icon={Phone} name="countryCode" placeholder="+1" value={formData.countryCode} onChange={handleChange} required />
//               <InputField icon={Phone} name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
//             </div>

//             <InputField icon={Building} name="companyName" placeholder="Enter your company name" value={formData.companyName} onChange={handleChange} />

//             <InputField icon={Mail} type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField icon={Lock} name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required showPasswordToggle showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} />
//               <InputField icon={Lock} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required showPasswordToggle showPassword={showConfirmPassword} onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)} />
//             </div>

//             <button type="submit" disabled={isLoading} className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 ${
//               isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'
//             }`}>
//               {isLoading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   <span>Creating Account...</span>
//                 </>
//               ) : (
//                 <>
//                   <CheckCircle className="h-5 w-5" />
//                   <span>Create Account</span>
//                 </>
//               )}
//             </button>

//             <div className="bg-gray-50 rounded-lg p-4 mt-4">
//               <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
//               <ul className="text-sm text-gray-600 space-y-1">
//                 <li className="flex items-center">
//                   <CheckCircle className={`h-4 w-4 mr-2 ${formData.password.length >= 6 ? 'text-green-500' : 'text-gray-400'}`} />
//                   At least 6 characters
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className={`h-4 w-4 mr-2 ${formData.password === formData.confirmPassword && formData.password ? 'text-green-500' : 'text-gray-400'}`} />
//                   Passwords match
//                 </li>
//               </ul>
//             </div>
//           </form>

//           <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-200">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <button
//                 onClick={() => navigate('/login')}
//                 className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors bg-none border-none cursor-pointer"
//               >
//                 Sign In
//               </button>
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500">
//             By creating an account, you agree to our{' '}
//             <button className="text-blue-600 hover:underline bg-none border-none cursor-pointer">Terms of Service</button>{' '}
//             and{' '}
//             <button className="text-blue-600 hover:underline bg-none border-none cursor-pointer">Privacy Policy</button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   User, Mail, Phone, Building, Lock, Eye, EyeOff, CheckCircle, AlertCircle
// } from 'lucide-react';

// const SignUpForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     countryCode: '',
//     phoneNumber: '',
//     companyName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.countryCode.trim()) newErrors.countryCode = 'Country code is required';
//     if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
//     else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       alert('Registration successful! Welcome aboard!');
//       navigate('/login');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         countryCode: '',
//         phoneNumber: '',
//         companyName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       });
//     }, 2000);
//   };

//   const InputField = ({
//     icon: Icon,
//     type = 'text',
//     name,
//     placeholder,
//     value,
//     onChange,
//     required = false,
//     className = '',
//     showPasswordToggle = false,
//     showPassword = false,
//     onTogglePassword = () => {}
//   }) => (
//     <div className={`relative ${className}`}>
//       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//         <Icon className="h-5 w-5 text-gray-400" />
//       </div>
//       <input
//         type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className={`w-full pl-10 ${showPasswordToggle ? 'pr-10' : 'pr-4'} py-3 border rounded-lg shadow-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 ${
//           errors[name] ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
//         }`}
//       />
//       {showPasswordToggle && (
//         <button
//           type="button"
//           onClick={onTogglePassword}
//           className="absolute inset-y-0 right-0 pr-3 flex items-center"
//         >
//           {showPassword ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" /> : <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />}
//         </button>
//       )}
//       {errors[name] && (
//         <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
//           <AlertCircle className="h-4 w-4 mr-1" />
//           {errors[name]}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
//         <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-2 text-center">
//             <div className="flex justify-center">
//               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//                 <User className="h-8 w-8 text-blue-600" />
//               </div>
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
//             <p className="text-blue-100">Join us and start your journey today</p>
//           </div>

//           <form onSubmit={handleSubmit} className="px-4 py-2 space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField icon={User} name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
//               <InputField icon={User} name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField icon={Phone} name="countryCode" placeholder="+1" value={formData.countryCode} onChange={handleChange} required />
//               <InputField icon={Phone} name="phoneNumber" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} required />
//             </div>

//             <InputField icon={Building} name="companyName" placeholder="Enter your company name" value={formData.companyName} onChange={handleChange} />

//             <InputField icon={Mail} type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField icon={Lock} name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required showPasswordToggle showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} />
//               <InputField icon={Lock} name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required showPasswordToggle showPassword={showConfirmPassword} onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)} />
//             </div>

//             <button type="submit" disabled={isLoading} className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 ${
//               isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'
//             }`}>
//               {isLoading ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                   <span>Creating Account...</span>
//                 </>
//               ) : (
//                 <>
//                   <CheckCircle className="h-5 w-5" />
//                   <span>Create Account</span>
//                 </>
//               )}
//             </button>

//             <div className="bg-gray-50 rounded-lg p-4 mt-4">
//               <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
//               <ul className="text-sm text-gray-600 space-y-1">
//                 <li className="flex items-center">
//                   <CheckCircle className={`h-4 w-4 mr-2 ${formData.password.length >= 6 ? 'text-green-500' : 'text-gray-400'}`} />
//                   At least 6 characters
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className={`h-4 w-4 mr-2 ${formData.password === formData.confirmPassword && formData.password ? 'text-green-500' : 'text-gray-400'}`} />
//                   Passwords match
//                 </li>
//               </ul>
//             </div>
//           </form>

//           <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-200">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <button
//                 onClick={() => navigate('/login')}
//                 className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors bg-none border-none cursor-pointer"
//               >
//                 Sign In
//               </button>
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <p className="text-sm text-gray-500">
//             By creating an account, you agree to our{' '}
//             <button className="text-blue-600 hover:underline bg-none border-none cursor-pointer">Terms of Service</button>{' '}
//             and{' '}
//             <button className="text-blue-600 hover:underline bg-none border-none cursor-pointer">Privacy Policy</button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

